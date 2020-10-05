import { Component, VERSION } from '@angular/core';
import { of } from 'rxjs';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  data = of(['one', 'two', 'three']).pipe(tap(() => console.log('server request')));
}
