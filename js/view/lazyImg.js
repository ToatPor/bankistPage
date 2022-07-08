import View from './view.js';

class LazyImg extends View {
  _img = document.querySelectorAll('.features__img');

  getDataset() {
    this._img.forEach(el => {
      el.src = el.dataset.src;
      el.addEventListener('load', function () {
        el.classList.remove('lazy-img');
      });
    });
  }
}

export default new LazyImg();
