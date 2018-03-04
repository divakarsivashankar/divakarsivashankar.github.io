import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
declare var $:any;
@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  constructor(private config: NgbCarouselConfig) {
    config.interval = 10000;
    config.wrap = true;
    config.keyboard = false;
  }

  animateOnHover(e) {
    let ele = e.target;
    ele.classList.add('elastic');
    ele.addEventListener('animationend', () => {
      ele.classList.remove('elastic');
    });
  }

  ngOnInit() {
    $('.slider').bxSlider({
      preloadImages: 'all',
      adaptiveHeight: true
     });
  }

  ngAfterViewInit() {
    let timer = 0;
    let elem = Array.from(document.getElementsByClassName('blast'));
    elem.forEach(element => {
      let item = element;
      setTimeout(() => {
        item.classList.add('bounce');
      }, timer);

      if (timer < 3200) {
        timer = timer + 100;
      }
    });

    setTimeout(() => {
      let elem = Array.from(document.getElementsByClassName('blast'));
      elem.forEach(element => {
        element.classList.remove('bounce');
        element.classList.add('show');
      });
    }, 3300);
     
  }

}
