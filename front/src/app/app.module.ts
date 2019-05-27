import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadComponent } from './head/head.component';
import { MainComponent } from './main/main.component';
import { ContactComponent } from './contact/contact.component';
import { BottomComponent } from './bottom/bottom.component';
import { PageComponent } from './page/page.component';
import { ErrComponent } from './err/err.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadComponent,
    MainComponent,
    ContactComponent,
    BottomComponent,
    PageComponent,
    ErrComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
