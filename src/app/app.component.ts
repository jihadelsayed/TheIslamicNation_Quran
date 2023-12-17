import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { Component, AfterViewInit } from '@angular/core';
declare var $: any; // Declare $ as a variable to use jQuery (required by turn.js)

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  ngAfterViewInit() {
    // Initialize turn.js in the ngAfterViewInit lifecycle hook
    $('#myTurnjsContainer').turn();
  }
  
}
