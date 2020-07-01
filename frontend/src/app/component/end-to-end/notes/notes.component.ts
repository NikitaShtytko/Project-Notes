import {Component, OnInit} from '@angular/core';
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

  constructor(private noteService: NoteService,
              private router: Router) {
  }

  public note: Note[];
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

}
