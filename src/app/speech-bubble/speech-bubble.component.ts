import { Component, Input, OnInit } from '@angular/core';
import { IMessage } from '../core/models/iMessage';

@Component({
	selector: 'speech-bubble',
	templateUrl: './speech-bubble.component.html',
	styleUrls: ['./speech-bubble.component.css'],
})
export class SpeechBubbleComponent implements OnInit {
	@Input() textMessage!: IMessage;
	side: string = '';

	constructor() {}

	ngOnInit(): void {
		this.side = this.textMessage.sender === 'You' ? 'right' : 'left';
	}
}
