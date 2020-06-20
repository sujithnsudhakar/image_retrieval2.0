const express = require('express');
const mongoose = require("mongoose");
const cors = require('cors');
const multer = require('multer');
const bodyParser = require('body-parser');
const path = require('path')
const fs = require('fs')
const app = express();
const spawn = require('child_process').spawn;
const neatCsv = require('neat-csv');
const fastCsv = require('fast-csv');
//const port = process.env.PORT || 8080;

const port = 3000

//Configure middleware using bodyParser
app.use(bodyParser.urlencoded({extended:true}))

const initCon = require('./database/mongoose')
const RImages = require('./database/models/repoImages');
const QImages = require('./database/models/queryImages');

//Initiate DB connection
initCon();

/*Enable json parsing, substitution of body parser*/
app.use(express.json());

/*CORS Cross origin resource sharing image_dir/CIFAR_subset/
*/
//var publicDir = require('path').join('','../backend/image_dir/Toyset/');
//var publicDir = require('path').join('','../backend/image_dir/CIFAR_subset/');
//var publicDir = require('path').join('','../backend/image_dir/pascal/');
//var publicDir = require('path').join('','../backend/image_dir/CIFAR_sample/');

//app.use('/static',express.static(publicDir));
//app.use('/static',express.static(path.join(__dirname,'image_dir/CIFAR_sample/')));
app.use('/static',express.static(path.join(__dirname,'image_dir/pascal/')));


//app.use(cors());
app.use(cors({
  exposedHeaders: ['Content-Length', 'qId'],
}));

//CORS - To all the requests from different origins
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

/*
localhost:3000 - backend api
localhost:4200 - frontend
Send index.html on page load
*/
//During deployment angular code isfetched from public as it is build there
app.use(express.static(path.join(__dirname,'public')));

//Endpoint for working with explanation csv file
app.get('/explain', function(req, res) {
  var csvData;
  var jsonData;
  fs.readFile('./explanation/explain.csv', async (err, data) => {
    if (err) {
      console.error(err)
      return
    }
    csvData = neatCsv(data)
    //console.log(await neatCsv(data))
    csvData.then(function(result) {
      console.log(result);
      res.json(result);
    })
  })
});

app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'public/index.html'));
});

/*app.get('/',(req,res)=>{
  res.sendFile(__dirname,'../frontend/index.html');
});*/

//Store in local storage after filtering the file types to image --Start
var storage = multer.diskStorage({
    //Commented the below lines of code as we rae not storing the query image in local directory
    //Since we are going with 'search by example' setting in our retrieval system
    /*destination: function (req, file, cb) {
      //query image will be saved at this location for using it later
      cb(null, 'images/')
    },
    filename: function (req, file, cb) {
      //cb(null,file.fieldname + '-' + Date.now())
      cb(null,file.originalname)
    }*/
  })
  const fileFilter=(req, file, cb)=>{
    if(file.mimetype ==='image/jpeg' || file.mimetype ==='image/jpg' || file.mimetype ==='image/png'){
        cb(null,true);
    }else{
        cb(null, false);
    }  
   }
  
 var upload = multer({ 
     storage:storage,
    limits:{
         fileSize: 1024 * 1024 * 500
     },
     fileFilter:fileFilter
  });
  
  //The method is called on click of upload button
  app.post('/fileupload', upload.single('file'), (req, res, next) => {
    console.log('req.files',req.file);
    var file = req.file
    let data = [];
    console.log('Type of File: ',typeof(file));
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }
    new RImages({'fieldname': req.file.fieldname,'originalname': req.file.originalname,
    'encoding': req.file.encoding, 'mimetype': req.file.mimetype,'destination':req.file.destination,
    'filename':req.file.filename,'path':req.file.path,'size':req.file.size
    }).save()
    .then((list) => res.send(list))
    .catch((error)=>console.log(error));
  })
  
//Execute python code on click of Search button
app.post('/runscript', upload.single('file'), (req, res,next) => {
  console.log('req.file',req.file);  
  var file = req.file
  var img_dir= __dirname + '\\' +file.originalname;
  console.log('********Image Directory*******',img_dir)
    if (!file) {
      const error = new Error('Please upload a file')
      error.httpStatusCode = 400
      return next(error)
    }    
    new QImages({'fieldname': req.file.fieldname,'originalname': req.file.originalname,
    'encoding': req.file.encoding, 'mimetype': req.file.mimetype,'destination':req.file.destination,
    'filename':req.file.filename,'path':img_dir,'size':req.file.size
    }).save().then((image) => {
      console.log('List after saving query Image',image._id);
      res.setHeader('qId', image._id);
    }).catch((error)=>console.log(error));

    queryImagePath  = req.file.path
    //fileName  = req.file.filename
    org_name = req.file.originalname
    //Below code was used for milestone 1
    //var process = spawn('python',['Feature.py','-i',queryImagePath]);
    console.log('Query Path',queryImagePath)
    console.log('org_name',org_name)
    var process = spawn('python',['search.py',org_name]);

    // Takes stdout data from script which executed
    console.log('***********************') 
    process.stdout.on('data', function(data) { 
    console.log('***********************',data.toString());
    //console.log(type(data.toString()))
    var temp = data.toString().replace(/\n|\r/g, "");
    res.json(temp);
})
})

/* On click of explain call the chart method in frontend along with the below method 
for persisting the related images that can be later used for recording user clicks
*/
app.post('/persistQueryObj',(req, res, next) => {
  var repoId = '';
  var qRelatedImages = [];
  var queryId = req.body[0];
  var repoImage = req.body[1];
  console.log('Repo Image: ',repoImage)
  console.log('Query id: ',queryId)
  
  var id = mongoose.Types.ObjectId(queryId)
  RImages.findOne({originalname: repoImage.name}, function(err,obj) { 
    console.log('Tuple from RImages',obj); 
    console.log('Tuple Id',obj._id);
    QImages.findByIdAndUpdate(
      {
        _id: id
      }, 
      {
        $push: { relatedImages: obj._id }
      },
      {
        new: true,                      
        runValidators: true              
      })
      .then(doc => {
        console.log(doc)
      });
  });
  console.log('Outside Id',repoId);
});

var upload_multi = multer({ 
 storage:storage,
 limits:{
      fileSize: 1024 * 1024 * 500
  },
  fileFilter:fileFilter
}).array('file',20);

//Update multiple images metadata
app.post('/uploadmultiple',(req,res,next) => {
    upload_multi(req,res,function(err) {
      console.log('************Files inside request*******************');
      console.log('Files',req.files);
      console.log('Type of Files',typeof(req.files));

      if(err) {
          return res.end("Error uploading file.");
      }
      res.end("File is uploaded");
  });
})

app.listen(port,() =>{
  //run python script for generating feature vectors
  //var cp = spawn('python',['Test.py']);
  //var cp = spawn('python',['Feature.py','-f','image_dir/CIFAR_subset']);
  //var cp = spawn('python',['Feature.py','-f','image_dir/pascal']);
  //var cp = spawn('python',['Feature.py','-f','image_dir/Toyset']); 
  /*var cp = spawn('python',['Feature.py','-f','image_dir/CIFAR_sample']);
  cp.stdout.on('data', function(data){ 
  var temp = data.toString();
  console.log(temp)
  })*/
  console.log("Server connected to port:",port);
});

