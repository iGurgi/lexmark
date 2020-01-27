import { Component, OnInit } from "@angular/core";
import {StateService} from '../../services/state.service';

@Component({
  selector: "app-config",
  templateUrl: "./config.component.html",
  styleUrls: ["./config.component.css"]
})
export class ConfigComponent implements OnInit {
isShow = true;
  constructor(private state: StateService) {}

  ngOnInit() {}
toggleDisplay() {
    this.state.$impact = !this.state.$impact;
  }
}
