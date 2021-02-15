import { NgModule } from '@angular/core';
import { NbAccordionModule, NbCardComponent } from '@nebular/theme';
import { HomeComponent } from './home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [HomeComponent],
  imports: [NbAccordionModule, NbCardComponent, BrowserAnimationsModule],
})
export class HomeModule {}
