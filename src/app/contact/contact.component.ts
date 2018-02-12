import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  lat: number = 1.353775;
  lng: number = 103.9582;

styles = [
      {
          "featureType": "all",
          "elementType": "labels.text.fill",
          "stylers": [
              {
                  "color": "#ffffff"
              }
          ]
      },
      {
          "featureType": "all",
          "elementType": "labels.text.stroke",
          "stylers": [
              {
                  "visibility": "off"
              }
          ]
      },
      {
          "featureType": "administrative",
          "elementType": "geometry",
          "stylers": [
              {
                  "visibility": "on"
              },
              {
                  "color": "#012621"
              },
              {
                  "weight": 0.8
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels",
          "stylers": [
              {
                  "color": "#012621"
              }
          ]
      },
      {
          "featureType": "administrative.country",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#0c0000"
              }
          ]
      },
      {
          "featureType": "administrative.province",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#012621"
              }
          ]
      },
      {
          "featureType": "administrative.locality",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#012621"
              }
          ]
      },
      {
          "featureType": "administrative.neighborhood",
          "elementType": "labels.text",
          "stylers": [
              {
                  "color": "#012621"
              }
          ]
      },
      {
          "featureType": "landscape",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#06c5a9"
              }
          ]
      },
      {
          "featureType": "poi",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#06c5a9"
              },
              {
                  "lightness": -7
              }
          ]
      },
      {
          "featureType": "poi.park",
          "elementType": "all",
          "stylers": [
              {
                  "color": "#06c5a9"
              }
          ]
      },
      {
          "featureType": "road",
          "elementType": "geometry.stroke",
          "stylers": [
              {
                  "color": "#ffffff"
              },
              {
                  "weight": 0.3
              },
              {
                  "lightness": 10
              }
          ]
      },
      {
          "featureType": "road.highway",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#047968"
              },
              {
                  "lightness": "-7"
              }
          ]
      },
      {
          "featureType": "road.arterial",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#06c5a9"
              },
              {
                  "visibility": "on"
              },
              {
                  "lightness": -15
              }
          ]
      },
      {
          "featureType": "road.local",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#06c5a9"
              },
              {
                  "lightness": "7"
              }
          ]
      },
      {
          "featureType": "transit",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#06c5a9"
              },
              {
                  "lightness": -34
              }
          ]
      },
      {
          "featureType": "water",
          "elementType": "geometry",
          "stylers": [
              {
                  "color": "#333739"
              }
          ]
      }
  ];

  

 
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


    let popUpEle = Array.from(document.getElementsByClassName('animated-Up'));
    popUpEle.forEach(element1 => {
      let newItem = element1;
      setTimeout(() => {
        newItem.classList.add('fadeInUp');
      }, timer);

      if (timer < 3200) {
        timer = timer + 100;
      }
    });


    // setTimeout(() => {
    //   document.getElementById('animated-Up').classList.add('fadeInUp');
    // }, 100)



    setTimeout(() => {
      let elem = Array.from(document.getElementsByClassName('blast'));
      elem.forEach(element => {
        element.classList.remove('bounce');
        element.classList.add('show');
      });
    }, 3300);
  }

}
