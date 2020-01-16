import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatGridListModule, MatListModule, MatTableModule, MatFormFieldModule, MatInputModule ,MatTabsModule, MatButtonModule, MatIconModule} from '@angular/material';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditableComponent } from './editable/editable.component';
import { ViewModeDirective } from './editable/view-mode.directive';
import { EditModeDirective } from './editable/edit-mode.directive';
import { FocusableDirective } from './focusable.directive';
import { EditableOnEnterDirective } from './editable/edit-on-enter.directive';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HeaderComponent } from './components/header/header.component';
import { BcAverageComponent } from './bc-average/bc-average.component';
import { ConfigDetailComponent } from './components/configdetail/configdetail.component';
import { ConfigCalcComponent } from './components/configcalc/configcalc.component';
import { ConfigComponent } from './components/config/config.component';
import { ImpactComponent } from './components/impact/impact.component';
import { TargetComponent } from './components/target/target.component';
import { TargetCalcComponent } from './components/targetcalc/targetcalc.component'
import { TargetDetailComponent } from './components/targetdetail/targetdetail.component'


@NgModule({
  declarations: [
    AppComponent,
    EditableComponent,ViewModeDirective,
    EditModeDirective, FocusableDirective, 
    EditableOnEnterDirective,
    HeaderComponent,
    BcAverageComponent,
    ConfigDetailComponent,
    ConfigCalcComponent,
    ConfigComponent,
    ImpactComponent,
    TargetComponent,
    TargetDetailComponent,
    TargetCalcComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatListModule,
    MatTableModule, MatFormFieldModule, MatInputModule,MatTabsModule,MatButtonModule,MatIconModule,
    FormsModule, ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
