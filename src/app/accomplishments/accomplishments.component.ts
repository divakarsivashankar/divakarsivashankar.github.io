import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accomplishments',
  templateUrl: './accomplishments.component.html',
  styleUrls: ['./accomplishments.component.css']
})
export class AccomplishmentsComponent implements OnInit {

  constructor() { }

  animateOnHover(e) {
    let ele = e.target;
    ele.classList.add('elastic');
    ele.addEventListener('animationend', () => {
      ele.classList.remove('elastic');
    });
  }

  ngOnInit() {
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
