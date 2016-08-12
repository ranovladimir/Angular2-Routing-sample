/**
 * Created by Vladimir on 15/07/2016.
 */
import {Component, OnInit, OnDestroy}    from '@angular/core';
import {ROUTER_DIRECTIVES, RouterConfig,} from "@angular/router";
import {MessageListComponent} from "./message-list.component";
import {ROUTER_CONFIG} from "@angular/router/src/common_router_providers";



@Component({
  selector: 'tc-message',
  directives:[ROUTER_DIRECTIVES, MessageListComponent],
  template:`
<h2> Message component (when I click on the messages link on sidebar nav </h2>
<tc-message-list></tc-message-list>`
})


export class MessageComponent{

}
