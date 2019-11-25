import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-daily-pain',
  templateUrl: './daily-pain.component.html',
  styleUrls: ['./daily-pain.component.scss']
})
export class DailyPainComponent implements OnInit {
    painScores= [1,2,3,4,5,6,7,8,9,10];

    selectedNumber= null;

    joints = ['Left Hand', 'Right Hand', 'Right Thumb', 'Right Index', 'Right Middle', 'Right Ring', 'Right Pinky', 'Left Thumb', 'Left Index', 'Left Middle', 'Left Ring', 'Left Pinky', 'Right Wrist', 'Right Elbow', 'Right Shoulder', 'Neck', 'Jaw', 'Spine', 'Right Hip', 'Left Hip', 'Right Knee', 'Left Knee', 'Right Andle', 'Left Ankle', 'Right Foot', 'Left foot'];

  constructor() { }

  ngOnInit() {
  }
  
  updateNumber(garbage) {
    this.selectedNumber = garbage;
    console.log(this.selectedNumber);
  }

}
