/**
 * Created by Vladimir on 18/07/2016.
 */
import { RouterConfig }          from '@angular/router';
import {ReportComponent} from "./list/report.component";
import {ReportCreateComponent} from "./create/report-create.component";
import {ReportDetailComponent} from "./detail/report-detail.component";
import {ReportListComponent} from "./list/report-list.component";



export const ReportRoutes : RouterConfig =
  <RouterConfig>[
    {
      path: 'report',
      component: ReportComponent,

    },

    {
      path: 'report/new',
      component: ReportCreateComponent,
    },

    {
      path: 'report/:IdReport',
      component: ReportDetailComponent,
    },
  ];
