
document.addEventListener('DOMContentLoaded', function(e) {
  ActiveCSS.init({
    configLocation: 'assets/activecss/config.acss, assets/activecss/conditionals.acss, assets/activecss/components.acss',
  });
});

// https://split.js.org/#/split-grid
// https://github.com/nathancahill/split/tree/master/packages/splitjs
Split({
  columnGutters: [{
    track: 1,
    element: document.querySelector('.gutter-col-1'),
  }],
})
