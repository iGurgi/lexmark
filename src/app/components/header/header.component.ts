import { Component, OnInit, Input } from '@angular/core';
import {Header} from '../../models/header'

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() headerSource: Header;
  constructor() { }

  ngOnInit() {
  }

}