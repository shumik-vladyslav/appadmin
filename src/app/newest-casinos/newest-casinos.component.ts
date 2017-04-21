import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable, FirebaseObjectObservable} from "angularfire2";
import * as firebase from 'firebase';

@Component({
  selector: 'app-newest-casinos',
  templateUrl: './newest-casinos.component.html',
  styleUrls: ['./newest-casinos.component.css']
})
export class NewestCasinosComponent implements OnInit {

  casino = {
    "no": "",
    "Name": "",
    "URL": "",
    "Software": "",
    "Deposit": "",
    "Currencies": "",
    "Languages": "",
    "Licenses": "",
    "Withdrawal": "",
    "Banned Countries": "",
    "Casino Type": "",
    "Return to Player": "",
    "Allow manual flushing": "",
    "Live Chat": "",
    "Established": "",
    "Affiliate Program": "",
    "Contacts": "",
    image: "",
    path: "",
  };

  folder = 'listingimages';

  items: FirebaseListObservable<any[]>;
  constructor(private af: AngularFire) {
    this.items = af.database.list('/items');
  }

  ngOnInit() {
  }

  new(){
    let storageRef = firebase.storage().ref();
    for(let selectedFile of [(<HTMLInputElement>document.getElementById('image')).files[0]]){
      let path = `/${this.folder}/${selectedFile.name}`;
      let iRef = storageRef.child(path);
      iRef.put(selectedFile).then((snapshot) => {
        this.casino.image = selectedFile.name;
        this.casino.path = path;
        this.display = false;
        return this.items.push(this.casino);

      });
    }
    // this.items.push(this.casino)
    console.log(this.casino)
  }

  displayEditDialog;

  editItem;

  newCasino = false;

  display: boolean = false;

  showDialog() {
    this.display = true;
  }

  editCasino(item){
    // this.items.update(item["$key"], item);
    this.displayEditDialog = true;

    this.editItem = item;
    // this.af.database.object('/items/'+item["$key"]).subscribe((it) => {
    //   console.log(item["$key"], it)
    //
    // })
  }

  edit(){
    this.items.update(this.editItem["$key"], this.editItem);
  }

  remove(){
    this.items.remove(this.removeItem["$key"]);
    this.displayDeliteDialog = false;

  }
  removeItem;
  displayDeliteDialog = false;

  deliteCasino(item){
    this.removeItem = item;
    this.displayDeliteDialog = true;
  }

}
