import { Component, OnInit } from '@angular/core';
import { Covid19ServiceService } from '../covid19-service.service';
import { CovidCase } from '../covid-case';

@Component({
  selector: 'app-covid-world',
  templateUrl: './covid-world.component.html',
  styleUrls: ['./covid-world.component.css'],
})
export class CovidWorldComponent implements OnInit {
  worldData: CovidCase[] = [];
  constructor(private covidService: Covid19ServiceService) {}

  ngOnInit(): void {
    this.covidService.getWorldData().subscribe((data) => {
      this.worldData = { ...data };
    });
  }
}
