import { Component, OnInit } from '@angular/core';
import { ViewController } from '@ionic/core';
import { ModalController } from '@ionic/angular';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';
import { Bird } from '../interfaces/interface.bird';


@Component({
  selector: 'app-bird-modal',
  templateUrl: './bird-modal.page.html',
  styleUrls: ['./bird-modal.page.scss'],
})
export class BirdModalPage implements OnInit {
  private birdForm: FormGroup;
  private newBird: Bird;

  constructor(public modalCtrl: ModalController, private formBuilder: FormBuilder) {
    this.birdForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: [''],
      date: [''],
      rarity: ['']
    });
   }

  ngOnInit() {
  }

  cancel() {
    this.modalCtrl.dismiss(false);
  }

  logForm() {
    const newBird = this.birdForm.value;
    const date = new Date();
    newBird.date = date;
    console.log(newBird);
    this.modalCtrl.dismiss(newBird);
  }
}
