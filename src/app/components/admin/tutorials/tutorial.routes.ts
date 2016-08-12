/**
 * Created by Vladimir on 18/07/2016.
 */
import { RouterConfig }          from '@angular/router';
import {TutorialComponent} from "./list/tutorial.component";
import {TutorialDetailComponent} from "./detail/tutorial-detail.component";
import {TutorialCreateComponent} from "./create/tutorial-create.component";


export const TutorialRoutes : RouterConfig =
  <RouterConfig>[
    {
      path: 'tutorial',
      component: TutorialComponent,
    },

    {
      path: 'tutorial/new',
      component: TutorialCreateComponent,
    },

    {
      path: 'tutorial/:IdTutorial',
      component: TutorialDetailComponent
    },
  ];
