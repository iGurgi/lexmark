import { Component, OnInit, Input } from '@angular/core';
import {Header} from '../../models/header'
import {CoreService} from "../../services/core.service"

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private core: CoreService) { }

  ngOnInit() {
    
  }

}