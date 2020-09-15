import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Archive} from "../../entity/archive";

@Injectable({
  providedIn: 'root'
})
export class ArchiveService {

  constructor(private httpClient: HttpClient) {
  }

  toArchive(id: number): Observable<Archive> {
    return this.httpClient.get<Archive>('/api/archive/transfer/' + id);
  }

  fromArchive(id: number): Observable<Archive> {
    return this.httpClient.get<Archive>('/api/archive/back/' + id);
  }

  getArchives(): Observable<Archive[]>{
    return this.httpClient.get<Archive[]>('/api/archive');
  }

  getArchiveById(id: number): Observable<Archive> {
    return this.httpClient.get<Archive>('/api/archive/' + id);
  }

  saveArchive(archive: Archive): Observable<Archive> {
    return this.httpClient.post<Archive>('/api/archive', archive);
  }

  updateArchive(archive: Archive): Observable<Archive> {
    return this.httpClient.put<Archive>('/api/archive/', archive);
  }

  deleteArchive(id: number): Observable<Archive> {
    return this.httpClient.delete<Archive>('/api/archive/' + id);
  }
}
