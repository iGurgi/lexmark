import { Component, OnInit } from "@angular/core";
import {StateService} from '../../services/state.service';

@Component({
  selector: "app-target",
  templateUrl: "./target.component.html",
  styleUrls: ["./target.component.css"]
})
export class TargetComponent implements OnInit {
  constructor(private state: StateService) {}

  ngOnInit() {}

}
