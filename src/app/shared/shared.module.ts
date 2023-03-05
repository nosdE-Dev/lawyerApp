import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule ,FormsModule} from '@angular/forms';
import { MaterialModule } from '../material/material.module';
import { ModalDialogComponent } from './modal-dialog/modal-dialog.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
      ModalDialogComponent,
      SidebarMenuComponent
    ],
    imports: [
      RouterModule,
        CommonModule,
        MaterialModule,
        ReactiveFormsModule,
        FormsModule
    ],
    exports:[
      ModalDialogComponent,
      SidebarMenuComponent
    ],
})
export class SharedModule { }
