import { getTestBed, inject, TestBed } from '@angular/core/testing';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { WeatherService } from './weather.service';
import { WEATHER } from '../test/weather';
// import { Weather } from './weather.service';
//import { Weather } from '../../assets/weather';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [WeatherService],
    });

    service = TestBed.get(WeatherService);
    httpMock = TestBed.get(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should retrieve weather', () => {
    const dummyWeather = WEATHER;

    setInterval(
      () =>
        service.weather.subscribe((result) => {
          expect(result).toEqual(WEATHER);
        }),
      1000
    );

    const request = httpMock.expectOne(`${service.weatherUrl}`);

    expect(request.request.method).toBe('GET');

    request.flush(dummyWeather);
  });
});
