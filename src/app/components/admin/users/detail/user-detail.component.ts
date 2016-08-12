/**
 * Created by Vladimir on 12/07/2016.
 */
import {Component, OnDestroy, OnInit}    from '@angular/core';
import { Router, ActivatedRoute }   from '@angular/router';

@Component({

  // templateUrl:'./user-detail.component.html',
  templateUrl: './user-detail.component.html'
})


export class UserDetailComponent implements OnInit, OnDestroy {
 // user:User;


  // private sub:any;
  //
  // constructor(private service:UserService, private router:Router, private route: ActivatedRoute) {}
  //
  ngOnInit() {
    // this.sub = this.route.params.subscribe(params => {
    //   let IdUser = +params['IdUser']; // (+) converti le string 'IdUser en number
    //   this.service.getUser(IdUser).then(user =>this.user = user);
    // });
  }
  //
  ngOnDestroy() {
    // this.sub.unsubscribe();
  }
  //
  // gotoAllUser() {
  //     if (this.user) {
  //       let  userId = this.user.IdUser;
  //     } else {
  //       let userId = null;
  //     }
  //
  //   ///sans selection de l'user lors du boutton back
  //   this.router.navigate(['/users']);
  //   /// pour garder l'ID du user ,quand l'user retourne à la liste des users, l'anciens user est toujours selectionné
  //   //this.router.navigate(['/users'], { queryParams: {IdUser: this.user.IdUser}});
  // }

}
