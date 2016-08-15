requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery'          : '../bower_components/jquery/dist/jquery.min',
    'jquery-ui'       : '../bower_components/jquery-ui/jquery-ui.min'
  }
});

requirejs(['main']);
