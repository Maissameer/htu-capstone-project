import {
  CollectionReference,
  DocumentData,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
} from '@firebase/firestore';
import { Firestore, collectionData, docData } from '@angular/fire/firestore';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Profile } from './startups-profile';



@Injectable({
  providedIn: 'root'
})

export class ProfileService {
private profilesCollection: CollectionReference<DocumentData>;

  constructor( private firestore: Firestore){
    this.profilesCollection = collection(this.firestore,'/profiles');
  }

  //gat all data
  getAll() {
    return collectionData(this.profilesCollection, {
      idField: 'id',
    }) as Observable<Profile[]>;
  }

//gat only a spicefic data
  get(id: string){
    const docReference = doc(this.firestore,`/profiles/${id}`);
    return docData(docReference, {idField: 'id'});
  }

  //create new data
  create(profile: Profile){
    return addDoc(this.profilesCollection,profile);
  }

  //update the data
  update( profile: Profile){
    const docReference = doc(this.firestore, `profiles/${profile.id}`);
    return updateDoc(docReference, {...profile});
  }
//delete
  delete(id: string){
    const docReference = doc(this.firestore, `profiles/${id}`);
    return deleteDoc(docReference);
  }
}

 