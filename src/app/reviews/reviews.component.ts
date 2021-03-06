import { Component, OnInit,Input } from '@angular/core';

import{Md5} from 'ts-md5/dist/md5';

import{GemModel} from '../gem-model';


@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
    
    @Input() gem:GemModel;
    
    newReview: ReviewModel;

  constructor(private avatarService: AvatarService) { }

  ngOnInit() {
      this.newReview={
          id:-1,
          createddate: ' ',
          body: ' ',
          rating: 0,
          author: ' '
          
        }
      

     
      }
    
     submitClicked(){
          this.gem.reviews.push(this.newReview);    
          this.ngOnInit();
  }

}
