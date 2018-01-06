export default {
  items: [
    {
      title: true,
      name: 'Dashboard',
      wrapper: {            // optional wrapper object
        element: 'span',      // required valid HTML5 element tag
        attributes: {}        // optional valid JS object with JS API naming ex: { className: 'my-class', style: { fontFamily: 'Verdana' }, id: 'my-id'}
      },
      class: 'text-center'             // optional class names space delimited list for title item ex: 'text-center'
    },
    {
      name: 'Dashboard',
      url: '/dashboard',
      icon: 'icon-speedometer',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      title: true,
      name: 'Theme',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Colors',
      url: '/theme/colors',
      icon: 'icon-drop',
    },
    {
      name: 'Typography',
      url: '/theme/typography',
      icon: 'icon-pencil',
    },
    {
      title: true,
      name: 'Components',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Base',
      url: '/base',
      icon: 'icon-puzzle',
      children: [
        {
          name: 'Breadcrumbs',
          url: '/base/breadcrumbs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Cards',
          url: '/base/cards',
          icon: 'icon-puzzle'
        },
        {
          name: 'Carousels',
          url: '/base/carousels',
          icon: 'icon-puzzle'
        },
        {
          name: 'Collapses',
          url: '/base/collapses',
          icon: 'icon-puzzle'
        },
        {
          name: 'Dropdowns',
          url: '/base/dropdowns',
          icon: 'icon-puzzle'
        },
        {
          name: 'Jumbotrons',
          url: '/base/jumbotrons',
          icon: 'icon-puzzle'
        },
        {
          name: 'List groups',
          url: '/base/list-groups',
          icon: 'icon-puzzle'
        },
        {
          name: 'Navs',
          url: '/base/navs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Paginations',
          url: '/base/paginations',
          icon: 'icon-puzzle'
        },
        {
          name: 'Popovers',
          url: '/base/popovers',
          icon: 'icon-puzzle'
        },
        {
          name: 'Progress Bar',
          url: '/base/progress-bar',
          icon: 'icon-puzzle'
        },
        {
          name: 'Switches',
          url: '/base/switches',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tabs',
          url: '/base/tabs',
          icon: 'icon-puzzle'
        },
        {
          name: 'Tooltips',
          url: '/base/tooltips',
          icon: 'icon-puzzle'
        }
      ]
    },
    {
      name: 'Buttons',
      url: '/buttons',
      icon: 'icon-cursor',
      children: [
        {
          name: 'Buttons',
          url: '/buttons/buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Button dropdowns',
          url: '/buttons/button-dropdowns',
          icon: 'icon-cursor'
        },
        {
          name: 'Button groups',
          url: '/buttons/button-groups',
          icon: 'icon-cursor'
        },
        {
          name: 'Loading Buttons',
          url: '/buttons/loading-buttons',
          icon: 'icon-cursor'
        },
        {
          name: 'Social Buttons',
          url: '/buttons/social-buttons',
          icon: 'icon-cursor'
        }
      ]
    },
    {
      name: 'Charts',
      url: '/charts',
      icon: 'icon-pie-chart'
    },
    {
      name: 'Editors',
      url: '/editors',
      icon: 'fa fa-code',
      children: [
        {
          name: 'Text Editors',
          url: '/editors/text-editors',
          icon: 'icon-note'
        },
        {
          name: 'Code Editors',
          url: '/editors/code-editors',
          icon: 'fa fa-code'
        }
      ]
    },
    {
      name: 'Forms',
      url: '/forms',
      icon: 'icon-note',
      children: [
        {
          name: 'Basic Forms',
          url: '/forms/basic-forms',
          icon: 'icon-note'
        },
        {
          name: 'Advanced Forms',
          url: '/forms/advanced-forms',
          icon: 'icon-note'
        },
      ]
    },
    {
      name: 'Google Maps',
      url: '/google-maps',
      icon: 'icon-map',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      name: 'Icons',
      url: '/icons',
      icon: 'icon-star',
      children: [
        {
          name: 'Flags',
          url: '/icons/flags',
          icon: 'icon-star',
          badge: {
            variant: 'success',
            text: 'NEW'
          }
        },
        {
          name: 'Font Awesome',
          url: '/icons/font-awesome',
          icon: 'icon-star',
          badge: {
            variant: 'secondary',
            text: '4.7'
          }
        },
        {
          name: 'Simple Line Icons',
          url: '/icons/simple-line-icons',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'Notifications',
      url: '/notifications',
      icon: 'icon-bell',
      children: [
        {
          name: 'Alerts',
          url: '/notifications/alerts',
          icon: 'icon-bell'
        },
        {
          name: 'Badges',
          url: '/notifications/badges',
          icon: 'icon-bell'
        },
        {
          name: 'Modals',
          url: '/notifications/modals',
          icon: 'icon-bell'
        },
        {
          name: 'Toastr',
          url: '/notifications/toastr',
          icon: 'icon-bell'
        }
      ]
    },
    {
      name: 'Plugins',
      url: '/plugins',
      icon: 'icon-energy',
      children: [
        {
          name: 'Calendar',
          url: '/plugins/calendar',
          icon: 'icon-calendar'
        },
        {
          name: 'Spinners',
          url: '/plugins/spinners',
          icon: 'fa fa-spinner'
        }
      ]
    },
    {
      name: 'Tables',
      url: '/tables',
      icon: 'icon-list',
      children: [
        {
          name: 'DataTable',
          url: '/tables/datatable',
          icon: 'icon-list'
        },
        {
          name: 'Tables',
          url: '/tables/tables',
          icon: 'icon-list'
        }
      ]
    },
    {
      name: 'Widgets',
      url: '/widgets',
      icon: 'icon-calculator',
      badge: {
        variant: 'info',
        text: 'NEW'
      }
    },
    {
      divider: true
    },
    {
      title: true,
      name: 'Extras',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Pages',
      url: '/pages',
      icon: 'icon-star',
      children: [
        {
          name: 'Login',
          url: '/login',
          icon: 'icon-star'
        },
        {
          name: 'Register',
          url: '/register',
          icon: 'icon-star'
        },
        {
          name: 'Error 404',
          url: '/404',
          icon: 'icon-star'
        },
        {
          name: 'Error 500',
          url: '/500',
          icon: 'icon-star'
        }
      ]
    },
    {
      name: 'UI Kits',
      url: '/ui-kits',
      icon: 'icon-layers',
      children: [
        {
          name: 'Invoicing',
          url: '/ui-kits/invoicing',
          icon: 'icon-speech',
          children: [
            {
              name: 'Invoice',
              url: '/ui-kits/invoicing/invoice',
              icon: 'icon-speech'
            }
          ]
        },
        {
          name: 'Email',
          url: '/ui-kits/email',
          icon: 'icon-speech',
          children: [
            {
              name: 'Inbox',
              url: '/ui-kits/email/inbox',
              icon: 'icon-speech'
            },
            {
              name: 'Message',
              url: '/ui-kits/email/message',
              icon: 'icon-speech'
            },
            {
              name: 'Compose',
              url: '/ui-kits/email/compose',
              icon: 'icon-speech'
            }
          ]
        }
      ]
    },
    {
      divider: true,
      class: 'm-2'
    },
    {
      title: true,
      name: 'Labels',
      wrapper: {
        element: 'span',
        attributes: {}
      },
      class: 'text-center'
    },
    {
      name: 'Label danger',
      url: '',
      icon: 'fa fa-circle text-danger',
      label: {
        variant: 'danger'
      },
    },
    {
      name: 'Label info',
      url: '',
      icon: 'fa fa-circle text-info',
      label: {
        variant: 'info'
      }
    },
    {
      name: 'Label warning',
      url: '',
      icon: 'fa fa-circle text-warning',
      label: {
        variant: 'warning'
      }
    },
  ]
};
