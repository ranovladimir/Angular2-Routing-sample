/**
 * Created by Vladimir on 18/07/2016.
 */
import { RouterConfig }          from '@angular/router';
import {MessageCreateComponent} from "./create/message-create.component";
import {MessageComponent} from "./list/message.component";
import {MessageDetailComponent} from "./detail/message-detail.component";
import {MessageListComponent} from "./list/message-list.component";
import {listeners} from "cluster";



export const MessageRoutes : RouterConfig =
  <RouterConfig>[
    {
      path: 'message',
      component: MessageComponent,

    },


    {
      path: 'message/new',
      component: MessageCreateComponent,
    },

    {
      path: 'message/:IdMessage',
      component: MessageDetailComponent,
    },
  ];






// Autre façon d'implementer la liste de messages dans le messageComponent :
//
// {
//   path: 'message',
//     component: MessageComponent,
//   children: [{ path: '', component: MessageListComponent}]
//
// },
//
// et dans le fichier message.component.ts on met le <router-outlet></router-outlet> là où on veut placer la liste :
//
//   <h2> Message component (when I click on the messages link on sidebar nav </h2>
// <router-outlet></router-outlet>
