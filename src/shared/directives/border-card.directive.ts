import {ElementRef, HostListener, Input} from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  @Input('appPKmnBorderCard') borderColor='#FFFF00';

  private setBorder(color:string){
    const border =' solid 4px '+color;
    this.element.nativeElement.style.border = border;
  }
  private setHeight(height:number){
    this.element.nativeElement.style.height = height + 'px';
  }
  constructor(private element: ElementRef) {
    this.setBorder('#28a424');
    this.setHeight(180);
  }
  @HostListener('mouseenter') onMousseEnter(){
    this.setBorder(this.borderColor || '#008000');
  }
  @HostListener('mouseleave') onMousseLeave(){
    this.setBorder('#a42424')
  }

}
