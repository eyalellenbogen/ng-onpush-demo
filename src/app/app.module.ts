import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DefaultCardComponent } from './components/card/default-card.component';
import { OnPushCardComponent } from './components/card/onpush-card.component';
import { MatButtonModule } from '@angular/material/button';
import { OutsideEventHandlerDirective } from './outside-event-handler.directive';
import { UserComponent } from './components/user/user.component';
import { BasicComponent } from './views/basic/basic.component';
import { ComplexComponent } from './views/complex/complex.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ZoneComponent } from './views/zone/zone.component';
import { ArraySorterComponent } from './components/array-sorter/array-sorter.component';
import { FlashBaseComponent } from './flash-base/flash-base.component';

@NgModule({
  declarations: [
    AppComponent,
    DefaultCardComponent,
    OnPushCardComponent,
    OutsideEventHandlerDirective,
    UserComponent,
    BasicComponent,
    ComplexComponent,
    ZoneComponent,
    ArraySorterComponent,
    FlashBaseComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
