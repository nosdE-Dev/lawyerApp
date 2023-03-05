import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styles: [
  ]
})
export class SidebarMenuComponent implements OnInit {

  constructor() { }

  public burgerStyle: string='';
  public overlayStyle: string='';
  public navStyle: string='';
  public bodyStyle: string='';

  ngOnInit(): void {
  }

  changeCheck(){
    this.burgerStyle = this.burgerStyle == 'clicked' ? '':'clicked';
    this.overlayStyle = this.overlayStyle == 'show' ? '':'show';
    this.navStyle = this.navStyle == 'show' ? '':'show';
  }

  closeNav(){
    //this.check.nativeElement.checked = false;
    this.changeCheck()
  }

}
