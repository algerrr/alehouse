import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-guestbook',
  templateUrl: './guestbook.component.html',
  styleUrls: ['./guestbook.component.css']
})
export class GuestbookComponent implements OnInit {

  public radioGroupForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.radioGroupForm = this.formBuilder.group({
      'model': 1
    });
  }

}
