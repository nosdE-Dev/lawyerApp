import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AllProducts, Products } from '../../interfaces/allproducts.interface';
import { ProductService } from '../../services/product.service';
import { ProductModel } from '../../models/product-model';
import { AddProduct } from '../../interfaces/addproduct-interface';

@Component({
  selector: 'app-all-products',
  templateUrl: './all-products.component.html',
  styles: [
  ]
})
export class AllProductsComponent implements OnInit {

  constructor(
    private productService: ProductService,
    private fb: FormBuilder,
    private fbProd: FormBuilder) { }

  products: AllProducts[] = [];
  savedProds: AddProduct[] = [];
  product2Update: ProductModel = new ProductModel('','','','',0,0,0);
  productId = '';
  registerForm = this.fb.group({
    sku: ['',Validators.required],
    name: ['', [Validators.required]],
    price: [0,Validators.required],
    weight: [0],
    description: [''],
    thumbnail: [''],
    image: [''],
    stock:[0],
  });

  updateForm = this.fbProd.group({
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
  isProduct = false;

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.productService.getAllProducts().subscribe(prodsData=>{
      this.products[0] = prodsData;
      console.log(prodsData);
      this.isProduct = true;
    },
    err=>{
      console.error(err);
    })

  }

  doSave(){
    if (!this.registerForm.invalid){
      this.productService.saveProduct(<ProductModel> this.registerForm.value).subscribe(prodsData=>{
        this.savedProds.push(prodsData);
        console.log(prodsData);
      },
      err=>{
        console.error(err);
      })
    }
  }

  editProduct(data:string){
    console.log('data :'+data);
    this.productId = data;
    this.showEdit = true;
    let product = this.products[0].data.filter(obj => obj.id === data);
    this.product2Update = <ProductModel> product;
    console.log(JSON.stringify(this.product2Update));
    this.updateForm = this.fbProd.group({
      sku: [product[0].sku],
      name: [product[0].name],
      price: [product[0].price],
      weight: [product[0].weight],
      description: [product[0].description],
      thumbnail: [product[0].thumbnail],
      image: [product[0].image],
      stock:[product[0].stock],
    });
  }

  updateProduct(){
    this.productService.updateProduct(<ProductModel> this.updateForm.value,this.productId).subscribe(prodsData=>{
      console.log(prodsData);
      this.updateForm.reset;
      this.showEdit = false 
      this.getAll();
    },
    err=>{
      console.error(err);
    })
  }

  
}
