import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponentComponent } from './home/login-component/login-component.component';
import { StatisticsComponent } from './content/statistics/statistics.component';
import { HeaderComponent } from './home/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { CollectionComponent } from './content/collection/collection.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponentComponent,
    StatisticsComponent,
    HeaderComponent,
    CollectionComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
