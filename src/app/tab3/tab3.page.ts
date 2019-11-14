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
    // this.getBirds();
  }

  async getBirds() {
    this.savedBirds = [];
    this.storage.forEach( (value, key, index) => {
      this.savedBirds.unshift(value);
    });
  }

  ionViewWillEnter() {
    this.getBirds();
    console.log('Will enter');
  }

  clear() {
    this.storage.clear();
    this.savedBirds = [];
  }

  removeBird(bird: Bird) {
   /*  this.storage.forEach((value, key, index) => {
      console.log('key ' + key);
      console.log('bird name ' + bird.date.getMilliseconds().toString());
      if (key === bird.date.getMilliseconds().toString()) {
        console.log('right bird found');
        this.storage.remove(key);
      }
    }); */
    const birdDate = new Date(bird.date);
    this.storage.remove(birdDate.getMilliseconds().toString());

    this.savedBirds.forEach((item, index) => {
      if (item === bird) {
        this.savedBirds.splice(index, 1);
      }
    });
  }
}
