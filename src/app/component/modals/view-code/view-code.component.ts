import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-view-code',
  templateUrl: './view-code.component.html',
  styleUrls: ['./view-code.component.less']
})
export class ViewCodeComponent {

  constructor(public modalService: NgbActiveModal) { }
  @Input() messaggio: string = "";

}
