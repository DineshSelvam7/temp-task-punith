import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { Task1Component } from './task-1/task-1.component';
import { Task2Component } from './task-2/task-2.component';
import { Task3Component } from './task-3/task-3.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'task1',component:Task1Component},
  {path:'task2',component:Task2Component},
  {path:'task3',component:Task3Component},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
