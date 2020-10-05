import { AfterViewInit, Component, ContentChild,  Input,  OnInit, TemplateRef } from '@angular/core';
import { Observable } from 'rxjs';
import { shareReplay } from 'rxjs/operators';

@Component({
  selector: 'app-my-expander',
  templateUrl: './my-expander.component.html',
  styleUrls: ['./my-expander.component.css']
})
export class MyExpanderComponent implements OnInit, AfterViewInit {
  @Input() data: Observable<any[]>;
  dataShared: Observable<any[]>;
  @ContentChild('header') header: TemplateRef<any>;
  @ContentChild('body') body: TemplateRef<any>;
  expanded = false;

  constructor() { }

  ngOnInit() {
    this.dataShared = this.data.pipe(shareReplay(1));
  }

  ngAfterViewInit() {
// console.log('head', this.header, 'body', this.body, 'data', this.data);
console.log('data', this.data);
  }

}