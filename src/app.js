export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      //{ route: ['', 'blank'], name: 'blank',      moduleId: 'blank',      nav: true, title: 'Blank' }
       { route: ['', 'welcome'], name: 'welcome',      moduleId: 'welcome',      nav: true, title: 'Welcome' },
       { route: 'users',         name: 'users',        moduleId: './Github/users',        nav: true, title: 'Github Users' },
       { route: 'suppliers',         name: 'suppliers',        moduleId: './Northwind/suppliers',        nav: true, title: 'Northwind Suppliers' },
       { route: 'categories',         name: 'categories',        moduleId: './Northwind/categories',        nav: true, title: 'Northwind Categories' },
       { route: 'northwindCharts',         name: 'northwindCharts',        moduleId: './Charts/northwindCharts',        nav: true, title: 'Northwind Charts' }
    ]);

    this.router = router;
  }
}
