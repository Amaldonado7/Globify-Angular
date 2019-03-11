import { Component, OnInit } from '@angular/core';
import { AppService } from '../../../services/app.service';

@Component({
  selector: 'gl-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  constructor(private appService: AppService) { }

  ngOnInit() {
  }

  keyUp(event) {
		if(event.target.value) this.appService.inputSearch(event.target.value);
	}

}
