import { Component } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-videos',
  templateUrl: './add-videos.component.html',
  styleUrls: ['./add-videos.component.less']
})
export class AddVideosComponent {

  constructor(public modalService: NgbActiveModal, public sanitizer: DomSanitizer,) { }

  videoSanitized: SafeResourceUrl| undefined = undefined;
  url: any;
  format: any;
  name: any;
  loadVideo(event: any){
    const file = event.target.files && event.target.files[0];
    if (file) {
      var reader = new FileReader();
      reader.readAsDataURL(file);
      if(file.type.indexOf('image')> -1){
        this.format = 'image';
      } else if(file.type.indexOf('video')> -1){
        this.format = 'video';
      }
      reader.onload = (event) => {
        this.url = (<FileReader>event.target).result;
      }
      this.name = file.name
    }
  }

  sendVideoToBE(){
    var obj = {
      name:this.name,
      "base64": this.url
    }
    this.modalService.close(obj);
  }

}
