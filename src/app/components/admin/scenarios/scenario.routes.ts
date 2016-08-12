/**
 * Created by Vladimir on 18/07/2016.
 */
import { RouterConfig }          from '@angular/router';
import {ScenarioComponent} from "./list/scenario.component";
import {ScenarioCreateComponent} from "./create/scenario-create.component";
import {ScenarioDetailComponent} from "./detail/scenario-detail.component";

export const ScenarioRoutes : RouterConfig =
  <RouterConfig>[
    {
      path: 'scenario',
      component: ScenarioComponent,
    },

    {
      path: 'scenario/new',
      component: ScenarioCreateComponent,
    },

    {
      path: 'scenario/:IdScenario',
      component: ScenarioDetailComponent,
    },
  ];
