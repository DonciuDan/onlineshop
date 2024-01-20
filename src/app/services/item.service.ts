import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  private itemObservable = new BehaviorSubject<Array<any>>([]);
  private apiUrl = "https://api.codebyte-software.com:2323/api/items"

  items: Array<any> = [];

  constructor(private httpClient: HttpClient) {
    this.readItems();
  }

  getItemList() {
    return this.itemObservable.asObservable(); //itemObservable este o denumire
  }

  createItem(item: any) {
    //tipuri de request:
    //GET - READ
    //POST - CREATE
    //PUT,PATCH - UPDATE
    //DELETE - DELETE
    this.httpClient.post(this.apiUrl, item).subscribe((response: any) => {
      console.log(response)
      console.log(response.message);

      this.readItems(); //de fiecare data cand o sa adaugam un element o sa facem un request catre baza de date si o sa primim un list
      //se actualizeaza lista de elemente

      // let itemFromDb = response.data
      // this.items.push(response.data);

    })
    //body este sub forma de json si trimiti catre server
    //.subscribe inseamna ca ai trimis datele si urmeaza sa iti vina raspunsul
  }

  updateItem(item: any) {
    this.httpClient.put(this.apiUrl, item).subscribe((response: any) => {
      console.log(response)
      console.log(response.message);

      this.readItems();
      // let itemFromDb = response.data
      // this.items.push(response.data);

    })

  }

  deleteItem(item: any) {
    this.httpClient.delete(`${this.apiUrl}/${item.id}`).subscribe((response : any) => {
      // acolo cu `$ e o metoda de a concatena stringurile in angular, e reco fiindca e mai rapid si mai usor de inteles, la concatenarea clasica ar consuma mai multe resurse
      console.log(response);
      this.readItems()
    })

  }

  readItems() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      this.itemObservable.next(response.data); //lambda expression - e o modalitate prin care simplificam codul
      //metoda next trimite notificari catre toti care au dat subscribe
      console.log(response)
    })
  }
}
