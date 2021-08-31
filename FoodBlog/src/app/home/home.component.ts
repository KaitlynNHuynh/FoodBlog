import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition} from '@angular/animations';
import { SelectMultipleControlValueAccessor } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    // Each unique animation requires its own trigger. The first argument of the trigger function is the name
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotateY(180deg)' })),
      transition('rotated => default', animate('1500ms ease-out')),
      transition('default => rotated', animate('600ms ease-in'))
  ])
]
})
export class HomeComponent implements OnInit {
  state: string = 'default';
  flip: boolean = false;
  account: boolean = false;
  share: boolean = false;
  @Input() page: string;

  constructor() { 
  }

  ngOnInit(): void {
    this.flip = false;
  }

  openShareComponent(){
    this.share = true;
    this.account = false;
  }
  
  openAccountComponent(){
    this.account = true;
    this.share = false;
  }

  async rotate() {
    this.state = (this.state === 'default' ? 'rotated' : 'default');
    await this.sleep(600)
    this.flip = !this.flip;
  }
  sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
}
