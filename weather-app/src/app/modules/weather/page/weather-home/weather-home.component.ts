import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit {

  initialCityName = "São Paulo"
  weatherDatas!: any;

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: string): void {
    this.weatherService.getWeatherDatas(cityName)
      .subscribe({
        next: (response) => {
          response && (this.getWeatherDatas = response)
          console.log(this.getWeatherDatas);
        },
        error: (error) => {
          console.log(error)
        }
      });
  }

}
