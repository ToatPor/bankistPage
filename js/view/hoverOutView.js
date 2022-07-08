class HoverOutview {
  #parentElement = document.querySelector('.nav');
  //private properties can use in array
  addHandlerHover(hoverFunc) {
    this.#parentElement.addEventListener('mouseout', function (e) {
      //prettier-ignore
      const target = e.target.classList.contains('nav__link');
      if (!target) return;
      const allLink = document.querySelectorAll('.nav__link');
      hoverFunc(allLink);
    });
  }
  hoverOut(element, opacity) {
    element.forEach(el => (el.style.opacity = opacity));
  }
}

export default new HoverOutview();
