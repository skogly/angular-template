import { Component, OnInit } from '@angular/core';
import { Weather, WeatherService } from '../services/weather.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  weather: { [key: string]: Weather[] } = {};
  days = ['today', 'tomorrow', 'dayAfterTomorrow'];

  constructor(private weatherService: WeatherService) {}

  ngOnInit(): void {
    this.weatherService.weather.subscribe((weatherData) => {
      this.weather = weatherData;
    });
  }

  dayFormat(day: string): string {
    return day.replace(/([A-Z])/g, ' $1').toLowerCase();
  }
}
