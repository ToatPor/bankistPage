import View from './view.js';

class sectionOpacityView extends View {
  _parentElement = document.querySelectorAll('.section');

  sectionHidden() {
    this._parentElement.forEach(el => el.classList.add('section--hidden'));
  }
}

export default new sectionOpacityView();
