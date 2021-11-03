
document.addEventListener('DOMContentLoaded', function(e) {
    ActiveCSS.init({
        configLocation: 'assets/activecss/config.txt, assets/activecss/conditionals.txt, assets/activecss/components.txt',
    });
});

function myExternalFunction(o) {
    const li = document.querySelector(".active-li")
	console.log(li.dataset)
}
