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

  downloadCose(){
    let link = document.createElement('a');
    link.setAttribute('type', 'hidden');
    link.href = 'assets/pdf/marketing.pdf';
    link.download = "marketing.pdf";
    document.body.appendChild(link);
    link.click();
    link.remove();

    let link2 = document.createElement('a');
    link2.setAttribute('type', 'hidden');
    link2.href = 'assets/pdf/documentazione.pdf';
    link2.download = "documentazione.pdf";
    document.body.appendChild(link);
    link2.click();
    link2.remove();
  }
  
}
