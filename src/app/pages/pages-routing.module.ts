import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ECommerceComponent } from './e-commerce/e-commerce.component';
import { NotFoundComponent } from './miscellaneous/not-found/not-found.component';
import { ChatComponent} from './oubaid/chat/chat.component'
import { ChatbotComponent } from './oubaid/chatbot/chatbot.component';
import { StatsComponent } from './oubaid/stats/stats.component';
import { ZoomComponent } from './oubaid/zoom/zoom.component';
import { ViewThreadTagComponent } from './tables/ViewThreadTag/ViewThreadTag.component';
import { ViewThreadDetailComponent } from './tables/ViewThreadDetail/ViewThreadDetail.component';
import { CreateThreadComponent } from './tables/CreateThread/createThread.component';
import { BlogComponent } from './Nadia/blog/blog.component';
import { AddBlogComponent } from './Nadia/add-blog/add-blog.component';
import { TheBlogComponent } from './Nadia/the-blog/the-blog.component';
import { BOComponent } from './tables/BO/BO.component';

const routes: Routes = [{
  path: '',
  component: PagesComponent,
  children: [

    {
      path: 'dashboard',
      component: ECommerceComponent,
    },
    {
      path: 'blog',
      component: BlogComponent,
    },
    {
      path: 'addblog',
      component: AddBlogComponent,
    },
    {
      path: 'theblog',
      component: TheBlogComponent,
    },
    {
      path: 'BO',
      component: BOComponent,
    },
    {
      path: 'iot-dashboard',
      component: DashboardComponent,
    },

    {path:'viewThreadTag',component:ViewThreadTagComponent},
    {path:'viewThreadDetail',component:ViewThreadDetailComponent},
    {
      path: 'message',
      component: ChatComponent,
    },

    {
      path: 'meeting',
      component: ZoomComponent,
    },
    {
      path: 'chatbot',
      component: ChatbotComponent,
    },
    {
      path: 'stats',
      component: StatsComponent,
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: 'layout',
      loadChildren: () => import('./layout/layout.module')
        .then(m => m.LayoutModule),
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module')
        .then(m => m.FormsModule),
    },
    {
      path: 'ui-features',
      loadChildren: () => import('./ui-features/ui-features.module')
        .then(m => m.UiFeaturesModule),
    },
    {
      path: 'modal-overlays',
      loadChildren: () => import('./modal-overlays/modal-overlays.module')
        .then(m => m.ModalOverlaysModule),
    },
    {
      path: 'extra-components',
      loadChildren: () => import('./extra-components/extra-components.module')
        .then(m => m.ExtraComponentsModule),
    },
    {
      path: 'maps',
      loadChildren: () => import('./maps/maps.module')
        .then(m => m.MapsModule),
    },
    {
      path: 'charts',
      loadChildren: () => import('./charts/charts.module')
        .then(m => m.ChartsModule),
    },
    {
      path: 'editors',
      loadChildren: () => import('./editors/editors.module')
        .then(m => m.EditorsModule),
    },
    {
      path: 'tables',
      loadChildren: () => import('./tables/tables.module')
        .then(m => m.TablesModule),
    },
    {
      path: 'miscellaneous',
      loadChildren: () => import('./miscellaneous/miscellaneous.module')
        .then(m => m.MiscellaneousModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },

  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
