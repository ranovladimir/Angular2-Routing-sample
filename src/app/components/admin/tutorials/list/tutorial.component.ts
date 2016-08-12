/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {TutorialListComponent} from "./tutorial-list.component";


@Component({
  selector: 'tc-tutorial',
  directives:[TutorialListComponent],
  template:`<h2> Tutorials component (when I click on Tutorials link on sidebar nav </h2>
<tc-tutorial-list></tc-tutorial-list>`

})
export class TutorialComponent{

}
