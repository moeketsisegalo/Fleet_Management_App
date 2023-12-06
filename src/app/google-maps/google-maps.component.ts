// src/app/google-maps/google-maps.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent {
  searchAddress: string = '';
  searchPlace: string = '';
  mapResults: any[] = [];

  async search() {
    const url = 'https://google-api31.p.rapidapi.com/map';
    const requestData = {
      text: this.searchAddress,
      place: this.searchPlace,
      street: '',
      city: '',
      country: '',
      state: '',
      postalcode: '',
      latitude: '',
      longitude: '',
      radius: ''
    };

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-RapidAPI-Key': '035b854d26mshce7d8592f07d0c1p10e77fjsn78af0be4bbbe',
        'X-RapidAPI-Host': 'google-api31.p.rapidapi.com'
      },
      body: JSON.stringify(requestData)
    };

    console.log('Request Data:', requestData);

    try {
      const response = await fetch(url, options);
      const result = await response.json();
      console.log('API Response:', result);

      // Assuming the response structure includes a 'result' property as an array
      this.mapResults = result.result || [];
    } catch (error) {
      console.error('Error:', error);
    }
  }
}
