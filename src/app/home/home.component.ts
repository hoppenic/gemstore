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
        inventory: 3,
        fullImagePath: './assets/gem-01.gif',
        colors:["red","blue","green","yellow"],
        reviews: [{
            id:1,
            rating:5,
            author:'person@gmail.com',
            createddate:'04/25/2018',
            body: 'Would not wear to a dog fight'
            
        }]
    },
        {
        id: 2,
        name: 'Pentagonal',
        price: 111.11,
        description: 'This gem grants the holder the ability to communicate with corn and other cash crops.',
        wowfactor: '8/10 Wowfactor',
        inventory: 5,
        fullImagePath: './assets/gem-02.gif',
        colors:["red","blue","green","yellow"],
        reviews: [{
            id:1,
            rating:9,
            author:'person2@gmail.com',
            createddate:'02/25/2018',
            body: 'This tastes like cat food'  
            
            }]
            
    },
        {
        id: 3,
        name: 'Triangular',
        price: 1234.99,
        description: 'This is a fancy gem sent back in time by human rebels to help combat the coming alien invasion.',
        wowfactor: '12/10 Wowfactor',
        inventory: 20,
        fullImagePath: './assets/gem-03.gif',
        colors:["red","blue","green","yellow"],
        reviews: [{
            id:1,
            rating:8,
            author:'person3@gmail.com',
            createddate:'01/25/1983',
            body: 'Made me invincible'
                   
        
         }]
    
    
    
    
    
  constructor() { }

  ngOnInit() {
  }

}
