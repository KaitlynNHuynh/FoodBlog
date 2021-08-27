import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  signin: boolean;
  constructor() { 
    this.signin = true;
  }

  ngOnInit(): void {
  }

  signUp(){
    this.signin = true;
  }
  signIn(){
    this.signin = false;
  }

}
