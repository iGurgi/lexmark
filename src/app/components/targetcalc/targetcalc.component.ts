import { Component, OnInit, Input } from '@angular/core';
import { ConfigService } from "../../services/config.service";
import { CoreService } from "../../services/core.service";

@Component({
  selector: 'app-targetcalc',
  templateUrl: './targetcalc.component.html',
  styleUrls: ['./targetcalc.component.css']
})
export class TargetCalcComponent implements OnInit {
  @Input() calclevel: string = "country";

  constructor(private config: ConfigService, private core: CoreService) { }

  ngOnInit() {
  }

}