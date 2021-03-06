import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { TheQuotes } from '../the-quotes';

@Component({
  selector: 'app-about-quote',
  templateUrl: './about-quote.component.html',
  styleUrls: ['./about-quote.component.css']
})
export class AboutQuoteComponent implements OnInit {
  @Input() addQuote!: TheQuotes;
  @Output() qDelete = new EventEmitter <boolean> ();

  numberOfLikes: number = 0;
  numberOfDislikes: number = 0;

  start:any = new Date().getTime();
  end:any = new Date().getTime();

  elapse:any=( this.end-this.start);

  likeButtonClick(){
    this.numberOfLikes++;
  }
  dislikeButtonClick(){
    this.numberOfDislikes++;
  }
  deleteQuote (y:boolean){
    this.qDelete.emit(y);
  }

  constructor() { }

  ngOnInit(): void {
  }

}
