import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-notes-editor',
  templateUrl: './notes-editor.component.html',
  styleUrls: ['./notes-editor.component.scss']
})
export class NotesEditorComponent implements OnInit {
date = new Date();
  constructor() { }

  ngOnInit() {
  }

}
