
document.addEventListener('DOMContentLoaded', function(e) {
  ActiveCSS.init({
    configLocation: 'assets/activecss/config.acss, assets/activecss/conditionals.acss, assets/activecss/components.acss',
  });
});

// https://split.js.org/#/split-grid
// https://github.com/nathancahill/split/tree/master/packages/splitjs


Split({
  minSize: 150,
  columnGutters: [{
      track: 3,
      element: document.querySelector('panel-gutter'),
  }],
})
