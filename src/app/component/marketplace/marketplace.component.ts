import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import prodottiAcquistati from '../models/market.model';
import { ModalsServiceService } from 'src/app/service/modals-service.service';

@Component({
  selector: 'app-marketplace',
  templateUrl: './marketplace.component.html',
  styleUrls: ['./marketplace.component.less']
})
export class MarketplaceComponent implements OnInit {

  prodottiArray: Array<prodottiAcquistati> = []
  constructor(public http: HttpClient, public modalService: ModalsServiceService){}

  async ngOnInit(): Promise<void> {
    this.prodottiArray = await this.getProducts()
  }

  getProducts():Promise<Array<prodottiAcquistati>>{
    return new Promise <Array<prodottiAcquistati>>((resolve, reject) =>{
      this.http.get('../../../assets/json/market.json').subscribe(async (x: any)=>{
        var acquistati = await this.getBought()
        var prodotti = x.prodotti
        for(var prodotto of prodotti){
          if(acquistati.findIndex(x=> x.id == prodotto.id) != -1){
            prodotto.acquistato = true
          }
        }
        resolve(prodotti)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  getBought():Promise<Array<prodottiAcquistati>>{
    return new Promise <Array<prodottiAcquistati>>((resolve, reject) =>{
      this.http.get('./../../assets/json/ProdottiAcquistati.json').subscribe((x: any)=>{
        resolve(x.prodotti)
      },
      (error)=>{
        reject(error)
      })
    })
  }

  openBuyForm(acquisto: prodottiAcquistati){
    this.modalService.acquistaProdotto(acquisto).subscribe(x=>{
      if(x){
        let prodotto =this.prodottiArray.find(a=> a.id == acquisto.id)
        if(prodotto != undefined){
          prodotto.acquistato = true
        }
      }
    })
  }

}
