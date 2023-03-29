import { Component } from '@angular/core';
import { ModalsServiceService } from 'src/app/service/modals-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.less']
})
export class AddUserComponent {

  constructor(public modalService: ModalsServiceService) { }

  public users: any[] = [
    {
      email: 'mattia.schettini@we-plus.eu',
      code: '552255'
    }
  ]

  viewCode(code: string){
    this.modalService.viewCode(code).subscribe();
  }

  addUser(){
    this.modalService.addUser().subscribe(x=> {
      if(x!= false){
        this.users.push(x)
      }
    })
  }

}
