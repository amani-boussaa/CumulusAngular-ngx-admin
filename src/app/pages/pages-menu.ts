import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [

  {
    title: 'E-commerce',
    icon: 'shopping-cart-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {     title: 'Message',     icon: 'message-circle-outline',     link: '/pages/message',     home: true,   },
    {     title: 'ChatBot',     icon: 'message-circle-outline',     link: '/pages/chatbot',     home: true,   },
   {     title: 'Stats',     icon: 'message-circle-outline',     link: '/pages/stats',     home: true,   },
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
    title: 'FEATURES',
    group: true,
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
  {
    title: 'Layout',
    icon: 'layout-outline',
    children: [
      {
        title: 'Stepper',
        link: '/pages/layout/stepper',
      },
      {
        title: 'List',
        link: '/pages/layout/list',
      },
      {
        title: 'Infinite List',
        link: '/pages/layout/infinite-list',
      },
      {
        title: 'Accordion',
        link: '/pages/layout/accordion',
      },
      {
        title: 'Tabs',
        pathMatch: 'prefix',
        link: '/pages/layout/tabs',
      },
    ],
  },
  {
    title: 'Forms',
    icon: 'edit-2-outline',
    children: [
      {
        title: 'Form Inputs',
        link: '/pages/forms/inputs',
      },
      {
        title: 'Form Layouts',
        link: '/pages/forms/layouts',
      },
      {
        title: 'Buttons',
        link: '/pages/forms/buttons',
      },
      {
        title: 'Datepicker',
        link: '/pages/forms/datepicker',
      },
    ],
  },
  {
    title: 'UI Features',
    icon: 'keypad-outline',
    link: '/pages/ui-features',
    children: [
      {
        title: 'Grid',
        link: '/pages/ui-features/grid',
      },
      {
        title: 'Icons',
        link: '/pages/ui-features/icons',
      },
      {
        title: 'Typography',
        link: '/pages/ui-features/typography',
      },
      {
        title: 'Animated Searches',
        link: '/pages/ui-features/search-fields',
      },
    ],
  },
  {
    title: 'Modal & Overlays',
    icon: 'browser-outline',
    children: [
      {
        title: 'Dialog',
        link: '/pages/modal-overlays/dialog',
      },
      {
        title: 'Window',
        link: '/pages/modal-overlays/window',
      },
      {
        title: 'Popover',
        link: '/pages/modal-overlays/popover',
      },
      {
        title: 'Toastr',
        link: '/pages/modal-overlays/toastr',
      },
      {
        title: 'Tooltip',
        link: '/pages/modal-overlays/tooltip',
      },
    ],
  },
  {
    title: 'Extra Components',
    icon: 'message-circle-outline',
    link: '/pages/message',
    home: true,
  },
  {
    title: 'ChatBot',
    icon: 'message-circle-outline',
    link: '/pages/chatbot',
    home: true,
  },
  {
    title: 'Charts',
    icon: 'pie-chart-outline',
    children: [
      {
        title: 'Echarts',
        link: '/pages/charts/echarts',
      },
      {
        title: 'Charts.js',
        link: '/pages/charts/chartjs',
      },
      {
        title: 'D3',
        link: '/pages/charts/d3',
      },
    ],
  },
  {
    title: 'Editors',
    icon: 'text-outline',
    children: [
      {
        title: 'TinyMCE',
        link: '/pages/editors/tinymce',
      },
      {
        title: 'CKEditor',
        link: '/pages/editors/ckeditor',
      },
    ],
  },
  {
    title: 'Tables & Data',
    icon: 'grid-outline',
    children: [

      {
        title: 'Smart Table',
        link: '/pages/tables/smart-table',
      },
      {
        title: 'Tree Grid',
        link: '/pages/tables/tree-grid',
      },
    ],
  },
  {
    title: 'Miscellaneous',
    icon: 'shuffle-2-outline',
    children: [
      {
        title: '404',
        link: '/pages/miscellaneous/404',
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
