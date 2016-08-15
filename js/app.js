requirejs.config({
  baseUrl: 'js',
  paths: {
    'jquery'          : '../bower_components/jquery/dist/jquery.min',
    'jquery-ui'       : '../bower_components/jquery-ui/jquery-ui.min'
  },
  /*shim: {
    'CopyShader': 'threejs',
    'EffectComposer': 'threejs',
    'ShaderPass': 'threejs',
    'RenderPass': 'threejs',
    'GlitchPass': ['threejs', 'shaders/DigitalGlitch'],
    'EdgeShader': 'threejs',
    'FilmPass': ['threejs', 'FilmShader'],
    'MirrorShader': 'threejs',
    'BloomPass': ['threejs', 'ConvolutionShader'],
    'TriangleBlurShader': 'threejs',
    'VerticalBlurShader': 'threejs',
    'BokehPass': ['threejs', 'BokehShader'],
    'FXAAShader': 'threejs',
  }*/
});

requirejs(['main']);
