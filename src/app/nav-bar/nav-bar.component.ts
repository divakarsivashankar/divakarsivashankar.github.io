import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  toggleMenu() {
    if (document.getElementsByClassName('main-navigation')[0].classList.contains('hide')) {
      document.getElementsByClassName('main-navigation')[0].classList.remove('hide');
    } else {
      document.getElementsByClassName('main-navigation')[0].classList.add('hide');
    }
    if (document.getElementsByClassName('ham')[0].classList.contains('close')) {
      document.getElementsByClassName('ham')[0].classList.remove('close');
    } else {
      document.getElementsByClassName('ham')[0].classList.add('close');
    }
  }

  collapseAfter() {
    document.getElementsByClassName('main-navigation')[0].classList.add('hide');
      document.getElementsByClassName('ham')[0].classList.remove('close');
  }

}
