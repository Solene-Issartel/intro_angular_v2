import { Injectable } from '@angular/core';
//import { AngularFirestore, AngularFirestoreCollection } from "@angular/fire/firestore";
import { Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Festival } from 'src/app/models/festival';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class FestivalsService {
  private path = '/festivals/';
  //private festivalCollection: AngularFirestoreCollection<Festival>;
  //private festivalStore: AngularFirestore;

  constructor(
    //private db: AngularFirestore,
    private messageService: MessageService
  ) {
    //this.festivalStore = db;
    //this.festivalCollection = db.collection(this.path);
  }

  doc(id: string): string {
    return this.path + id;
  }
  doc2Festival(doc: any): Festival {
    return new Festival(
      doc.name,
      doc.id,
      doc.tablemax_1,
      doc.tablemax_2,
      doc.tablemax_3,
      doc.tableprice_1,
      doc.tableprice_2,
      doc.tableprice_3,
      doc.sqmprice_1,
      doc.sqmprice_2,
      doc.sqmprice_3,
      doc.tablebooked_1,
      doc.tablebooked_2,
      doc.tablebooked_3,
      doc.sqmbooked_1,
      doc.sqmbooked_2,
      doc.sqmbooked_3,
      doc.revenue,
      doc.visitor)
  }
  // getAllFestivals(): Observable<Festival[]> {
  //   return this.festivalCollection.valueChanges({ idField: "id" }).pipe(
  //     // map((data) => data.map(doc => doc as Festival))
  //     tap( doc => { this.messageService.log(`doc=${JSON.stringify
  //     (doc)}`) }),
  //     map(data => data.map(doc => this.doc2Festival(doc)))
  //     // map( data => data.map( doc => new Festival(
  //     //    doc.name, doc.id, doc.tablemax_1, doc.tablemax_2, doc.tablemax_3, doc.tableprice_1, doc.tableprice_2, doc.tableprice_3, doc.sqmprice_1, doc.sqmprice_2, doc.sqmprice_3)
  //     // ))
  //
  //   );
  // }

  // addUpdateFestival(festival: Festival) {
  //   console.log("festival service: add")
  //   if (festival.id == null) {
  //     festival.id = this.festivalStore.createId()
  //   }
  //   console.log("id = " + festival.id)
  //   this.festivalCollection.doc(festival.id).set(Object.assign({}, festival));
  // }
  //
  // addNewFestival(festival: Festival) {
  //   // console.log("festival service: addNew")
  //   if (festival.id == null) {
  //     festival.id = this.festivalStore.createId()
  //     // console.log("new id = " + festival.id)
  //   }
  //   this.festivalCollection.doc(festival.id).get()
  //     .subscribe(doc => {
  //       if (!doc.exists) {
  //         this.festivalCollection.doc(festival.id).set(Object.assign({}, festival));
  //       }
  //       else{
  //         // console.log("doc exists!")
  //       }
  //     });
  // }
  //
  // deleteFestival(festival: Festival) {
  //   this.festivalStore.doc<Festival>(this.path+festival.id).delete()
  // }
  //
  // getFestival(id: String): Observable<Festival> {
  //   var itemDoc = this.festivalStore.doc<Festival>(this.path+ id);
  //   return itemDoc.valueChanges().pipe(
  //     map( fest => this.doc2Festival(fest) )
  //   );
  // }
}

