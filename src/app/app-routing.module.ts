import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomePageComponent } from './home-page/home-page.component';
import { DailyPainComponent } from './daily-pain/daily-pain.component';
import { WeatherComponent } from './weather/weather.component';
import { LogComponent } from './log/log.component';
import { MedicationsComponent } from './medications/medications.component';
import { WeeklyRecapComponent } from './weekly-recap/weekly-recap.component';
import { MonthlyRecapComponent } from './monthly-recap/monthly-recap.component';


const routes: Routes = [
  {path: "", component: HomePageComponent},
  {path: "daily-pain", component: DailyPainComponent},
  {path: "weather", component: WeatherComponent},
  {path: "log", component: LogComponent},
  {path: "medications", component: MedicationsComponent},
  {path: "weekly-recap", component: WeeklyRecapComponent},
  {path: "monthly-recap", component: MonthlyRecapComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
