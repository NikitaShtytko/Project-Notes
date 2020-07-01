import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Topic} from "../../entity/topic";

@Injectable({
  providedIn: 'root'
})
export class TopicService {

  constructor(private httpClient: HttpClient) {
  }

  getTopics(): Observable<Topic[]>{
    return this.httpClient.get<Topic[]>('/api/topic');
  }

  getTopicById(id: number): Observable<Topic> {
    return this.httpClient.get<Topic>('/api/topic/' + id);
  }

  saveTopic(topic: Topic): Observable<Topic> {
    return this.httpClient.post<Topic>('/api/topic', topic);
  }

  updateTopic(topic: Topic): Observable<Topic> {
    return this.httpClient.put<Topic>('/api/topic/', topic);
  }

  deleteTopic(id: number): Observable<Topic> {
    return this.httpClient.delete<Topic>('/api/topic/' + id);
  }
}
