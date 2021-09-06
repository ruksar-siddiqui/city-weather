import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-gst-get',
  templateUrl: './gst-get.component.html',
  styleUrls: ['./gst-get.component.css']
})
export class GstGetComponent implements OnInit {
  cities = [
    { city_name: 'London', Temperature: 25, sunrise_time: '6:20 am', sunset_time: '6:30 pm'},
    { city_name: 'Glasgow', Temperature: 26, sunrise_time: '6:20 am', sunset_time: '6:30 pm'},
    { city_name: 'Birmingham', Temperature: 24, sunrise_time: '6:20 am', sunset_time: '6:30 pm'},
    { city_name: 'Bristol', Temperature: 27, sunrise_time: '6:20 am', sunset_time: '6:30 pm'},
    { city_name: 'Manchester', Temperature: 23, sunrise_time: '6:20 am', sunset_time: '6:30 pm'}
  ];
  constructor(public router: Router,) { }

  ngOnInit() {

  }

  moveToDetails(city){
    this.router.navigate(['/city-details'], {
      queryParams: {
        city: city.city_name
      }
    });
  }

}
