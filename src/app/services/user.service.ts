import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject} from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user: any;
  private apiUrl: string = "http://localhost:8081/api/customers";
  private userObservable = new BehaviorSubject([]);

  constructor(private httpClient: HttpClient) {
    this.readUsers();
  }

  public setLoggedUser(user: any) {
    this.user = user;
  }

  public getLoggedUser() {
    return this.user
  }


  getUserList() {
    return this.userObservable.asObservable(); //itemObservable este o denumire
  }

  createUser(user: any) {
    //tipuri de request:
    //GET - READ
    //POST - CREATE
    //PUT,PATCH - UPDATE
    //DELETE - DELETE
    this.httpClient.post(`${this.apiUrl}/addNewCustomer`, user).subscribe((response: any) => {
      console.log(response)
      console.log(response.message);

      this.readUsers(); //de fiecare data cand o sa adaugam un element o sa facem un request catre baza de date si o sa primim un list
      //se actualizeaza lista de elemente

      // let itemFromDb = response.data
      // this.items.push(response.data);

    })
    //body este sub forma de json si trimiti catre server
    //.subscribe inseamna ca ai trimis datele si urmeaza sa iti vina raspunsul
  }

  updateUser(user: any) {
    this.httpClient.put(`${this.apiUrl}/updateCustomer`, user).subscribe((response: any) => {
      console.log(response)
      console.log(response.message);

      this.readUsers();
      // let itemFromDb = response.data
      // this.items.push(response.data);

    })

  }

  deleteUser(user: any) {
    this.httpClient.delete(`${this.apiUrl}/deleteCustomerById/${user.id}`).subscribe((response: any) => {
      // acolo cu `$ e o metoda de a concatena stringurile in angular, e reco fiindca e mai rapid si mai usor de inteles, la concatenarea clasica ar consuma mai multe resurse
      console.log(response);
      this.readUsers();
    })

  }

  readUsers() {
    this.httpClient.get(this.apiUrl).subscribe((response: any) => {
      this.userObservable.next(response.data); //lambda expression - e o modalitate prin care simplificam codul
      //metoda next trimite notificari catre toti care au dat subscribe
      console.log(response)
    })
  }
}
