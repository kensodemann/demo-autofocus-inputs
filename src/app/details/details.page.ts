import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { IonInput } from '@ionic/angular';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss']
})
export class DetailsPage implements AfterViewInit {
  @ViewChild('focusMe', { static: true }) firstInput;

  constructor() {}

  ngAfterViewInit() {
    setTimeout(() => {
      this.firstInput.nativeElement.focus();
    });
  }
}
