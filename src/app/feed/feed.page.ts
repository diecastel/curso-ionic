import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.page.html',
  styleUrls: ['./feed.page.scss'],
})
export class FeedPage implements OnInit {
  public nome_usuario:String = "Diego Castellucchio do Código";
  constructor() { }

  public soma2numeros(num1:number,num2:number):void{
    alert(num1 + num2);
  }

  ngOnInit() {
    //this.soma2numeros(2,2);
  }

}
