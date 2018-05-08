import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../auth.service';
import { AlertService } from '../alert.service';
import { UserService } from '../user.service';


@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
  })

export class LoginComponent implements OnInit {
      users: any = {
          email: '',
          password: ''
      };

      user: any;

      loading = false;
      returnUrl: string;

      constructor(
          private route: ActivatedRoute,
          private router: Router,
          private authService: AuthService,
          private alertService: AlertService,
         ) { }

    ngOnInit() {
        // reset login status
        this.authService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

 

    login(email, password) {
        this.authService.login(this.users.email, this.users.password)
            .subscribe(
                user => {
                this.router.navigate(['dashboard']);
                localStorage.setItem('userToken', user._id);
                },
                error => {
                    this.alertService.error(error);
                });
    }

}
