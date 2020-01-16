import { Component, OnInit } from '@angular/core';
import {StateService} from '../services/state.service';

@Component({
  selector: 'app-bc-average',
  templateUrl: './bc-average.component.html',
  styleUrls: ['./bc-average.component.css']
})
export class BcAverageComponent implements OnInit {

  selectedValue : String[] = ["country", "geo", "competitor", "director"];
  constructor(private state: StateService) { }

  ngOnInit() {
    this.selectedValue.forEach(i => this.state[i] = !this.state[i]);
  }

  selectionChanged(item) {
    this.state[item.value] = !this.state[item.value];
  }
}