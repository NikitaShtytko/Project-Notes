import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { LeftMenuComponent } from './component/left-menu/left-menu.component';
import {FormsModule} from "@angular/forms";
import { TopicComponent } from './component/end-to-end/topic/topic.component';
import {Routes} from "@angular/router";
import { NotesComponent } from './component/end-to-end/notes/notes.component';

const appRoutes: Routes = [
  {path: 'topic', component: NotesComponent},
  {path: 'note', component: TopicComponent}
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
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
