import { Component } from '@angular/core';
import { FormBuilder, FormGroup , Validators , FormControl } from '@angular/forms';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  private birdForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.birdForm = this.formBuilder.group({
      name: ['', Validators.required],
      notes: [''],
    });
  }


  logForm() {
    console.log(this.birdForm.value);
  }
}
