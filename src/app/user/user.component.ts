import { Component, OnInit } from '@angular/core';
import { User } from '../user.model';
import { UserService} from '../user.service';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {


  // users: any;
  users: User[];



  constructor(private userService: UserService) {

  }

  ngOnInit() {

    this.getUsers();

  }



  getUsers(): void {
    this.userService.getUsers().subscribe(users => this.users = users);
  console.log(this.users);
  }

  add(firstName: string, lastName: string, username: string, password: string): void {
    firstName = firstName.trim();
    if (!firstName) { return; }
    const newUser: User = {
      _id: 0,
      firstName: firstName,
      lastName: lastName,
      documentType: 'cc',
      documentNumber: '12334',
      genre: 'femal',
      email: username,
      password: password

    };
    this.userService.addUser(newUser )
      .subscribe(user => {
        this.users.push(user);
      });
  }

  delete(user: User): void {
    if (confirm('Are you sure you want to delete it?')) {
    this.users = this.users.filter(u => u !== user);
    this.userService.deleteUser(user).subscribe();
    }
  }


}

