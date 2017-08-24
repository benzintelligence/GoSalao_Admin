import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout.routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LayoutContainerComponent } from './layout-container/layout-container.component';
import { SidebarLeftComponent } from './sidebar-left/sidebar-left.component';

@NgModule({
  imports: [
    CommonModule,
    LayoutRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    LayoutContainerComponent,
    SidebarLeftComponent
  ],
  exports: [
    LayoutContainerComponent
  ]
})
export class LayoutModule { }
