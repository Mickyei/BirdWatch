import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Bird } from '../interfaces/interface.bird';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  savedBirds: Bird[];

  constructor(private storage: Storage) {
    this.savedBirds = [];
  }

  // Fetches the saved observations from Local Storage.
  async getBirds() {
    this.savedBirds = [];
    this.storage.forEach( (value, key, index) => {
      this.savedBirds.unshift(value);
    });
  }


  ionViewWillEnter() {
    this.getBirds();
  }

  // Clears Local Storage.
  clear() {
    this.storage.clear();
    this.savedBirds = [];
  }

  // Removes an observation from Local Storage.
  removeBird(bird: Bird) {
    const birdDate = new Date(bird.date);
    this.storage.remove(birdDate.getMilliseconds().toString());
    this.savedBirds.forEach((item, index) => {
      if (item === bird) {
        this.savedBirds.splice(index, 1);
      }
    });
  }
}
