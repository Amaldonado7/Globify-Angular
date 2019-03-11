import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'gl-toggle',
  templateUrl: './toggle.component.html',
  styleUrls: ['./toggle.component.scss']
})
export class ToggleComponent implements OnInit {
  toggle: string;

  constructor() { }

  ngOnInit() {
    this.toggle
  }

}
