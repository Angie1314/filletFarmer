import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cow-profiles',
  templateUrl: './cow-profiles.component.html',
  styleUrls: ['./cow-profiles.component.scss']
})
export class CowProfilesComponent implements OnInit {
  images = ['assets/images/brah.jpg',
  'assets/images/brah2.jpg',
  'assets/images/cattle.jpg'
];
  constructor() {


  }



  ngOnInit() {
  }

}
