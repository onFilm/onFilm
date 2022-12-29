import { Component } from '@angular/core';

@Component({
  selector: 'app-components-home',
  templateUrl: './components-home.component.html',
  styleUrls: ['./components-home.component.css']
})
export class ComponentsHomeComponent {

  data = [
    { name: 'James', age:24, job: 'Designer' },
    { name: 'Jill', age:26, job: 'Engineer' },
    { name: 'Elyse', age:25, job: 'Engineer' }
  ];

  headers = [
    { key: 'name', label: 'Name'},
    { key: 'age', label: 'Age'},
    { key: 'job', label: 'Job' }
  ];

}
