'use strict';

class Hoverview {
  #parentElement = document.querySelector('.nav');
  //private properties can use in array
  addHandlerHover(hoverFunc) {
    this.#parentElement.addEventListener('mouseover', function (e) {
      //prettier-ignore
      const target = e.target.classList.contains('nav__link');
      if (!target) return;
      const allLink = document.querySelectorAll('.nav__link');
      hoverFunc(allLink, e.target);
    });
  }
  setOpacity(allLink, target, opacity) {
    allLink.forEach(el => {
      if (el !== target) {
        el.style.opacity = opacity;
      }
    });
  }
}

export default new Hoverview();
