import { Directive, ElementRef, HostListener} from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {
  

  constructor(private elem:ElementRef){}

  @HostListener ("mouseenter") hover(){
    this.styles('black')
  }
  @HostListener("mouseout") mouseout(){
    this.styles("brown")
  }

  private styles(action:string) {
    this.elem.nativeElement.style.color=action;

  }
}
