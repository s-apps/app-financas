import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Alert } from '../../models/alert';

@Component({
  selector: 'app-messages',
  templateUrl: './alerts.component.html',
  styleUrls: ['./alerts.component.scss']
})
export class AlertsComponent implements OnInit {

  @Input() alert: Alert = { class: '', message: '' };
  @Output() onClearAlert = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

}
