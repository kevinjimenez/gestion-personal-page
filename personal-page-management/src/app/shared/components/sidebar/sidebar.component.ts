import { Component, OnInit } from '@angular/core';
import {faUser} from '@fortawesome/free-regular-svg-icons';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  faCoffee = faUser;
  constructor() { }

  ngOnInit(): void {
  }

}
