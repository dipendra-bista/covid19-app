import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CovidNepalComponent } from './covid-nepal.component';

describe('CovidNepalComponent', () => {
  let component: CovidNepalComponent;
  let fixture: ComponentFixture<CovidNepalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CovidNepalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CovidNepalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
