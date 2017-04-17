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
	pageActual: number = 1;

  	constructor (private issueService: IssueService) {
  	}

  	ngOnInit() {
      this.getIssues();
    }

    getIssues (next?: boolean) {
    	if (next) this.pageActual ++;
    	else if (this.pageActual > 1) this.pageActual --;
    	this.issueService.getIssues(this.pageActual).subscribe((resp) => this.issueList = resp);
    }
}
