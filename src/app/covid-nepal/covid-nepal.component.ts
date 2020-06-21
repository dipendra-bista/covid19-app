import { Component, OnInit } from '@angular/core';
import { Covid19ServiceService } from '../covid19-service.service';
import { CovidCase } from '../covid-case';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-covid-nepal',
  templateUrl: './covid-nepal.component.html',
  styleUrls: ['./covid-nepal.component.css'],
})
export class CovidNepalComponent implements OnInit {
  nepaldata: CovidCase[] = [];
  constructor(
    private covidService: Covid19ServiceService,
    private spinnerService: NgxSpinnerService
  ) {}

  ngOnInit(): void {
    /** spinner starts on init */
    this.spinnerService.show(undefined, {
      // type: 'square-spin',
      size: 'medium',
      bdColor: 'rgba(100,149,237, .8)',
      color: 'white',
      type: 'square-jelly-box',
      fullScreen: true,
    });
    setTimeout(() => {
      this.spinnerService.hide();
    }, 5000);

    this.covidService.getNepalData().subscribe((data) => {
      this.nepaldata = { ...data };
    });
  }
}
