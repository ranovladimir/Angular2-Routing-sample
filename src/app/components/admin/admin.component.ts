/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component}            from '@angular/core';
import {ROUTER_DIRECTIVES, Router, ActivatedRoute}    from '@angular/router';


@Component({
  templateUrl:'./admin.component.html',
  styleUrls: ['./admin.component.css'],
//
  // template: `
  // <style>
  //   #side-bar-navcomponent {
  //    width:30%;
  //    float: left;
  //   }
  //   #main-component{
  //    width:60%;
  //    float: right;
  //
  //   }
  // </style>
  //   <h2>page statique dashboard css bootstrap , responsive from youtube tutorial</h2>
  //   <div id="side-bar-navcomponent" style="border: solid 5px orangered;">
  //   <p>SideBarNavcomponent </p>
  //     <ul>
  //       <li> <a [routerLink]="['user']"> utilisateurs</a></li>
  //       <li> <a [routerLink]="['tutorial']"> tutoriels</a></li>
  //       <li> <a [routerLink]="['scenario']"> scenarii</a></li>
  //       <li> <a [routerLink]="['message']"> messages</a></li>
  //       <li> <a [routerLink]="['terminal']"> Bornes</a></li>
  //       <li> <a [routerLink]="['report']"> signalements</a></li>
  //       <li> <a  (click)="navigateAbsolute()" > navigation with router abspolut  (router)</a></li>
  //       <li> <a  (click)="navigateRelative()" > navigation with router relative (activeRouter)  </a></li>
  //     </ul>
  //   </div>
  //  <div id="main-component"     style="border: solid 5px darkslateblue;">
  //   <router-outlet></router-outlet>
  //  </div>
  //  `,
  directives: [ROUTER_DIRECTIVES],
  // providers:  [UserService,MessageService, ReportService, ScenarioService, TerminalService, TutorialService]
})
export class AdminComponent {
  constructor(private router:Router ) {
  }

  navigateAbsolute() {
    // Navigate with Absolute link
    this.router.navigate(['admin/tutorial']);
  }

  navigateRelative() {
   console.log(this.router.url );
    this.router.navigate([this.router.url +'/tutorial']);
  }
}
