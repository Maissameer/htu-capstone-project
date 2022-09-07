import { Injectable } from '@angular/core';
import { Startup } from './startup';
import { CollectionReference, Firestore, collectionData} from '@angular/fire/firestore';
import { collection , DocumentData } from '@firebase/firestore';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  
  private profileCollection : CollectionReference<DocumentData>
   constructor(private Firestore: Firestore) {
    this.profileCollection = collection(this.Firestore, '/profiles');
    }
     
    
  //     getAll(): Observable<Profile[]> {
  //       return collectionData(this.profileCollection, {idField: 'id'}) as Observable<Profile[]>;
  //  }
  }

   

function getCompanies() {
    throw new Error('Function not implemented.');
  }
  

