import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ContactFormComponent } from './contact-form/contact-form.component';
import { TaskListComponent } from './task-list/task-list.component';
import { TaskNewComponent } from './task-new/task-new.component';
import { FormatCurrencyPipe } from './format-currency.pipe';
import { FormatDatePipe } from './format-date.pipe';
import { MyTaskDirective } from './my-task.directive';
import { TaskService } from './task.service';



@NgModule({
  declarations: [
    AppComponent,
    ContactFormComponent,
    TaskListComponent,
    FormatCurrencyPipe,
    FormatDatePipe,
    MyTaskDirective,
    TaskNewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [ TaskService ],
  bootstrap: [AppComponent]
})
export class AppModule { }
