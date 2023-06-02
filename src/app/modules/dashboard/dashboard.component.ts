import { Component } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  agentOptions: string[] = ['Dolor', 'Option 2', 'Option 3'];
  countryOptions: string[] = ['Loren Ipsum', 'Option 2', 'Option 3'];
  cards = [
    { image: 'assets/images/small_world.png', heading: 'Header', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled` },
    { image: 'assets/images/small_world.png', heading: 'Header', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled` },
    { image: 'assets/images/small_world.png', heading: 'Header', text: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled` },
  ];
  listItems= [
    { name: 'Phase #1 results:', count: `6` },
    { name: 'Phase #2 results:', count: `19` },
    { name: 'Phase #3 results:', count: `3` },
  ]
  progressValue : number = 60
}
