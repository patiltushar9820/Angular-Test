import { Component, OnInit } from '@angular/core';
import { AlertType } from './core/models/alert-type.model';
import { WeatherServices } from './core/weather.services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  alertTypes: AlertType[];
  title = 'interview-app';

  constructor(
    private weatherServices: WeatherServices) {
  }

  public ngOnInit() {
    this.weatherServices.getAlertTypes().subscribe(res => {
      this.alertTypes = res;
    });
  }
}
