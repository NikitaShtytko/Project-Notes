import {Component, OnInit} from '@angular/core';
import {Archive} from "../../../entity/archive";
import {Router} from "@angular/router";
import {ArchiveService} from "../../../service/archive/archive.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-archive',
  templateUrl: './archive.component.html',
  styleUrls: ['./archive.component.css']
})
export class ArchiveComponent implements OnInit {

  constructor(
    private archiveService: ArchiveService,
    private router: Router,
  ) {}

  public archive: Archive[];
  public subscriptions: Subscription[] = [];

  ngOnInit(): void {
    this.subscriptions.push(this.archiveService.getArchives().subscribe(response => {
      this.archive = response;
    }));
  }

  equip(header: string): string{
    if (header != null){
      return header;
    }
    else {
      return 'archive';
    }
  }

  fromArchive(id: number) {
    this.subscriptions.push(this.archiveService.fromArchive(id).subscribe(response => {
      this.subscriptions.push(this.archiveService.getArchives().subscribe(response => {
        this.archive = response;
      }));
    }))
  }
}
