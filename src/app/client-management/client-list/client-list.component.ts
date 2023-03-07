import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styles: [
  ]
})
export class ClientListComponent implements OnInit {

  constructor(private clientFB: FormBuilder) { }

  updateClientForm = this.clientFB.group({
    sku: [''],
    name: [''],
    price: [0],
    weight: [0],
    description: [''],
    thumbnail: [''],
    image: [''],
    stock:[0],
  });
  showEdit = false;

  ngOnInit(): void {
  }

  editClient(data:string){
    console.log('data :'+data);
    //this.productId = data;
    this.showEdit = true;
    //let product = this.products[0].data.filter(obj => obj.id === data);
    //this.product2Update = <ProductModel> product;
    //console.log(JSON.stringify(this.product2Update));
    /*this.updateForm = this.fbProd.group({
      sku: [product[0].sku],
      name: [product[0].name],
      price: [product[0].price],
      weight: [product[0].weight],
      description: [product[0].description],
      thumbnail: [product[0].thumbnail],
      image: [product[0].image],
      stock:[product[0].stock],
    });*/
  }

  updateClient(){

  }

}
