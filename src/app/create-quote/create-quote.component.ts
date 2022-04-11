import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TheQuotes } from '../the-quotes';

@Component({
  selector: 'app-create-quote',
  templateUrl: './create-quote.component.html',
  styleUrls: ['./create-quote.component.css']
})
export class CreateQuoteComponent implements OnInit {

  newQuote = new TheQuotes (0,"", "", "","", new Date());
  @Output() addQuote = new EventEmitter <TheQuotes>();
   submitQuote(){
     this.addQuote.emit(this.newQuote);
   }
 

  constructor() { }

  ngOnInit(): void {
  }

}
