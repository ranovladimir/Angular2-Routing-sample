/**
 * Created by Vladimir on 12/07/2016.
 */
import { RouterConfig }          from '@angular/router';
import {UserListComponent} from './list/user-list.component';
import {UserDetailComponent} from "./detail/user-detail.component";
import {UserComponent} from "./list/user.component";
import {UserCreateComponent} from "./create/user-create.component";
// import {UserDetailComponent} from './user-detail.component';


export const UserRoutes : RouterConfig =
  <RouterConfig>[
    {
      path: 'user',
      component: UserComponent,
    },

    {
      path: 'user/new',
      component: UserCreateComponent
    },

    {
      path: 'user/:IdUser',
      component: UserDetailComponent
    },
  ];
