import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {TopicService} from "../../../service/topic/topic.service";
import {Subscription} from "rxjs";
import {Topic} from "../../../entity/topic";

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {

  constructor(private topicService: TopicService,
              private router: Router) {
  }

  public topics: Topic[];
  public subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.topicService.getTopics().subscribe(response => {
      this.topics = response;
    }))
  }

  route() {
    this.router.navigateByUrl('note');
  }

}
