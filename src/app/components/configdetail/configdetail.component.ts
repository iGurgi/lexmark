import {
  Component,
  OnInit,
  OnChanges,
  SimpleChanges,
  Input
} from "@angular/core";
import { FormControl, FormArray, FormGroup, Validators } from "@angular/forms";
import { ConfigService } from "../../services/config.service";
import { LineItem } from "../models/linteitem";

@Component({
  selector: 'app-configdetail',
  templateUrl: './configdetail.component.html',
  styleUrls: ['./configdetail.component.css']
})
export class ConfigDetailComponent implements OnInit {
  displayedColumns: string[] = [
    "configid",
    "name",
    "partnumber",
    "quantity",
    "flod",
    "master",
    "BSD",
    "pabp",
    "cntry",
    "geo",
    "competitor",
    "director",
    "ctryvspabp",
    "dirvpabp",
    "dirvctry"
  ];
  //displayedColumns: string[] = ['configid', 'type', 'description', 'quantity', 'totalprice'];

  dataSource = this.core.list$;
  controls: FormArray;
  @Input() rate: number;

  constructor(private core: ConfigService) {}

  ngOnInit() {
    const toGroups = this.core.list$.value.map(entity => {
      return new FormGroup(
        {
          quantity: new FormControl(
            entity.quantity,
            Validators.required
          ),
          geo: new FormControl(entity.geo, Validators.required),
          competitor: new FormControl(entity.competitor, Validators.required),
          director: new FormControl(entity.director, Validators.required)
        },
        { updateOn: "blur" }
      );
    });

    this.controls = new FormArray(toGroups);
  }

  getMaterialLine(type) {
    let result;
    switch (type) {
      case "Printers": {
        result = "HW";
        break;
      }
      case "Option": {
        result = "HW";
        break;
      }
      case "Supplies": {
        result = "SU";
        break;
      }
      case "Warranty": {
        result = "XW";
        break;
      }
      case "Service Part": {
        result = "feat";
        break;
      }

      default: {
        result = "NA";
        break;
      }
    }
    return result;
  }

  updateField(index, field) {
    const control = this.getControl(index, field);
    if (control.valid) {
      this.core.update(index, field, control.value);
    }
  }

  getControl(index, fieldName) {
    const a = this.controls.at(index).get(fieldName) as FormControl;
    return this.controls.at(index).get(fieldName) as FormControl;
  }

  getVsPct(cntry, pabp) {
    if (Number.isNaN((cntry - pabp) / pabp) || pabp == 0) return 0;
    else return ((cntry - pabp) / pabp) * 100;
  }
}