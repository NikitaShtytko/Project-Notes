import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NoteService} from "../../../service/note/note.service";
import {Note} from "../../../entity/note";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  public note: Note[];

  constructor(private noteService: NoteService,
              private router: Router) {
  }

  public subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.noteService.getNotes().subscribe(response => {
      this.note = response;
      console.log("message")
    }));
  }

  route() {
    this.router.navigateByUrl('topic');
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
