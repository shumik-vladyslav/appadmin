import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-listing',
  templateUrl: './add-newest.component.html',
  styleUrls: ['./add-newest.component.css']
})
export class AddNewestComponent implements OnInit {
  no: any;
  Name: any;
  URL: any;
  Software: any;
  Deposit: any;
  Currencies: any;
  Languages: any;
  Licenses: any;
  Withdrawal: any;
  WithdrawalMethod: any;
  BannedCountries: any;
  CasinoType: any;
  ReturnToPlayer: any;
  AllowManualFlushing: any;
  LiveChat: any;
  Established: any;
  AffiliateProgram: any;
  Contacts: any;
  image: "";
  path: "";

  constructor(
    private firebaseService:FirebaseService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onAddSubmit(){
    let listing = {
      no: this.no,
      Name: this.Name,
      URL: this.URL,
      Software: this.Software,
      Deposit: this.Deposit,
      Currencies: this.Currencies,
      Languages: this.Languages,
      Licenses: this.Licenses,
      Withdrawal: this.Withdrawal,
      WithdrawalMethod: this.WithdrawalMethod,
      BannedCountries: this.BannedCountries,
      CasinoType: this.CasinoType,
      ReturnToPlayer: this.ReturnToPlayer,
      AllowManualFlushing: this.AllowManualFlushing,
      LiveChat: this.LiveChat,
      Established: this.Established,
      AffiliateProgram: this.AffiliateProgram,
      Contacts: this.Contacts,
      image: this.image,
      path: this.path
  }

    this.firebaseService.addListing(listing);

    this.router.navigate(['/members']);
  }

}
