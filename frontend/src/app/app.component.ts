import { Component, OnInit } from '@angular/core';
import { UploadserviceService } from './uploadservice.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import * as HighCharts from 'highcharts';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'Image Search';
  file = {};
  files:string  []  =  [];
  imgNameList = [];
  jsonImageObj = [];
  uploadForm: FormGroup;
  queryId = '';
  resultsCount : number;
  uploadedImages : Array<string> = [];
  addinputValue: string = "";
  description: string = "";
  localUrl: any;
  selectedImages = [];
  highest: string = "";
  moderate: string = "";
  lowest: string = "";
  jsonExplainObj = [];
  constructor(private uploadservice:UploadserviceService,private formBuilder: FormBuilder, private httpClient: HttpClient){}
  runscript(){
    this.resultsCount = 0;
    this.imgNameList = []
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('file').value);

    //Display query image for user
    //var reader = new FileReader();
    //this.localUrl = reader.readAsDataURL(this.uploadForm.get('file').value);      

    this.uploadservice.runscript(formData).subscribe(res =>{
      this.jsonImageObj = [];
      var matchedImages = res.body;
      console.log(res.headers.get('qId'));
      this.queryId = res.headers.get('qId');
      this.jsonImageObj = JSON.parse(matchedImages.toString());
      console.log('color weight: ',this.jsonImageObj[0].weight1)
      console.log('foreground weight: ',this.jsonImageObj[0].weight2)
      console.log('highlevel feature weight: ',this.jsonImageObj[0].weight3)
      var color_wt = this.jsonImageObj[0].weight1;
      var fg_wt = this.jsonImageObj[0].weight2;
      var hf_wt = this.jsonImageObj[0].weight3;

      if(color_wt > fg_wt && color_wt > hf_wt){
        this.highest = 'color shape and texture';
      }
      else if(fg_wt > color_wt && fg_wt > hf_wt ){
        this.highest = 'foreground';
      }
      else{
        this.highest = 'semantic';
      }
      if(color_wt < fg_wt && color_wt < hf_wt){
        this.lowest = 'color shape and texture';
      }
      else if(fg_wt < color_wt && fg_wt < hf_wt ){
        this.lowest = 'foreground';
      }
      else{
        this.lowest = 'semantic';
      }
      //Check for conditions when all are equal display everything as equal contribution
      for (var i = 0; i < this.jsonImageObj.length; i++) {
        this.imgNameList.push(this.jsonImageObj[i].name);
      }      
      this.resultsCount = this.imgNameList.length;
    })
  }
  ngOnInit() {
    this.uploadForm = this.formBuilder.group({
      file: [''],
      files: Array<any>()
    });
  }
  fileChange(event) {
    this.uploadedImages = []
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadForm.get('file').setValue(file);
      this.uploadedImages.push(file.name);
      //Display query image
      var reader = new FileReader();
      reader.readAsDataURL(file); 
      reader.onload = (_event) => { 
        this.localUrl = reader.result; 
      }
     }
  }
  upload(){
    const formRepoImage = new FormData();
    formRepoImage.append('file', this.uploadForm.get('file').value);
    this.uploadservice.uploadImage(formRepoImage).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );   
  }
  persistId(item){
    const queryImage = new FormData();  
    queryImage.append('file', this.uploadForm.get('file').value);
    console.log(this.queryId);
    var qId = this.queryId;
    this.uploadservice.persistQueryObj(item,qId).subscribe(res =>{
    var matchedImages = res;      
    })
  }
  //Upload multiple images into mongo repository
  fileChangeMultiple(event) {
    var index  = 0;
    this.uploadedImages = []
    var images = []
    const file = [] //event.target.files[0];
    for(var i =  0; i <  event.target.files.length; i++)  {  
        this.files.push(event.target.files[i]);
        file.push(event.target.files[i])
    }
    images = event.target.files;
    this.uploadForm.get('files').setValue(file);
    //this.uploadForm.get('files').setValue(images);
    //Push the file name into input field
    if (event.target.files.length > 0) {
      while(index < event.target.files.length){
        const file = event.target.files[index];
        this.uploadedImages.push(file.name);
        index++;
      }      
     }
  }
  uploadMultiple(){
    const formDataMultiple = new FormData();
    //formDataMultiple.append('files[]', this.uploadForm.get('file').value);
    formDataMultiple.append('files[]', this.uploadForm.get('files').value);
    this.uploadservice.uploadMultiple(formDataMultiple).subscribe(res =>{
      var resp = res;      
    })
    //Set the values of files into formData, currently data is set as String
    //Not object, check and set properly
  }
  explainImage(){
    this.uploadservice.explainImage().subscribe(res =>{
      this.jsonExplainObj = res;  
    })
    console.log(this.jsonExplainObj);
  }
  /*displayChart(item) {
    this.description= `The selected image matches 90 percentage with color, 5 percent with High level semantic deature and 5 percent with foreground.`
    console.log(item)
  }*/
  displayChart(item) {
    //this.description= `The selected image matches ${item.color} percentage with color, shape and texture of the query image.`
    this.description= `The selected image matches 90 percentage with color, 5 percent with High level semantic deature and 5 percent with foreground.`
    console.log(item)
    HighCharts.chart('pieChart', {
      chart: {
        plotBackgroundColor: null,
        plotBorderWidth: null,
        plotShadow: false,
        type: 'pie'
      },
      title: {
        text: 'Feature Contribution'
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %'
          }
        }
      },
      series: [{
        name: '',
        colorByPoint: true,
        type: undefined,
        data: [{
          name: 'Color',
          y: 90,//parseFloat(item.color),
          sliced: true,
          selected: true
        }, {
          name: 'Foreground',
          y: 5,//parseFloat(item.fg),
          sliced: true
        },
        {
          name: 'Semantic Feature',
          y: 5//parseFloat(item.fg)
        }
      ]
      }]
    });
  }
  
}

