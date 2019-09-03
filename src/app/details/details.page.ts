import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements AfterViewInit {
  @ViewChild(IonInput, { static: true }) firstInput;

  constructor() { }

  ngAfterViewInit() {
    console.log('after view init the details view', this.firstInput);
    this.firstInput.setFocus();
  }
}
