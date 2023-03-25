import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalsServiceService } from 'src/app/service/modals-service.service';

@Component({
  selector: 'app-add-video',
  templateUrl: './add-video.component.html',
  styleUrls: ['./add-video.component.less']
})
export class AddVideoComponent implements OnInit {

  public videoList: any[] = [
    {
      nomeVideo: "Video 1",
      urlVideo: ".././../../assets/videos/X2Download.app-Galaxy S23 Series_ Unveiling _ Samsung-(480p).mp4",
    },
    {
      nomeVideo: "Video 1",
      urlVideo: ".././../../assets/videos/X2Download.app-Galaxy S23 Ultra Official Film_ Epic Performance _ Samsung(720p).mp4",
    },
    {
      nomeVideo: "Video 1",
      urlVideo: ".././../../assets/videos/X2Download.app-Galaxy S23 Ultra_ Official Introduction Film _ Samsung(360p).mp4",
    }
  ]

  public safeVideoList: SafeResourceUrl[] = [];
  constructor(public sanitizer: DomSanitizer, public modalService: ModalsServiceService) { }
  ngOnInit(){
    this.videoList.forEach(video => {
      this.safeVideoList.push(this.sanitizer.bypassSecurityTrustResourceUrl(video.urlVideo));
    });
  }

  removeVideo(index: number){
    this.modalService.confimDialog().subscribe(x=> {
      if(x){
        this.safeVideoList.splice(index, 1);
        this.modalService.dialogSuccess("Video eliminmato con successo")
      }
    })


  }
  dataURLtoFile(dataurl: any, filename: any) {

    var arr = dataurl.split(','),
        mime = arr[0].match(/:(.*?);/)[1],
        bstr = atob(arr[1]),
        n = bstr.length,
        u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, {type:mime});
}

  addVideo(){
    this.modalService.addVideo().subscribe(x=> {
      if(x != undefined){
        debugger
        this.safeVideoList.push(this.sanitizer.bypassSecurityTrustResourceUrl(x))
      }
    })

  }

}
