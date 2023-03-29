import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-add-users',
  templateUrl: './add-users.component.html',
  styleUrls: ['./add-users.component.less']
})
export class AddUsersComponent implements OnInit {

  constructor(public modalService: NgbActiveModal){
    
  }


  utente: any =     {
    email: '',
    code: null
  }

  ngOnInit(): void {
    this.utente.code = this.generateCode() 
  }

  generateCode(): string{
    return Math.floor(Math.random() * 1000000).toString().padStart(6, "0")
  }

  sendUser(){
    this.modalService.close(this.utente)
  }
}
