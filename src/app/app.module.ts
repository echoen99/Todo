<<<<<<< HEAD
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
=======
import { TodoDataService } from './todo-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';



import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
>>>>>>> initial commit


@NgModule({
  declarations: [
<<<<<<< HEAD
    AppComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
=======
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent
  ],
  imports: [
    BrowserModule
    , FormsModule
    , ReactiveFormsModule
  ],
  providers: [TodoDataService],
>>>>>>> initial commit
  bootstrap: [AppComponent]
})
export class AppModule { }