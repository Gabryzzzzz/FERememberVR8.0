import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less'],
})
export class SidebarComponent implements OnInit {
  mobile_mode: boolean = false;
  @HostListener('window:resize', ['$event'])
  onResize() {
    if (window.innerWidth < 450) {
      this.mobile_mode = true;
    } else {
      this.mobile_mode = false;
    }
  }

  home_url = "/home"
  shopUrl = '/market'
  prodottiAcquistati = "/mieiProdotti"

  constructor(public router: Router) {}

  ngOnInit(): void {}
}
