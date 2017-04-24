import { Component, OnInit } from '@angular/core';

import {FirebaseService} from '../shared/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';

@Component({
  selector: 'app-edit-newest-component',
  templateUrl: './edit-newest-component.html',
  styleUrls: ['./edit-newest-component.css']
})
export class EditNewestComponent implements OnInit {

  id;
  no;
  Name;
  URL;
  Software;
  Deposit;
  Currencies;
  Languages;
  Licenses;
  Withdrawal;
  WithdrawalMethod;
  BannedCountries;
  CasinoType;
  ReturnToPlayer;
  AllowManualFlushing;
  LiveChat;
  Established;
  AffiliateProgram;
  Contacts;
  image: "";
  path: "";

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {

      this.no = listing.no;
      this.Name = listing.Name;
      this.URL = listing.URL;
      this.Software = listing.Software;
      this.Deposit = listing.Deposit;
      this.Currencies = listing.Currencies;
      this.Languages = listing.Languages;
      this.Licenses = listing.Licenses;
      this.Withdrawal = listing.Withdrawal;
      this.WithdrawalMethod = listing.WithdrawalMethod;
      this.BannedCountries = listing.BannedCountries;
      this.CasinoType = listing.CasinoType;
      this.ReturnToPlayer = listing.ReturnToPlayer;
      this.AllowManualFlushing = listing.AllowManualFlushing;
      this.LiveChat = listing.LiveChat;
      this.Established = listing.Established;
      this.AffiliateProgram = listing.AffiliateProgram;
      this.Contacts = listing.Contacts;
      this.image = listing.image;
      this.path = listing.path;
    });
  }

  onEditSubmit(){
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
      Contacts: this.Contacts
    }

    this.firebaseService.updateListing(this.id, listing);

    this.router.navigate(['/members']);
  }

}
