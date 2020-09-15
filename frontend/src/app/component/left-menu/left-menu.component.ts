import {Component, ElementRef, OnInit} from '@angular/core';
import {TopicService} from "../../service/topic/topic.service";
import {Router} from "@angular/router";
import {Topic} from "../../entity/topic";
import {Subscription} from "rxjs";
import {NoteService} from "../../service/note/note.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-left-menu',
  templateUrl: './left-menu.component.html',
  styleUrls: ['./left-menu.component.css']
})
export class LeftMenuComponent implements OnInit {

  constructor(private topicService: TopicService,
              private noteService: NoteService,
              private router: Router,
              private elementRef: ElementRef) {
  }

  public topic: String;
  public topics: Topic[];
  public subscriptions: Subscription[] = [];
  public lightVersion: boolean = true;
  public backgroundColor: String = 'white';
  public fontColor: String = 'black';
  spanVision = false;

  newNoteValues: FormGroup = new FormGroup({
    noteTopic: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zа-яА-Я0-9_ \']{1,10}$')
    ]),
    noteText: new FormControl('', [
      Validators.required,
      Validators.pattern('^[a-zA-Zа-яА-Я0-9_ \']{1,10}$')
    ]),
  });

  ngOnInit(): void {
    this.subscriptions.push(this.topicService.getTopics().subscribe(response => {
      this.topics = response;
    }))
  }

  //TODO архив
  _navigate(link: String) {
    this.router.navigate([link]);
  }

  notesByTopic(topic: string) {
    this.topic = topic;
    this.router.navigate(['note']);
    this.router.navigate(['noteByTopic', topic]);
  }

  changeBackground(){
    this.lightVersion = !this.lightVersion;
    if (this.backgroundColor == 'white') {
      this.backgroundColor = '#212121';
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#212121';
    }
    else {
      this.backgroundColor = 'white'
      this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = 'white';
    }
    if (this.fontColor == 'black') this.fontColor = 'white';
    else this.fontColor = 'black'


    // console.log(this.colorStyle.backGroundColor + " " + this.colorStyle.fontColor);
    // if (this.colorStyle.backGroundColor == 'white') this.colorStyle.backGroundColor = '#212121';
    // else this.backgroundColor = 'white'
    // if (this.colorStyle.fontColor == 'black') this.colorStyle.fontColor = 'white';
    // else this.colorStyle.fontColor = 'black'
  }

  _save(){
    let txt = this.newNoteValues.controls.noteTopic.value;
    console.log(txt);
  }
}
