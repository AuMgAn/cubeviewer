import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from "./viewer/viewer.component";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [CommonModule, ViewerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'cubeviewer';
  sides = [2, 3, 4, 5, 6, 7, 8];
  selectedSide = 3;
}
