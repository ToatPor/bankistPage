class ScrollToView {
  #parentElement = document.querySelector('.nav__links');
  //privateClass cant access to function inside method
  addHandlerClick(func) {
    this.#parentElement.addEventListener('click', function (e) {
      e.preventDefault();
      if (
        !e.target.classList.contains('nav__link') ||
        e.target.classList.contains('btn--show-modal')
      )
        return;
      const btn = e.target;
      const href = btn.getAttribute('href');
      const elementScrollto = document.querySelector(href);
      func(elementScrollto);
    });
  }

  scrollToView(element) {
    element.scrollIntoView({
      behavior: 'smooth',
    });
  }
}

export default new ScrollToView();
