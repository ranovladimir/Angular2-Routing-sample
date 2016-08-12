/**
 * Created by Vladimir on 18/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';


@Component({
  selector: 'tc-message-list',
  pipes: [],
  directives: [ ROUTER_DIRECTIVES ],   // par la suite
  templateUrl: './message-list.component.html',
})



export class MessageListComponent implements OnInit, OnDestroy {


  ngOnInit() {

  }

  ngOnDestroy() {

  }
}
