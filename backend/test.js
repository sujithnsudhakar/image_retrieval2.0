import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  name = 'Angular 4';
  base64Image: any;

  ngOnInit() {
    let imageUrl = 'https://lh3.googleusercontent.com/-lLC-FsscD40/AAAAAAAAAAI/AAAAAAAAAAA/AMp5VUoSrLythVKtt5Skm9zIUg4uyxnNCw/s48-c-mo/photo.jpg';

    this.getBase64ImageFromURL(imageUrl).subscribe(base64data => {
      console.log(base64data);
      this.base64Image = 'data:image/jpg;base64,' + base64data;
    });
  }

  getBase64ImageFromURL(url: string) {
    return Observable.create((observer: Observer<string>) => {
      let img = new Image();
      img.crossOrigin = 'Anonymous';
      img.src = url;
      if (!img.complete) {
        img.onload = () => {
          observer.next(this.getBase64Image(img));
          observer.complete();
        };
        img.onerror = (err) => {
          observer.error(err);
        };
      } else {
        observer.next(this.getBase64Image(img));
        observer.complete();
      }
    });
  }

  getBase64Image(img: HTMLImageElement) {
    var canvas = document.createElement("canvas");
    canvas.width = img.width;
    canvas.height = img.height;
    var ctx = canvas.getContext("2d");
    ctx.drawImage(img, 0, 0);
    var dataURL = canvas.toDataURL("image/png");
    return dataURL.replace(/^data:image\/(png|jpg);base64,/, "");
  }

}
