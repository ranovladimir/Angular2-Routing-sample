import { Component } from '@angular/core';
import { ROUTER_DIRECTIVES } from '@angular/router';
import {UserService} from "./components/admin/users/service/user.service";

@Component({
  selector: 'app',
  templateUrl: './app.component.html',
  directives: [ ROUTER_DIRECTIVES ]
})
export class AppComponent {
  constructor() {}

}
