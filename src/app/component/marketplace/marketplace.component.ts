import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import prodotti from '../models/market.model';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.less']
})
export class MarketplaceComponent implements OnInit {

  prodottiArray: Array<prodotti> = []
  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.http.get('../../../assets/json/market.json').subscribe((x: any)=>{
      debugger
      this.prodottiArray = x.prodotti
    })
  }

}
