import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { IMessage } from '../core/models/iMessage';

@Component({
	selector: 'home',
	templateUrl: './home.component.html',
	styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
	receiverName: string = 'Ishmael';
	senderName: string = 'You';
	textMessages: IMessage[] = [];

	notBlocked = true;

	constructor() {}

	ngOnInit(): void {}

	resetChat(): void {
		this.textMessages = [];
		this.notBlocked = true;
	}

	sendText(): void {
		if (this.notBlocked) {
			this.textMessages.unshift({
				sender: this.senderName,
				receiver: this.receiverName,
				body: 'Call me, Ishmael',
				timestamp: new Date(),
			});

			if (this.textMessages.length === 8) {
				this.textMessages.unshift({
					sender: this.receiverName,
					receiver: this.senderName,
					body: 'Please stop messaging me',
					timestamp: new Date(),
				});
				this.notBlocked = false;
			}
		}
	}
}
