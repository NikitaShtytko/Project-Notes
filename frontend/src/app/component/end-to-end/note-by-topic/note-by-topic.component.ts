import {Component, OnDestroy} from '@angular/core';
import {Note} from "../../../entity/note";
import {NoteService} from "../../../service/note/note.service";
import {Subject, Subscription} from "rxjs";
import {ActivatedRoute, Params, Router} from '@angular/router';
import {takeUntil} from "rxjs/operators";
import {ArchiveService} from "../../../service/archive/archive.service";
import {Archive} from "../../../entity/archive";

@Component({
  selector: 'app-note-by-topic',
  templateUrl: './note-by-topic.component.html',
  styleUrls: ['../notes/notes.component.css'],
  // styleUrls: ['./note-by-topic.component.css'],
})
export class NoteByTopicComponent implements OnDestroy{

  private destroy$ = new Subject<undefined>();
  public topic: String;
  public note: Note[];
  public archive: Archive[];
  public subscriptions: Subscription[] = [];

  constructor(private noteService: NoteService,
              private router: Router,
              private activateRoute: ActivatedRoute,
              private archiveService: ArchiveService,
              ){
    this.topic = activateRoute.snapshot.params.topic
    this.activateRoute.params.pipe(
      takeUntil(this.destroy$)
    ).subscribe((params: Params) => {
      this.topic = params.topic;
      this.subscriptions.push(this.noteService.getNotesByTopic(this.topic).subscribe(response => {
        this.note = response;
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

  toArchive(id: number) {
    this.subscriptions.push(this.archiveService.toArchive(id).subscribe(response => {
      this.subscriptions.push(this.noteService.getNotesByTopic(this.topic).subscribe(response => {
        this.note = response;
      }));
    }))
  }
}
