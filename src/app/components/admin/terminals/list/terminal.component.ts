/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {TerminalListComponent} from "./terminal-list.component";


@Component({
  selector: 'tc-terminal',
  directives:[TerminalListComponent],
  template:`<h2> Terminals (Borne) component (when I click on Terminal link on sidebar nav) </h2>
            <tc-terminal-list></tc-terminal-list>`

})
export class TerminalComponent{

}
