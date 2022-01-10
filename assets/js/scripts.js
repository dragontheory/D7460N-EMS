
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

Split(['.column03', '.column04'], {
		snapOffset: 0, //turn off snap
		sizes: [50, 50],
		minSize: [300, 300],
    expanedToMin: true,
    elementStyle: function(dimension, size, gutterSize) {
        return {
            'flex-basis': 'calc(' + size + '% - ' + gutterSize + 'px)',
					/*'width': 'calc(' + size + '% - ' + gutterSize + 'px)',
					'min-width': 'calc(' + size + '% - ' + gutterSize + 'px)',
					'max-width': 'calc(' + size + '% - ' + gutterSize + 'px)'*/
        }
    },
    gutterStyle: function(dimension, gutterSize) {
        return {
            'flex-basis': gutterSize + 'px'
        }
    }
});

