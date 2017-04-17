# Moment Issues

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0. Use the related commands to run & build.

## Code Description

Issue component:
	- issueList: Array<Issues>
	- pageActual: number (initialized as 1)
	- getIssues (optional boolean): sums 1 to pageActual when true, substracts 1 when false. When undefined sums nothing. Uses pageActual to reset issuList with data from service

	On init calls getIssues.

Issue service:

	-getIssues (page: number): makes a GET call to 'https://api.github.com/repos/moment/moment/issues?page=PAGE' repository. Formats it to convert the input in an array of Issues

Issue model:
	
	- name: Username
	- title: Issue title
	- message: Issue body


