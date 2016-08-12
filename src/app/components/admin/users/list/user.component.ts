/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {UserListComponent} from "./user-list.component";
// import {UserService} from "./user.service";


@Component({
  selector: 'tc-user',
  directives:[UserListComponent],
  templateUrl:'./user.component.html',
  host: {
    class:'row'
  }
})
export class UserComponent {

}
