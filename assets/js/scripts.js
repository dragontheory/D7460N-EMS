
document.addEventListener('DOMContentLoaded', function(e) {
  ActiveCSS.init({
    configLocation: 'assets/activecss/config.acss, assets/activecss/conditionals.acss, assets/activecss/components.acss',
  });
});

// https://split.js.org/#/split-grid
// https://github.com/nathancahill/split/tree/master/packages/splitjs
/*window.Split({
  columnGutters: [{
    track: 1,
    element: document.querySelector('.gutter-col-1'),
  }],
})*/

import Split from 'split-grid'

Split({
    columnGutters: [{
        track: 1,
        element: document.querySelector('.gutter-col-1'),
    }],
})
