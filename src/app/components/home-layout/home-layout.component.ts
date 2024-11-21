import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NzButtonModule } from 'ng-zorro-antd/button';

import { NzDividerModule } from 'ng-zorro-antd/divider';

@Component({
  selector: 'app-home-layout',
  standalone: true,
  imports: [NzDividerModule, NzButtonModule],
  templateUrl: './home-layout.component.html',
})
export class HomeLayoutComponent implements OnInit {
  constructor(private router: Router, private http: HttpClient) {}

  newUser() {
    this.router.navigate(['/user']);
  }
  newTask() {
    this.router.navigate(['/task']);
  }

  ngOnInit(): void {
    // this.http
    //   .get('http://localhost:3000/api/user', { withCredentials: true })
    //   .subscribe(
    //     (res) => {
    //       console.log(res);
    //     },
    //     (err) => {
    //       console.log(err);
    //     }
    //   );
  }
}
