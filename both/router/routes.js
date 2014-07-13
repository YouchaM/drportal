/*****************************************************************************/
/* Client and Server Routes */
/*****************************************************************************/
Router.configure({
  layoutTemplate:   'MasterLayout',
  // loadingTemplate:  'Loading',
  notFoundTemplate: 'NotFound'
});

Router.map(function () {
  /*
    Example:
      this.route('home', {path: '/'});
  */
  this.route('home', {
    path:     '/',
    template: 'Home'
    });
  // this.route('login', {
  //   path:     '/login',
  //   template: 'Login'
  //   })

});
