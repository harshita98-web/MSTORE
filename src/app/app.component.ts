import { Component } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { MatDialog } from '@angular/material/dialog';
import { LoginPageComponent } from './views/login-page/login-page.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(
    private matDialog : MatDialog,
    private router : Router
  )
{
}
  title = 'ecom-project';
  login(){
    this.matDialog.open(
      LoginPageComponent,{
        'width':'20vw',
        'height':'50vh'
      }
    )
}
  openHomePage(){
    this.router.navigate([""])
  }
  
}
