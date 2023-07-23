import { User } from "./user.model";
import {EventEmitter} from "@angular/core"

export class DataServices{
    users: User[] = [new User("Marco", "Cardenas"), new User("Lucas", "Cardenas")]

    saludar = new EventEmitter<string>();

    newUser(user: User){
        this.users.push(user)
    }

    // saludar(nombre:string){
    //     // this.
    // }
}