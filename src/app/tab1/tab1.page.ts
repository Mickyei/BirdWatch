import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bird } from '../interfaces/interface.bird';
import { BirdModalPage } from '../bird-modal/bird-modal.page';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  birds: Bird[];

  constructor(public modalController: ModalController) {
    this.birds = [];
  }


  async showModal() {
    const modal = await this.modalController.create({
      component: BirdModalPage
    });
    modal.onDidDismiss().then((data) => {
      if (data.data !== false) {
        this.birds.push(data.data);
        console.log(this.birds);
      } else {
        console.log('Adding canceled');
      }
    }
    );
    return await modal.present();
  }


}
