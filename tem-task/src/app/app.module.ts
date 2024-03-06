import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Task1Component } from './task-1/task-1.component';
import { Task2Component } from './task-2/task-2.component';
import { Task3Component } from './task-3/task-3.component';
import { HomeComponent } from './home/home.component';
import { FormsModule } from '@angular/forms';
import { FibonacciService } from './service/fibonacci.service';
import { DataService } from './service/data.service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    Task1Component,
    Task2Component,
    Task3Component,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule, AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule
  ],
  providers: [FibonacciService,DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
