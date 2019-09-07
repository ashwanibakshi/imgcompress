import { Component } from '@angular/core';
import { NgxImageCompressService } from 'ngx-image-compress';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'imgscompres';
  constructor(private imageCompress: NgxImageCompressService) {}
  imgResultBeforeCompress:string;
  imgResultAfterCompress:string;
  imgbefore:any;
  imageafter:any;
  compressFile() {
  
    this.imageCompress.uploadFile().then(({image, orientation}) => {
    
      this.imgResultBeforeCompress = image;
      
      this.imgbefore=this.imageCompress.byteCount(image)
      
      this.imageCompress.compressFile(image, orientation, 50, 50).then(
        result => {
          this.imgResultAfterCompress = result;

          this.imageafter=this.imageCompress.byteCount(result);
        }
      );
      
    });
  }
}
