import { Component, OnInit } from '@angular/core';
import { CityService } from './../Services/city.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-gst-edit',
  templateUrl: './gst-edit.component.html',
  styleUrls: ['./gst-edit.component.css']
})
export class GstEditComponent implements OnInit {
cityDetails: any;
  constructor(public cityService: CityService, private route: ActivatedRoute,) {}

  ngOnInit() {
    this.getDetails();
  }

  getDetails(){
    let city;
    this.route.queryParamMap.subscribe(queryParams => {
     city = queryParams.get('city') ? queryParams.get('city') : '';
    });
    this.cityService.getDetails(city).subscribe(respdata => {
        this.cityDetails = respdata;
        console.log(this.cityDetails);
    });
  }
}
