import { Component, OnInit } from '@angular/core';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-cow-profiles',
  templateUrl: './cow-profiles.component.html',
  styleUrls: ['./cow-profiles.component.scss']
})
export class CowProfilesComponent implements OnInit {
  faUserCircle = faUserCircle;

  images = [
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/brah.jpg', name: 'Cathrin Roets', description: 'The Brahman is an American breed of zebuine beef cattle. It was bred in the United States from 1885 from cattle originating in India, imported at various times from the United Kingdom, from India and from Brazil; these included Gir, Guzerá, Indu-Brasil and Ongole',
      date: '11/12/13', photoURL: 'assets/images/cow1.png'
    },
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/brah2.jpg', name: 'Cathrin Roets', description: 'The Brahman is the first cattle breed to have been developed in the United States. European breeds struggled to reach their full genetic potential under the harsh climatic and veld conditions of states, such as California, Louisiana and Texas. To overcome this, hardier humped cattle (Bos indicus), which are breeds that trace their ancestry back to India and Pakistan, were imported into the States from India, Mexico and Brazil between 1854 and 1926.',
      date: '13/11/14', photoURL: 'assets/images/cow1.png'
    },
    {
      // tslint:disable-next-line: max-line-length
      src: 'assets/images/cattle.jpg', name: 'Cathrin Roets', description: 'Namibian farmer, Jürgen Cranz is seen as the “father” of the Southern African Brahman, as he was the first to import the cattle in 1954. According to the Brahman Breeders Society of South Africa, Jürgen went to the United States on his honeymoon with his wife Vera. While there, they bought seven Brahman bulls and ten calves from JD Hudgins and three bulls from Vernon Frost.',
      date: '09/11/19', photoURL: 'assets/images/cow1.png'
    },

  ];

  constructor() {


  }



  ngOnInit() {
  }

}
