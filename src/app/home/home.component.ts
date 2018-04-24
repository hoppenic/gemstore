import { Component, OnInit } from '@angular/core';

import {GemModel} from '../gem-model';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

    homeGems: GemModel[] = [{
        id: 1,
        name: 'Dodecahedron',
        price: 99.99,
        description: 'Some gems have magical powers and can turn you into a wizard.  Dodecahedron is one of those gems.',
        wowfactor: '9/10 Wowfactor',
        inventory: 10,
        fullImagePath: './assets/gem-01.gif',
        colors:["red","blue","green","yellow"]
    },
        {
        id: 2,
        name: 'Pentagonal',
        price: 111.11,
        description: 'This gem is proven to fight against robots',
        wowfactor: '8/10 Wowfactor',
        inventory:0,
        fullImagePath: './assets/gem-02.gif',
        colors:["red","blue","green","yellow"]
            
    },
        {
        id: 3,
        name: 'Octagonal',
        price: 7.99,
        description: 'This is a fancy gem from the future.',
        wowfactor: '6/10 Wowfactor',
        inventory: 89,
        fullImagePath: './assets/gem-03.gif',
        colors:["red","blue","green","yellow"]
        
         }]
    
    
    
    
    
  constructor() { }

  ngOnInit() {
  }

}
