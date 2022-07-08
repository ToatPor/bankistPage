import View from './view.js';

class sectionView extends View {
  _parentElement = document.querySelectorAll('section');

  _removeClass(domElement) {
    domElement.classList.remove('section--hidden');
  }
  _obsFunc(entries, observer) {
    const [entry] = entries;
    // console.log(entry);
    if (!entry.isIntersecting) return;
    this._removeClass(entry.target);
    observer.unobserve(entry.target);
  }
  _options() {
    return {
      root: null,
      threshold: 0,
    };
  }
  intersectionObs() {
    return new IntersectionObserver(this._obsFunc.bind(this), this._options());
  }

  oberserverSection() {
    this._parentElement.forEach(el => this.intersectionObs().observe(el));
  }
}

export default new sectionView();
