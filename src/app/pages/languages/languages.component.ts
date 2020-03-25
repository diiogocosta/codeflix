import { Component, OnInit } from '@angular/core';
import { languages } from '../../models/languages';

@Component({
  selector: 'app-languages',
  templateUrl: './languages.component.html',
  styleUrls: ['./languages.component.scss']
})
export class LanguagesComponent implements OnInit {
  public languages;
  constructor() {
    this.languages = languages;
    console.log(this.languages);
  }

  ngOnInit() {}
}
