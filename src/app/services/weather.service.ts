import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Weather {
  time: string;
  symbol: string;
  temp: number;
  useInTitle?: boolean;
}

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  weatherUrl = './assets/weather/weather.json';
  weatherData: { [key: string]: Weather[] } = {};
  weather = new BehaviorSubject(this.weatherData);

  constructor(private httpClient: HttpClient) {
    this.getWeather();
    setInterval(() => this.getWeather(), 3600000);
  }

  getWeather(): void {
    this.httpClient
      .get<{ [key: string]: Weather[] }>(this.weatherUrl)
      .subscribe((data) => {
        this.weatherData = {};
        this.weather.next(this.processWeather(data));
      });
  }

  /**
   * The goal is to find the afternoon icon and display it
   * alongside the title (day) in the nb-accordion. If not,
   * we will try to find the evening icon for that day.
   * If we do not have that one either, we would rather try
   * to get the morning icon instead of showing the night time
   * weather.
   */
  processWeather(data: {
    [key: string]: Weather[];
  }): { [key: string]: Weather[] } {
    for (const key in data) {
      if (data[key].find((x: Weather) => x.time === 'afternoon')) {
        this.ts2532Workaround(
          data[key].find((x: Weather) => x.time === 'afternoon')
        ).useInTitle = true;
      } else if (data[key].find((x: Weather) => x.time === 'evening')) {
        this.ts2532Workaround(
          data[key].find((x: Weather) => x.time === 'evening')
        ).useInTitle = true;
      } else if (data[key].find((x: Weather) => x.time === 'morning')) {
        this.ts2532Workaround(
          data[key].find((x: Weather) => x.time === 'morning')
        ).useInTitle = true;
      } else if (data[key].find((x: Weather) => x.time === 'night')) {
        this.ts2532Workaround(
          data[key].find((x: Weather) => x.time === 'night')
        ).useInTitle = true;
      }
    }
    return data;
  }

  ts2532Workaround<T>(input: T | undefined | null): T {
    if (input === null || input === undefined) {
      throw new Error('Error');
    }
    return input;
  }
}
