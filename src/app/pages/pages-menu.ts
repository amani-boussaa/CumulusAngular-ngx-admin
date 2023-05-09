import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'Home',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
 {
    title: 'Users',
    icon: 'person',
    link: '/pages/tables/users',
    children: [
      {
        title: 'List users',
        link: '/pages/tables/users',
      },
      {
        title: 'Make Complaint',
        link: '/pages/layout/complaint',
      },
      {
        title: 'Complaint List',
        link: '/pages/tables/complaints',
      },
      {
        title: 'Statistics',
        link: '/pages/charts/chartamani',
      },
      {
        title: 'video',
        link: '/pages/layout/video',
      }
    ]

  },
  {
    title: 'Payment',
    icon: 'shopping-cart-outline',
    children: [
      {
        title: 'Orders',
        link: '/pages/payment/list-orders',
        icon: 'file-text-outline'
      },
      {
        title: 'Wallets',
        link: '/pages/payment/list-wallets',
        icon: 'credit-card-outline'
      },
      {
        title: 'Refunds',
        link: '/pages/payment/list-refunds',
        icon: 'swap-outline'
      },
      {
        title: 'Statistics',
        link: '/pages/payment/PaymentStatistics',
        icon: 'pie-chart-outline'
      },
    ],
  },
  {     title: 'Message',     icon: 'message-circle-outline',     link: '/pages/message',     home: true,   },
    {     title: 'ChatBot',     icon: 'message-circle-outline',     link: '/pages/chatbot',     home: true,   },
   {     title: 'Stats',     icon: 'message-circle-outline',     link: '/pages/stats',     home: true,   },
  {
    title: 'DashCourse',
    icon: 'edit-2-outline',
    link: '/pages/tables/smart-tablemalikc',
  },


  {
    title: 'DashCertification',
    icon: 'edit-2-outline',
    link: '/pages/tables/smart-tablemalik',
  },
  {
    title: 'Courses',
    icon: 'edit-2-outline',
    link: '/pages/tables/smart-tablemaliku',
  },
  {
    title: 'Certifications',
    icon: 'edit-2-outline',
    link: '/pages/tables/smart-tablemalikui',
  },
  {
    title: 'SendMail',
    icon: 'edit-2-outline',
    link: '/pages/tables/smart-tablemalikmail',
  },
  {
    title: 'Blog',
    icon: 'browser-outline',
    link: '/pages/blog',
  },

  
  {
    title: 'Forums',
    icon: 'edit-2-outline',
    children: [
      { icon: 'home-outline',
        title: 'Threads',
        link: '/pages/tables/smart-tableb',
      },
      { icon: 'home-outline',
      title: 'View All Threads',
      link: '/pages/tables/smart-tableFront',
    },

    ],
  },

  

  // {
  //   title: 'Auth',
  //   icon: 'lock-outline',
  //   children: [
  //     {
  //       title: 'Login',
  //       link: 'login',
  //     },
  //     {
  //       title: 'Register',
  //       link: 'register',
  //     },
  //     {
  //       title: 'Request Password',
  //       link: 'request-password',
  //     },
  //     {
  //       title: 'Reset Password',
  //       link: 'reset-password',
  //     },
  //   ],
  // },
];
