// Developed @ https://codepen.io/dragontheory/pen/NWjQjRZ

function setDataLoadingAttr() {
    document.getElementsByTagName("div")[0].removeAttribute("data-load", ""); 
    document.getElementsByTagName("div")[0].removeAttribute("data-loaded", ""); 
    document.getElementsByTagName("div")[0].setAttribute("data-loading", ""); 
}
function setDataLoadedAttr() {
    document.getElementsByTagName("div")[0].removeAttribute("data-loading", ""); 
    document.getElementsByTagName("div")[0].removeAttribute("data-load", ""); 
    document.getElementsByTagName("div")[0].setAttribute("data-loaded", ""); 
}
function setDataLoadAttr() {
    document.getElementsByTagName("div")[0].removeAttribute("data-loaded", ""); 
    document.getElementsByTagName("div")[0].removeAttribute("data-loading", ""); 
    document.getElementsByTagName("div")[0].setAttribute("data-load", ""); 
}

// Taken from https://developer.mozilla.org/en-US/docs/Web/API/MutationObserverInit/attributeFilter
function callback(mutationList) { 
  mutationList.forEach(function(mutation) {
    switch(mutation.type) {
      case "attributes":
        switch(mutation.attributeName) {
          case "data-loading":
            var element01 = document.querySelector("body");
            element01.classList.remove("open");
            element01.classList.add("loading");
            break;
          case "data-loaded":
            var element02 = document.querySelector("body");
            element02.classList.remove("loading");
            element02.classList.add("open");
            break;
          case "data-load":
            var element03 = document.querySelector("body"); 
            element03.classList.remove("loading");
            element03.classList.remove("open");
            break;
        }
        break;
    }
  });
}

var observedElements = document.querySelector("div");

var observer = new MutationObserver(callback);
observer.observe(observedElements, {
  attributeFilter: [ "data-loading", "data-loaded", "data-load" ],
  attributeOldValue: true
});