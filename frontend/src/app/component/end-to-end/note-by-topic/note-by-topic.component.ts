import {ChangeDetectionStrategy, Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges} from '@angular/core';
import {Note} from "../../../entity/note";
import {NoteService} from "../../../service/note/note.service";
import {Subscription} from "rxjs";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-note-by-topic',
  templateUrl: './note-by-topic.component.html',
  styleUrls: ['./note-by-topic.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteByTopicComponent implements OnInit{

  // @Input() topic: String;
  public topic: String;
  public note: Note[];
  public subscriptions: Subscription[] = [];

  constructor(private noteService: NoteService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              ){
    this.topic = activateRoute.snapshot.params.topic
  }

  ngOnInit(): void {
    console.log(this.topic);
    this.subscriptions.push(this.noteService.getNotesByTopic(this.topic).subscribe(response => {
      this.note = response;
      console.log("message")
    }));
  }

  equip(header: string, topic: string): string{
    if (header != null){
      return header;
    }
    else {
      header = topic;
      return header;
    }
  }
}
