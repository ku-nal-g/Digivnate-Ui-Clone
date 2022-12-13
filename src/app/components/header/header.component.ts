import { AfterViewInit, Component, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent{

  websiteLogo: string = "https://www.digivante.com/wp-content/uploads/2021/10/Digivante-Logo.svg";

  collapseDiv:boolean = false;

  toggleIcon: boolean = true;

  getCollapseBarClass(){
    return this.collapseDiv ? 'show-collapse-div' : '';
  }
  toggleCollapse(){
    this.collapseDiv = !this.collapseDiv;
    this.toggleIcon = !this.toggleIcon;
  }
}
