import { NgModule } from '@angular/core';
import { NbMenuModule} from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';

import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { ChatComponent } from './oubaid/chat/chat.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { ChatbotComponent } from './oubaid/chatbot/chatbot.component';

import {
  NbActionsModule,
  NbAlertModule,
  NbButtonModule,
  NbCalendarKitModule,
  NbCalendarModule,
  NbCalendarRangeModule,
  NbCardModule,
  NbChatModule,
  NbIconModule,
  NbProgressBarModule,
  NbSelectModule,
  NbSpinnerModule,
  NbTabsetModule,
} from '@nebular/theme';
import { StatsComponent } from './oubaid/stats/stats.component';
import { ZoomComponent } from './oubaid/zoom/zoom.component';
import { LogoutComponent } from './logout/logout.component';
import { BlogComponent } from './Nadia/blog/blog.component';
import { AddBlogComponent } from './Nadia/add-blog/add-blog.component';
import { TheBlogComponent } from './Nadia/the-blog/the-blog.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    ReactiveFormsModule,
    NbActionsModule,
    NbAlertModule,
    NbButtonModule,
    NbCalendarKitModule,
    NbCalendarModule,
    NbCalendarRangeModule,
    NbCardModule,
    NbChatModule,
    NbIconModule,
    NbProgressBarModule,
    NbSelectModule,
    NbSpinnerModule,
    NbTabsetModule,
    FormsModule
  ],
  declarations: [
    PagesComponent,
    ChatComponent,
    ChatbotComponent,
    StatsComponent,
    ZoomComponent,
    BlogComponent,
    AddBlogComponent,
    TheBlogComponent
  ],

})
export class PagesModule {
}
