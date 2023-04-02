import { Component } from '@angular/core';
import prodotti from '../models/market.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-i-miei-prodotti',
  templateUrl: './i-miei-prodotti.component.html',
  styleUrls: ['./i-miei-prodotti.component.less']
})
export class IMieiProdottiComponent {

  prodottiArray: Array<prodotti> = []
  constructor(public http: HttpClient){}

  ngOnInit(): void {
    this.http.get('../../../assets/json/ProdottiAcquistati.json').subscribe((x: any)=>{
      this.prodottiArray = x.prodotti
    })
  }
  

}
