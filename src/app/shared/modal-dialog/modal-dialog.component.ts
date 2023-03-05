import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-dialog',
  templateUrl: './modal-dialog.component.html',
  styles: [
  ]
})
export class ModalDialogComponent implements OnInit {

  @Input() data: string []= [];
  @Input() gotError = false;
  public modalStyle: string='';
  serviceText1:string = '';
  title:string = 'Mensaje: ';

  constructor() { }

  ngOnInit(): void {
    if(this.data){
      let errors = this.data;
      for(let key in errors){
        console.log( 'key '+JSON.stringify(errors[key]));
        this.serviceText1 += errors[key] + "$";
      }
      if(this.gotError){
        this.title = 'Parece que hubo errores';

      }
      this.openModal();
    }
  }

  openModal(){
    this.modalStyle = this.modalStyle == 'modal-open' ? '':'modal-open';
  }


}
