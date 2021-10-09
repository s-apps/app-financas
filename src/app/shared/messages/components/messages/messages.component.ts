import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  @Input() messages: string[] = [];
  @Output() onClearMessages = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
