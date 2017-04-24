import { Component, OnInit } from '@angular/core';
import { AngularFire,FirebaseListObservable, AuthProviders, AuthMethods } from 'angularfire2';
import { Router } from '@angular/router';
import { moveIn, fallIn, moveInLeft } from '../router.animations';


interface INewestCasinosComponen {
  no: string;
  Name: string;
  URL: string;
  Software: string;
  Deposit: string;
  Currencies: string;
  Languages: string;
  Licenses: string;
  Withdrawal: string;
  BannedCountries: string;
  CasinoType: string;
  ReturnToPlayer: string;
  AllowManualFlushing: string;
  LiveChat: string;
  Established: string;
  AffiliateProgram: string;
  Contacts: string;
  image: string;
  path: string;
  imageUrl:any;
}

@Component({
  selector: 'app-members',
  templateUrl: './members.component.html',
  styleUrls: ['./members.component.css'],
  animations: [moveIn(), fallIn(), moveInLeft()],
  host: {'[@moveIn]': ''}
})
export class MembersComponent implements OnInit {
  name: any;
  state: string = '';
  items: FirebaseListObservable<any[]>;
  listings: FirebaseListObservable<any[]>;

  constructor(public af: AngularFire,private router: Router) {


    this.af.auth.subscribe(auth => {
      if(auth) {
        this.name = auth;
        this.items = af.database.list('/items');
        this.listings = af.database.list('/listings');
      }
    });

  }

  logout() {
    this.af.auth.logout();
    this.router.navigateByUrl('/login');
  }


  ngOnInit() {
  }
}
