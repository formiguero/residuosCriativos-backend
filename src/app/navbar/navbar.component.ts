import { Component, OnInit } from '@angular/core';
import * as M from '../../styles/materialize/js/materialize.min.js';

@Component({
  selector: 'navbar-component',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  options = {};

  ngOnInit(): void {

    // Menu Mobile
    const elems = document.querySelectorAll('.sidenav');
    const instances = M.Sidenav.init(elems, this.options);

  }

}
