import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { ModalsServiceService } from 'src/app/service/modals-service.service';
import { enviroment } from 'src/assets/enviroment';
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

  public safeVideoList: any[] = [];
  constructor(public sanitizer: DomSanitizer, public modalService: ModalsServiceService, public http:HttpClient ) { }
  ngOnInit(){
    this.safeVideoList = []
    this.http.get(enviroment.env + "Video/GetAllFileInfo").subscribe((x: any)=>{
      x.forEach((video:any) => {
        let url = 'data:video/mp4;base64,'+video.base64

        this.safeVideoList.push({
          "name": video.name,
          "base64": url
        });
      });
    }, (error)=>{
      this.videoList.forEach(video => {
        this.safeVideoList.push(this.sanitizer.bypassSecurityTrustResourceUrl(video.urlVideo));
      });
    })

  }

  removeVideo(index: number){
    this.modalService.confimDialog().subscribe(x=> {

      if(x){
        this.http.delete(enviroment.env + 'Video/Delete?name='+index).subscribe(x=>{
          if(x){
            this.ngOnInit()
            this.modalService.dialogSuccess("Video eliminmato con successo")
          }
        })
        this.safeVideoList.splice(index, 1);
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

        this.http.post(enviroment.env + "Video/CreateByBase64", x).subscribe(t=>{
          if(t){
            this.safeVideoList.push(x)
          }
        })
      }
    })

  }

}
