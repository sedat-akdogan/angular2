import { Component } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Component({
    selector: 'app-root',
    template: `<h1>Hello world!</h1>`,
    // templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],

    imports: [
        HomeComponent,
      ],

})
export class AppComponent {
    title = 'homes';
}
