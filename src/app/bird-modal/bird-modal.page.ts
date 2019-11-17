import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { Bird } from '../interfaces/interface.bird';
import { Geolocation } from '@ionic-native/geolocation/ngx';


@Component({
  selector: 'app-bird-modal',
  templateUrl: './bird-modal.page.html',
  styleUrls: ['./bird-modal.page.scss'],
})
export class BirdModalPage implements OnInit {
  private birdForm: FormGroup;
  private newBird: Bird;
  private birdRarity: string;

  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder,
              private geo: Geolocation) {
    this.birdForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: [''],
      date: [''],
      rarity: ['']
    });
   }

  ngOnInit() {
  }

  // Dismisses the modal without passing the new observation.
  cancel() {
    this.modalCtrl.dismiss(false);
  }

  // Dismisses the modal and passes the data from the observation.
  logForm() {
    this.geo.getCurrentPosition().then((resp) => {
      const newBird = this.birdForm.value;
      const date = new Date();
      newBird.date = date;
      newBird.latitude = resp.coords.latitude;
      newBird.longitude = resp.coords.longitude;
      newBird.rarity = this.birdRarity;
      console.log(newBird);
      this.modalCtrl.dismiss(newBird);
     }).catch((error) => {
       console.log('Error getting location', error);
     });

  }
}
