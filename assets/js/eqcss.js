// Apply eqcss on clicks, resizes, inputs
var EQCSS_resizing = false;
var EQCSS_timeout = true;
window.addEventListener("mousedown", function() {
	EQCSS_resizing = true;
	if(EQCSS_timeout == true) {
		EQCSS.apply();
	}
	EQCSS_timeout = false;
	setTimeout(function() {
		EQCSS_timeout = true;
	},250);
});
window.addEventListener("mouseup", function() {
	EQCSS_resizing = false;
	if(EQCSS_timeout == true) {
		EQCSS.apply();
	}
	EQCSS_timeout = false;
	setTimeout(function() {
		EQCSS_timeout = true;
	},250);
});
window.addEventListener("mousemove", function() {
	if(EQCSS_resizing === true) {
		if(EQCSS_timeout === true) {
			EQCSS.apply();
		}
		EQCSS_timeout = false;
		setTimeout(function() {
			EQCSS_timeout = true;
		},250);
	}
});
window.addEventListener("keydown", function() {
	if(EQCSS_timeout == true) {
		EQCSS.apply();
	}
	EQCSS_timeout = false;
	setTimeout(function() {
		EQCSS_timeout = true;
	},250);
});
window.addEventListener("keyup", function() {
	if(EQCSS_timeout == true) {
		EQCSS.apply();
	}
	EQCSS_timeout = false;
	setTimeout(function() {
		EQCSS_timeout = true;
	},250);
});
window.addEventListener("input", function() {
	if(EQCSS_timeout == true) {
		EQCSS.apply();
	}
	EQCSS_timeout = false;
	setTimeout(function() {
		EQCSS_timeout = true;
	},250);
});
setInterval(function() {
	EQCSS.apply();
}, 1000);