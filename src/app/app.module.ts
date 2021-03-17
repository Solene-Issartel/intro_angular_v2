import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FestivalListComponent } from './components/festival/festival-list/festival-list.component';
import { FestivalDetailsComponent } from './components/festival/festival-details/festival-details.component';
import { MessageComponent } from './components/shared/message/message.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    FestivalListComponent,
    FestivalDetailsComponent,
    MessageComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [MessageComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
