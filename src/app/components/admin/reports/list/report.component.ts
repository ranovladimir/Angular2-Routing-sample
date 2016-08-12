/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {ReportListComponent} from "./report-list.component";


@Component({
  selector: 'tc-report',
  directives:[ReportListComponent],
  template:`<h2> reports component (when I click on reports link on sidebar nav </h2>
            <tc-report-list></tc-report-list>`

})
export class ReportComponent{



}
