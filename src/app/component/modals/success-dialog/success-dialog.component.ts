import { Component, Input } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-success-dialog',
  templateUrl: './success-dialog.component.html',
  styleUrls: ['./success-dialog.component.less']
})
export class SuccessDialogComponent {

  constructor(public modalService: NgbActiveModal) { }
  @Input() messaggio: string = "";
}
