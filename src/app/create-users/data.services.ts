import { User } from './user.model';
import { EventEmitter, Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';

@Injectable()
export class DataServices {
  url: string = 'https://totemic-antenna-298717-default-rtdb.firebaseio.com/datos.json';
  users: User[] = [];

  private userSelectedSource = new Subject<{ user: User, index: number }>();
  private userUpdatedSource = new Subject<void>();

  userSelected$ = this.userSelectedSource.asObservable();
  userUpdated$ = this.userUpdatedSource.asObservable();
  

  constructor(private httpClient: HttpClient) {}

  createUsers(usuarios: User[]) {
    this.httpClient.put(this.url, usuarios).subscribe({
      next: (res) => console.log(res),
      error: (error) => console.log('error: ' + error),
    });
  }

  getUsers(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }

  setUsers(users: User[]) {
    this.users = users;
  }

  newUser(user: User) {
    if(this.users){
      this.users.push(user);
      this.createUsers(this.users);
    } else {
      this.users = [user]
      this.createUsers(this.users)
    }
  }
  // userSelected = new EventEmitter<any>();
  
  // userSelected
  // userSelected(user:User, id:number){
  //   this.user = user
  //   this.id = id
  // }
  userSelected(user: User, index: number) {
    this.userSelectedSource.next({ user, index });
  }

  updateUser(id: number, user: User){
    let url = 'https://totemic-antenna-298717-default-rtdb.firebaseio.com/datos/' + id + '.json';
    this.httpClient.put(url, user).subscribe({
      next: (res) => this.getUsers(),
      error: (error) => console.log(error),
    });
    this.userUpdatedSource.next();
  }

  saludar = new EventEmitter<string>();

  // saludar(nombre:string){
  //     // this.
  // }
}
