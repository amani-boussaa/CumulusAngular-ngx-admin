import { NgModule } from '@angular/core';
import { NbMenuModule} from '@nebular/theme';
import { FormsModule } from '@angular/forms';
import { NbCardModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';


import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { BlogComponent } from './Nadia/blog/blog.component';
import { AddBlogComponent } from './Nadia/add-blog/add-blog.component';
import { TheBlogComponent } from './Nadia/the-blog/the-blog.component';
import { StatsBlogComponent } from './Nadia/stats-blog/stats-blog.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    FormsModule,
    NbCardModule,
    
  ],
  declarations: [
    PagesComponent,
    BlogComponent,
    AddBlogComponent,
    TheBlogComponent,
    StatsBlogComponent,
  ],
})
export class PagesModule {
}
