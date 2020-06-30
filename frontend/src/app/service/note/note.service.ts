import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  constructor(private httpClient: HttpClient) {
  }



}

export class UserService {

  constructor(private httpClient: HttpClient) {
  }

  getNotes(): Observable<Note[]>{
    return this.httpClient.get<Note[]>('/api/note');
  }

  getUserByLogin(login: string): Observable<User> {
    return this.httpClient.get<User>('/api/users/login/' + login);
  }

  getUserByEmail(email: string): Observable<User> {
    return this.httpClient.get<User>('/api/users/email/' + email);
  }

  existUser(login: string): Observable<User> {
    return this.httpClient.get<User>('/api/users/login/exist/' + login);
  }

  existEmail(email: string): Observable<User> {
    return this.httpClient.get<User>('/api/users/email/exist/' + email);
  }

  getUserById(id: number): Observable<User> {
    return this.httpClient.get<User>('/api/users/' + id);
  }

  saveUser(user: User): Observable<User> {
    return this.httpClient.post<User>('/api/users', user);
  }

  updateUser(user: User): Observable<User> {
    return this.httpClient.put<User>('/api/users/', user);
  }

  updateInfo(formData: FormData): Observable<any> {
    return this.httpClient.put('/api/users/', formData);
  }

  deleteUser(id: number): Observable<User> {
    return this.httpClient.delete<User>('/api/users/' + id);
  }
}
