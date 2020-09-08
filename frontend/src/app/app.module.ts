import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgxMasonryModule} from 'ngx-masonry';
import {MDBBootstrapModule} from 'angular-bootstrap-md';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './component/header/header.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {TopicComponent} from './component/end-to-end/topic/topic.component';
import {RouterModule, Routes} from "@angular/router";
import {NotesComponent} from './component/end-to-end/notes/notes.component';
import {HttpClientModule} from "@angular/common/http";
import {LeftMenuComponent} from "./component/left-menu/left-menu.component";
import {NoteByTopicComponent} from './component/end-to-end/note-by-topic/note-by-topic.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {TestComponent} from './component/test/test.component';

const appRoutes: Routes = [
  {path: 'topic', component: TopicComponent},
  {path: 'note', component: NotesComponent},
  {path: '', component: NotesComponent},
  {path: 'noteByTopic/:topic', component: NoteByTopicComponent},
  {path: 'test', component: TestComponent},
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LeftMenuComponent,
    TopicComponent,
    NotesComponent,
    NoteByTopicComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NgxMasonryModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    MDBBootstrapModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}
