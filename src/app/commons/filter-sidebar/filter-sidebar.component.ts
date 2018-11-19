import { Component } from '@angular/core';
import { Options } from 'ng5-slider';

@Component({
    selector   : 'filter-sidebar',
    templateUrl: './filter-sidebar.component.html',
    styleUrls  : ['./filter-sidebar.component.scss']
})
export class AppFilterSidebarComponent
{
    private minValue ="1";
    private maxValue ="250";
    /**
     * Constructor
     */
	 value: number = 100;
	  options: Options = {
		floor: 0,
		ceil: 250
	  };
    constructor()
    {
    }
}
