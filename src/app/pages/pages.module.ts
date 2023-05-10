import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ListEventComponent } from './evenement/list-event/list-event.component';
import { AddEventComponent } from './evenement/add-event/add-event.component';
import { EditEventComponent } from './evenement/edit-event/edit-event.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EventFrontModule } from './event-front/event-front.module';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ReactiveFormsModule,
    EventFrontModule
  ],
  declarations: [
    PagesComponent,
    ListEventComponent,
    AddEventComponent,
    EditEventComponent,
  ],
})
export class PagesModule {
}
