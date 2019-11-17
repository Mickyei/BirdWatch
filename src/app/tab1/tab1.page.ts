import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Bird } from '../interfaces/interface.bird';
import { BirdModalPage } from '../bird-modal/bird-modal.page';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  birds: Bird[];

  constructor(public modalController: ModalController, private storage: Storage) {
    this.birds = [];
  }


  async showModal() {
    const modal = await this.modalController.create({
      component: BirdModalPage
    });
    modal.onDidDismiss().then((data) => {
      if (data.data !== false) {
        this.birds.unshift(data.data);
      } else {
        console.log('Adding canceled');
      }
    }
    );
    return await modal.present();
  }

  // Saves the new entry using Local Storage
  saveBird(bird) {
    this.storage.set(bird.date.getMilliseconds().toString(), bird);
  }

}
