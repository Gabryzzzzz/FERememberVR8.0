import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { AddUsersComponent } from '../component/modals/add-users/add-users.component';
import { AddVideosComponent } from '../component/modals/add-videos/add-videos.component';
import { ConfirmDialogComponent } from '../component/modals/confirm-dialog/confirm-dialog.component';
import { SuccessDialogComponent } from '../component/modals/success-dialog/success-dialog.component';
import { ViewCodeComponent } from '../component/modals/view-code/view-code.component';
import { AcquistoModalComponent } from '../component/modals/acquisto-modal/acquisto-modal.component';

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
    let modal  = this.modalService.open(SuccessDialogComponent, { centered: true });
    modal.componentInstance.messaggio = messaggio;
    return modal.closed
  }

  viewCode(messaggio: string) {
    let modal  = this.modalService.open(ViewCodeComponent, { centered: true });
    modal.componentInstance.messaggio = messaggio;
    return modal.closed
  }

  addUser() {
    let modal  = this.modalService.open(AddUsersComponent, { centered: true, size: 'lg'});
    return modal.closed
  }

  addVideo() {
    let modal  = this.modalService.open(AddVideosComponent, { centered: true, size: 'lg'});
    return modal.closed
  }

  acquistaProdotto(acquisto: any){
    let modal = this.modalService.open(AcquistoModalComponent, {centered: true, size: 'lg'});
    modal.componentInstance.prodottiAcquistati = acquisto;

    return modal.closed
  }
}
