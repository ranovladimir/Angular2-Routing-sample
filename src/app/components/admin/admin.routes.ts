/**
 * Created by Vladimir on 12/07/2016.
 */
import {RouterConfig}          from '@angular/router';
import {AdminDashboardComponent} from './dashboard/admin-dashboard.component';
import {UserRoutes} from './users/user.routes';
import {AdminComponent} from './admin.component';
import {TutorialRoutes} from "./tutorials/tutorial.routes";
import {TerminalRoutes} from "./terminals/terminal.routes";
import {ScenarioRoutes} from "./scenarios/scenario.routes";
import {ReportRoutes} from "./reports/report.route";
import {MessageRoutes} from "./messages/message.routes";


export const AdminRoutes:RouterConfig =
  <RouterConfig>[
    {
      path: 'admin',
      component: AdminComponent,
      children: [
        {
          path: '',
          component: AdminDashboardComponent,
        }
        ,
        ...UserRoutes,

        ...TutorialRoutes,

        ...TerminalRoutes,

        ...ScenarioRoutes,

        ...ReportRoutes,

        ...MessageRoutes,

      ]
    }

  ];
