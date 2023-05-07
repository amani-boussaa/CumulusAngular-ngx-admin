import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PaymentComponent } from './payment.component';
import { ListOrdersComponent } from './Order/admin/list-orders.component';
import { ListWalletsComponent } from './Wallet/admin/list-wallets/list-wallets.component';
import { PaymentMethodComponent } from './Wallet/client/PaymentMethod/payment-method.component';
import { ChooseCardComponent } from './Wallet/client/choose-card/choose-card.component';
import { ListRefundsComponent } from './Refund/admin/list-refunds/list-refunds.component';
import { WalletDetailsComponent } from './Wallet/client/wallet-details/wallet-details.component';
import { BillingComponent } from './Wallet/client/billing/billing.component';
import { PaymentStatisticsComponent } from './Wallet/admin/payment-statistics/payment-statistics.component';
import { ListUserOrdersComponent } from './Order/client/UserOrders/user-orders.component';
import { CourseOrdersComponent } from './Order/admin/course-orders/course-orders.component';





const routes: Routes = [{
  path: '',
  component: PaymentComponent,
  children: [
    {
      path: 'list-orders',
      component: ListOrdersComponent,
    },
    {
      path: 'list-wallets',
      component: ListWalletsComponent,
    },
    {
      path: 'AddPaymentMethod',
      component: PaymentMethodComponent,
    },
    {
      path: 'ChooseCard',
      component: ChooseCardComponent,
    },
    {
      path: 'list-refunds',
      component: ListRefundsComponent,
    },
    {
      path: 'Wallet-Details',
      component: WalletDetailsComponent,
    },
    {
      path: 'Billing',
      component: BillingComponent,
    },
    {
      path: 'PaymentStatistics',
      component: PaymentStatisticsComponent,
    },
    {
      path: 'UserOrders',
      component: ListUserOrdersComponent,
    },
    {
      path: 'CourseOrders',
      component: CourseOrdersComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PaymentRoutingModule { }

export const routedComponents = [
    PaymentComponent,
    ListOrdersComponent,
    ListWalletsComponent,
    PaymentMethodComponent,
    ChooseCardComponent,
    ListRefundsComponent,
    WalletDetailsComponent,
    BillingComponent,
    PaymentStatisticsComponent,
    ListUserOrdersComponent,
    CourseOrdersComponent,
];
