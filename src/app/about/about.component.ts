import { Component, OnInit } from '@angular/core';
import { TypewriterService } from '../typewriter.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private typewriterService: TypewriterService) { }

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

      if (timer < 500) {
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

    let typer = document.getElementById('running-program');

    let typewriter = this.typewriterService.setupTypewriter(typer);

    typewriter.type();
  }

}
