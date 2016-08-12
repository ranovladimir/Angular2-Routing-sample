/**
 * Created by Vladimir on 12/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {Router, ROUTER_DIRECTIVES} from '@angular/router';
import {UserService} from "../service/user.service";
import {User} from "../model/user";

@Component({
  selector: 'tc-user-list',
  pipes: [],
  directives: [ ROUTER_DIRECTIVES ],   // par la suite
   templateUrl: './user-list.component.html',
  providers: [UserService]
})



export class UserListComponent implements OnInit, OnDestroy {
   users:User[];

  constructor(private userService:UserService, private router:Router) {}

  ngOnInit() {

    this.userService.getAllUsers().then(users => this.users = users);

  }

  ngOnDestroy() {
    // this.sub.unsubscribe();
  }

}
