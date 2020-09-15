import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Note} from "../../entity/note";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {
  }

  // getNotes(): Observable<Note[]>{
  //   return this.httpClient.get<Note[]>('/api/note');
  // }

  getNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>('/api/note');
  }

  getNotesByTopic(topic: String): Observable<Note[]> {
    return this.httpClient.get<Note[]>('/api/note/topic/' + topic);
  }

  getNoteById(id: number): Observable<Note> {
    return this.httpClient.get<Note>('/api/note/' + id);
  }

  saveNote(note: Note): Observable<Note> {
    return this.httpClient.post<Note>('/api/note', note);
  }

  updateNote(note: Note): Observable<Note> {
    return this.httpClient.put<Note>('/api/note/', note);
  }

  deleteNote(id: number): Observable<Note> {
    return this.httpClient.delete<Note>('/api/note/' + id);
  }

}
