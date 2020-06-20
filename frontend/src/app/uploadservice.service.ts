import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UploadserviceService {
  constructor(private http: HttpClient) {
    
  }
  uploadImage(formData){
    return this.http.post<any>('http://localhost:3000/fileupload', formData)
  }
  getImages(){
    return this.http.get('lists',{});
  }
  runscript(formData){
    return this.http.post<any>('http://localhost:3000/runscript',formData,{observe:"response", responseType: 'json'});

  }
  persistQueryObj(repoImg,qid){
    var queryRepoList = []
    queryRepoList.push(qid)
    queryRepoList.push(repoImg)
    return this.http.post<any>('http://localhost:3000/persistQueryObj', queryRepoList)
  }
  uploadMultiple(formData){
    return this.http.post<any>('http://localhost:3000/uploadmultiple',formData);
  }
  explainImage(){
    return this.http.get<any>('http://localhost:3000/explain',{responseType: 'json'});
  }
}
