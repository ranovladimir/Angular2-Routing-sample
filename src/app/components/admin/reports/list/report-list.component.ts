/**
 * Created by Vladimir on 18/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'tc-report-list',
  pipes: [],
  directives: [ ROUTER_DIRECTIVES ],   // par la suite
  templateUrl: './report-list.component.html',
})



export class ReportListComponent implements OnInit, OnDestroy {


  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
