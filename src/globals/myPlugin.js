const MyPlugin = {};

MyPlugin.install = function(Vue, options) {
  this.componentPath = options.componentPath;
  this.routePath = options.routePath;
  this.routes = [];

  _.forEach(options.data, function(v, k) {
    v.route = {
      path: MyPlugin.buildPath(v, MyPlugin.routePath),
      name: MyPlugin.buildName(v),
      component: MyPlugin.buildPath(v, MyPlugin.componentPath)
    };

    MyPlugin.routes.push(v.route);

    /*MyPlugin.routes.push({
      path: MyPlugin.buildPath(v, MyPlugin.routePath),
      name: MyPlugin.buildName(v),
      component: MyPlugin.buildPath(v, MyPlugin.componentPath)
    });*/
  });
};

MyPlugin.buildName = function(obj) {
  return obj.company.slug + '-' + obj.slug;
}

MyPlugin.buildPath = function(obj, path) {
  return (path ? path + '/' : '') + obj.company.slug + '/' + obj.slug;
}

export default MyPlugin;
