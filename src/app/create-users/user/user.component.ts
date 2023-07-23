import { Component, Input } from '@angular/core';
import { User } from '../user.model';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
//   styleUrls: ['./create-users.component.css']
})
export class UserComponent {
  @Input() user: User;
  @Input() i:number;
}