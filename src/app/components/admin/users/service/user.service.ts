/**
 * Created by Vladimir on 12/07/2016.
 */



import {Injectable}   from '@angular/core';
import {User} from "../model/user";
import {Http, Response, Headers} from "@angular/http";
import { Observable} from 'rxjs/Rx';


// ici se fera le dialogue avec le Back-End. L'entry-point.
//en attendant les test sont codés en dure


let USERS = [
  new User(11, 'TheUserTest'),
  new User(1, 'TheSecondeUserTest'),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(),
  new User(99, 'houssemZoro', "user ", "usernaùe","monPassword", "houssem.zaier@gùmail.com", "bornup", "08/08/1987")
]
;

let usersPromise = Promise.resolve(USERS);

@Injectable()
export class UserService {
   userRessource="http://localhost:5000/api/user";


  constructor(private http:Http){
  }

//HardCODED
  getAllUsers() {
    return usersPromise;
  }



  getUser(IdUser:number | string) {
    return usersPromise.then(users => users.find(user => user.idUser === +IdUser));
  }


}
