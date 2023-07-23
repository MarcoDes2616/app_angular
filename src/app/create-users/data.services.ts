import { User } from "./user.model";

export class DataServices{
    users: User[] = [new User("Marco", "Cardenas"), new User("Lucas", "Cardenas")]

    newUser(user: User){
        this.users.push(user)
    }
}