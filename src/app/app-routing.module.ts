import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { CovidNepalComponent } from './covid-nepal/covid-nepal.component';
import { CovidWorldComponent } from './covid-world/covid-world.component';

const routes: Routes = [
  { path: '', redirectTo: '/nepal', pathMatch: 'full' },
  { path: 'nepal', component: CovidNepalComponent },
  { path: 'world', component: CovidWorldComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
})
export class AppRoutingModule {}
