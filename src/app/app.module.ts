import { AppRoutingModule } from './app-routing.module';
import { TodoDataService } from './todo-data.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpModule } from '@angular/http';



import { AppComponent } from './app.component';
import { TodoListHeaderComponent } from './todo-list-header/todo-list-header.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoListItemComponent } from './todo-list-item/todo-list-item.component';
import { TodoListFooterComponent } from './todo-list-footer/todo-list-footer.component';
import { ApiService } from './api.service';
import { TodosComponent } from './todos/todos.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { TodoItemSnoozeComponent } from './todo-list-item/todo-item-snooze/todo-item-snooze.component';
import { SnoozeTimerComponent } from './todo-list-item/todo-item-snooze/snooze-timer/snooze-timer.component';
import { ItemEditorComponent } from './item-editor/item-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoListHeaderComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoListFooterComponent,
    TodosComponent,
    PageNotFoundComponent,
    TodoItemSnoozeComponent,
    SnoozeTimerComponent,
    ItemEditorComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [TodoDataService, ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
