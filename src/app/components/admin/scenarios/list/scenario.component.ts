/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {ScenarioListComponent} from "./scenario-list.component";


@Component({
  selector: 'tc-scenario',
  directives:[ScenarioListComponent],
  template:`<h2> scenarios component (when I click on scenarios link on sidebar nav </h2>
            <tc-scenario-list></tc-scenario-list>`

})
export class ScenarioComponent{

}
