import { Component, OnInit } from '@angular/core';
import { Reminder } from '../reminder.model';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  reminders: Reminder[] = [];
  reminder: Reminder = new Reminder();

  constructor() { }

  ngOnInit() {

  }
  add() {
    this.reminders.push(this.reminder);
    this.reminder = new Reminder();
  }
  delete(index) {
    this.reminders.splice(index, 1);
  }
}
