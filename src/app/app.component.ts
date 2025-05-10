import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewerComponent } from "./viewer/viewer.component";
import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-root',
  imports: [CommonModule, ViewerComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent{
  
  title = 'cubeviewer';
  sides = [2, 3, 4, 5, 6, 7, 8];
  colors = ["green", "blue", "white", "yellow", "red", "orange"]
  selectedSide = 3;
  face = "green"

  updateFace(newFace: string) {
    this.face = newFace
  }
}
