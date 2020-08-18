import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgxMasonryModule } from 'ngx-masonry';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import {FormsModule} from "@angular/forms";
import { TopicComponent } from './component/end-to-end/topic/topic.component';
import {RouterModule, Routes} from "@angular/router";
import { NotesComponent } from './component/end-to-end/notes/notes.component';
import {HttpClientModule} from "@angular/common/http";
import {LeftMenuComponent} from "./component/left-menu/left-menu.component";

const appRoutes: Routes = [
  {path: 'topic', component: TopicComponent},
  {path: 'note', component: NotesComponent}
  ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    TopicComponent,
    NotesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMasonryModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
