import {Component, Input, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NoteService} from "../../../service/note/note.service";
import {Note} from "../../../entity/note";
import {Subscription} from "rxjs";
import {ArchiveService} from "../../../service/archive/archive.service";
import {Archive} from "../../../entity/archive";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  private noteEditPrototype: Note;
  public note: Note[];
  public archive: Archive[];

  constructor(private noteService: NoteService,
              private router: Router,
              private archiveService: ArchiveService,) {
  }

  public colors: Array<string> = ['#f44336', '#ffbb33', '#00C851', '#33b5e5',
                                  '#2BBBAD', '#4285F4', '#aa66cc', '#ea80fc',
                                  '#eebbc5', '#d7aefb'];
  public selectedColor;

  public subscriptions: Subscription[] = [];

  newNoteValues: FormGroup = new FormGroup({
    noteHead: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zа-яА-Я0-9_ \']{1,50}$')
    ]),
    noteText: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zа-яА-Я0-9_ \']{1,16777215}$')
    ]),
  });

  ngOnInit(): void {
    this.subscriptions.push(this.noteService.getNotes().subscribe(response => {
      this.note = response;
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

  toArchive(id: number) {
    this.subscriptions.push(this.archiveService.toArchive(id).subscribe(response => {
      this.subscriptions.push(this.noteService.getNotes().subscribe(response => {
        this.note = response;
      }));
    }))
  }

  _toArchive() {
  }

  _save() {
    this.noteEditPrototype.header = this.newNoteValues.controls.noteHead.value;
    this.noteEditPrototype.text = this.newNoteValues.controls.noteText.value;
    this.subscriptions.push(this.noteService.updateNote(this.noteEditPrototype).subscribe(response => {
    }));
    this.newNoteValues.reset();
  }

  editNoteData(note: Note) {
    this.newNoteValues.controls.noteHead.setValue(note.header);
    this.newNoteValues.controls.noteText.setValue(note.text);
    this.selectedColor = note.color;
    this.noteEditPrototype = note;
  }

  colorSelectFromList(color: string) {
    this.selectedColor = color;
    this.noteEditPrototype.color = color;
  }
}
