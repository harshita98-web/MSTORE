import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit(): void {
  }
  hover() {
    this.route.navigate(['/home-page']);
  }
  back(){
    this.route.navigate(['/login-page'])
  }
}
