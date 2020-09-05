import {Component, OnDestroy, OnInit} from '@angular/core';
import {Note} from "../../../entity/note";
import {NoteService} from "../../../service/note/note.service";
import {Subject, Subscription} from "rxjs";
import {ActivatedRoute, Router, Params} from '@angular/router';
import {takeUntil} from "rxjs/operators";

@Component({
  selector: 'app-note-by-topic',
  templateUrl: './note-by-topic.component.html',
  styleUrls: ['./note-by-topic.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class NoteByTopicComponent implements OnDestroy{

  // @Input() topic: String;
  private destroy$ = new Subject<undefined>();
  public topic: String;
  public note: Note[];
  public subscriptions: Subscription[] = [];

  constructor(private noteService: NoteService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              ){
    this.topic = activateRoute.snapshot.params.topic
    this.activateRoute.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params: Params) => {
      this.topic = params.topic;
      this.subscriptions.push(this.noteService.getNotesByTopic(this.topic).subscribe(response => {
        this.note = response;
        console.log("message")
      }));
    });
  }

  public ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

  // ngOnInit(): void {
  //   console.log(this.topic);
  //   this.subscriptions.push(this.noteService.getNotesByTopic(this.topic).subscribe(response => {
  //     this.note = response;
  //     console.log("message")
  //   }));
  // }

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
