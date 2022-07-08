import View from './view.js';

class StickyNav extends View {
  _stickyELement = document.querySelector('.nav');
  _parentElement = document.querySelector('.header');

  _option() {
    return {
      root: null,
      threshold: 0,
    };
  }
  _entryFunc(entries) {
    const [entry] = entries;
    if (entry.isIntersecting) this._stickyELement.classList.remove('sticky');
    if (!entry.isIntersecting) this._stickyELement.classList.add('sticky');
  }
  _apiObs() {
    return new IntersectionObserver(this._entryFunc.bind(this), this._option());
  }

  obsIntersection() {
    this._apiObs().observe(this._parentElement);
  }
}

export default new StickyNav();
