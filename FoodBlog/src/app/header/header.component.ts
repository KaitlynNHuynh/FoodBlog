import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  visible:boolean;
  constructor() { 
    this.visible = false;
  }

  ngOnInit(): void { 
  }
  showDropdown() {
    this.visible = !this.visible
  }
  refresh() {
    window.location.reload();
  }
}
