// https://codepen.io/dragontheory/pen/YzQevQe
// https://codepen.io/dragontheory/pen/JjJaLXd?editors=0100

window.onload = function() {
    const container = document.querySelector('.scroll-progress-to-top-container');
    const svg = document.querySelector('svg');
    const progressBar = document.querySelector('.progress-bar');
    const pct = document.querySelector('.pct');
    const totalLength = progressBar.getTotalLength();
      
    setTopValue(svg);
    
    progressBar.style.strokeDasharray = totalLength;
    progressBar.style.strokeDashoffset = totalLength;
    
    window.addEventListener('scroll', () => {
      setProgress(container, pct, progressBar, totalLength);
    });
    
    window.addEventListener('resize', () => {
      setTopValue(svg);
    });
  }
  
  function setTopValue(svg) {
    svg.style.top = document.documentElement.clientHeight * 0.5 - (svg.getBoundingClientRect().height * 0.5) + 'px';
  }
  
  
  function setProgress(container, pct, progressBar, totalLength) {
    const clientHeight = document.documentElement.clientHeight;
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    
    const percentage = scrollTop / (scrollHeight - clientHeight);
    if(percentage === 1) {
      container.classList.add('completed');
    } else {
      container.classList.remove('completed');
    }
    if(percentage === 0) {
      container.classList.add('hide');
    } else {
      container.classList.remove('hide');
    }
    pct.innerHTML = Math.round(percentage * 100) + '%';
    progressBar.style.strokeDashoffset = totalLength - totalLength * percentage;  
  }