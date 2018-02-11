import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 1.3139961;
  lng: number = 103.7041613;
  constructor() { }

  ngOnInit() {
  }

}
