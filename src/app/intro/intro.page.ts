import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {
  anOtherPage: TabsPage;
  constructor(private router:Router) { }

  ngOnInit() {
  }

  VaiParaTelaInicial(){
    this.router.navigate(['/feed'])
  }

}
