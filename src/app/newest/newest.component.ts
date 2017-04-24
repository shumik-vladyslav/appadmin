

import { Component, OnInit } from '@angular/core';
import {FirebaseService} from '../shared/firebase.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-newest',
  templateUrl: './newest.component.html',
  styleUrls: ['./newest.component.css']
})
export class NewestComponent implements OnInit {
  id:any;
  listing: any;
  imageUrl:any;

  constructor(
    private firebaseService: FirebaseService,
    private router:Router,
    private route:ActivatedRoute
  ) {

  }

  ngOnInit() {
    // Get ID
    this.id = this.route.snapshot.params['id'];

    this.firebaseService.getListingDetails(this.id).subscribe(listing => {
      this.listing = listing;

      let storageRef = firebase.storage().ref();
      console.log(this.listing);
      let spaceRef = storageRef.child(listing.path);
      storageRef.child(listing.path).getDownloadURL().then((url) => {
        // Set image url
        this.imageUrl = url;
      }).catch((error) => {
        console.log(error);
      });
    });
  }

  onDeleteClick(){

    var isDelete = confirm("Вы точно хотите удалить?");
    if(isDelete) {
      this.firebaseService.deleteListing(this.id);

      this.router.navigate(['/members']);
    }

  }

}
