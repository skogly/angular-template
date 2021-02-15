import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent, AuthDialogComponent } from './app.component';
import {
  NbLayoutModule,
  NbSidebarModule,
  NbCardModule,
  NbMenuModule,
  NbButtonModule,
  NbThemeModule,
  NbIconModule,
  NbDialogModule,
  NbAccordionModule,
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [AppComponent, HomeComponent, AuthDialogComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NbThemeModule.forRoot({ name: 'cosmic' }),
    NbLayoutModule,
    NbSidebarModule.forRoot(),
    NbCardModule,
    NbDialogModule.forRoot(),
    NbMenuModule.forRoot(),
    NbButtonModule,
    NbEvaIconsModule,
    RouterModule,
    NbIconModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NbAccordionModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [AuthDialogComponent],
})
export class AppModule {}
