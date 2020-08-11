import { Component, OnInit } from '@angular/core';
import country from 'world-map-country-shapes';
import { NovelCovid } from 'novelcovid';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  mapCountries: any = [];
  countryActive:any ;
  countryCovid:any;
  api = new NovelCovid();
  loading:boolean=false;

  constructor() {
    
  }

  ngOnInit(): void {
    country.map((countryPath) => {
      this.mapCountries.push(countryPath);
    });
  }
  selectCountry(country) {
    this.countryActive = country;
    this.loading=true;
    this.api.countries(country.id).then(response => {
      this.countryCovid=response;
      console.log(response);
      this.loading=false;
  }).catch(()=>this.loading=false);

}

}
