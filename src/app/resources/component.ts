import { Component, OnInit } from '@angular/core';

class model{
}

@Component({
	templateUrl: './component.html',
	styleUrls: ['./component.css']
})

export class ResourcesComponent implements OnInit {
	public m: model;
	ngOnInit() {
		this.m = new model();
	}
}