import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-acquisto-modal',
  templateUrl: './acquisto-modal.component.html',
  styleUrls: ['./acquisto-modal.component.less']
})
export class AcquistoModalComponent implements OnInit{

  constructor(public modalService: NgbActiveModal){}


  @Input() prodottiAcquistati: any

  ngOnInit(): void {
  }


  acquista(){
    this.modalService.close(true)
  }
}
