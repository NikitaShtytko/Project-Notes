import {Component, OnInit} from '@angular/core';
import {TopicService} from "../../service/topic/topic.service";
import {Router} from "@angular/router";
import {Topic} from "../../entity/topic";
import {Subscription} from "rxjs";
import {NoteService} from "../../service/note/note.service";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private topicService: TopicService,
              private noteService: NoteService,
              private router: Router) {
  }

  public topic: String;
  public topics: Topic[];
  public subscriptions: Subscription[] = [];

  spanVision = false;

  ngOnInit(): void {
    this.subscriptions.push(this.topicService.getTopics().subscribe(response => {
      this.topics = response;
    }))
  }

  //TODO архив
  _navigate(link: String) {
    console.log(link);
    this.router.navigate([link]);
  }

  notesByTopic(topic: string) {
    this.topic = topic;
    console.log(this.topic);
    this.router.navigate(['note']);
    this.router.navigate(['noteByTopic', topic]);
  }
}
