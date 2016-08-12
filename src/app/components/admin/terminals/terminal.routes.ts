/**
 * Created by Vladimir on 18/07/2016.
 */
import { RouterConfig }          from '@angular/router';
import {TerminalComponent} from "./list/terminal.component";
import {TerminalCreateComponent} from "./create/terminal-create.component";
import {TerminalDetailComponent} from "./detail/terminal-detail.component";


export const TerminalRoutes : RouterConfig =
  <RouterConfig>[
    {
      path: 'terminal',
      component: TerminalComponent,
    },

    {
      path: 'terminal/new',
      component: TerminalCreateComponent,
    },

    {
      path: 'terminal/:IdTerminal',
      component: TerminalDetailComponent,
    },
  ];
