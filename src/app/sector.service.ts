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
import { Sector } from './sector'; 



@Injectable({
  providedIn: 'root'
})
export class SectorService {
  private sectorsCollection: CollectionReference<DocumentData>;

  constructor( private firestore: Firestore){
    this.sectorsCollection = collection(this.firestore,'/sectors');
  }

  //gat all data
  getAll() {
    return collectionData(this.sectorsCollection, {
      idField: 'id',
    }) as Observable<Sector[]>;
  }

//gat only a spicefic data
  get(id: string){
    const docReference = doc(this.firestore,`/sectors/${id}`);
    return docData(docReference, {idField: 'id'});
  }

  //create new data
  create(sector: Sector){
    return addDoc(this.sectorsCollection,sector);
  }

  //update the data
  update( sector: Sector){
    const docReference = doc(this.firestore, `sectors/${sector.id}`);
    return updateDoc(docReference, {...sector});
  }
//delete
  delete(id: string){
    const docReference = doc(this.firestore, `sectors/${id}`);
    return deleteDoc(docReference);
  }
}