import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ConfirmDialogComponent } from '../component/modals/confirm-dialog/confirm-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class ModalsServiceService {

  constructor(public modalService: NgbModal) { }

  confimDialog() {
    let modal  = this.modalService.open(ConfirmDialogComponent, { centered: true });
    return modal.closed
  }

  dialogSuccess(messaggio: string) {
    let modal  = this.modalService.open(ConfirmDialogComponent, { centered: true });
    modal.componentInstance.messaggio = messaggio;
    return modal.closed
  }
}
