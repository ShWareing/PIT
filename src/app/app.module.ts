import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './home-page/home-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatToolbarModule} from '@angular/material/toolbar';
import { HeaderComponent } from './header/header.component';
import {MatButtonModule} from '@angular/material/button';
import { DailyPainComponent } from './daily-pain/daily-pain.component';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatInputModule} from '@angular/material/input';
import { WeatherComponent } from './weather/weather.component';
import { FormsModule } from '@angular/forms';
import { LogComponent } from './log/log.component';
import { WeeklyRecapComponent } from './weekly-recap/weekly-recap.component';
import { MonthlyRecapComponent } from './monthly-recap/monthly-recap.component';
import { MedicationsComponent } from './medications/medications.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    HeaderComponent,
    DailyPainComponent,
    WeatherComponent,
    LogComponent,
    WeeklyRecapComponent,
    MonthlyRecapComponent,
    MedicationsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatCheckboxModule,
    MatInputModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
