import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'top-bar',
	templateUrl: './top-bar.component.html',
	styleUrls: ['./top-bar.component.css'],
})
export class TopBarComponent implements OnInit {
	constructor(private router: Router) {}

	ngOnInit(): void {}

	gotoAbout(): void {
		this.router.navigate(['/About']);
	}

	gotoHome(): void {
		this.router.navigate(['/Home']);
	}

	gotoSpecs(): void {
		this.router.navigate(['/Specs']);
	}
}
