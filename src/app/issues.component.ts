import { Component, OnInit } from '@angular/core';
import { IssueService } from './issue.service';
import { Issue } from './models/issue';

@Component({
    selector: 'issues',
    providers: [IssueService],
  	templateUrl: './issues.component.html',
  	styleUrls: ['./issues.component.css']
    })

export class IssuesComponent implements OnInit  {
	issueList: Array<Issue>;

  	constructor (private issueService: IssueService) {
  	}

  	ngOnInit() {
      this.issueService.getIssues().subscribe((resp) => this.issueList = resp);
    }

}
