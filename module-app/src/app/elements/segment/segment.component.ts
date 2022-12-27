import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.component.html',
  styleUrls: ['./segment.component.css']
})
export class SegmentComponent {

  @Input() iconRequired: boolean = false;
  @Input() btnRequired: boolean = false;

}
