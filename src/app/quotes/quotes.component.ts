import { Component, OnInit } from '@angular/core';
import { TheQuotes } from '../the-quotes';

@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
// words of encouragement
woe: TheQuotes [] = [
  new TheQuotes (1,'Miss Chepkoech', 'Body Positivity', 'You define beauty yourself. Society does not define your beauty', 'Lady Gaga', new Date(2022,11,1)),
  new TheQuotes (2,'Miss Chepkoech', 'Life Quotes', 'The way I see it if you want the rainbow you gotta put up with the rain', 'Dolly Parton',new Date(2022,6,2)),
  new TheQuotes (3,'Miss Chepkoech', 'Motivational Quotes', 'Everyday may not be good. But there is something good everday','Alice Morse', new Date(2022,1,2)),
  new TheQuotes (4,'Miss Chepkoech', 'Funny Quotes', 'Dont take life too seriously. You will never get out of it alive','Elbert Hubbard', new Date(2022,6,3))
]
toggleDescription(index:any){
  this.woe[index].showQuoteDescription = !this.woe[index].showQuoteDescription;
}
removeQuote(qDelete:boolean, index:number){
  if (qDelete){
    let toDelete = confirm(`Do you want to Delete ${this.woe[index].quoteTitle}?`)
    if (toDelete){
    this.woe.splice(index,1);
    }
  }
}
addNewQuote(words:any){
  let quotelenght = this.woe.length;
  words.id = quotelenght+1;
  words.postDate = new Date (words.postDate)
  this.woe.push(words)
}
  constructor() { }

  ngOnInit(): void {
  }

}
