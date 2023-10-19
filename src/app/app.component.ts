import { Component, ElementRef, ViewChild } from '@angular/core';
declare var googleTranslateElementInit: any; 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'shopping-cart';

  // @ViewChild('divelement', { static: true })
  // changedivElement!: ElementRef;

  // changeColor(){
  //   this.changedivElement.nativeElement.style.background = 'green';
  // }


  storingButton:any[]=['button1'];

  increaseButtons(){
    this.storingButton.push('button'+(this.storingButton.length+1))
  }


}
