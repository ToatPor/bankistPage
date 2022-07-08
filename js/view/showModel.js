import View from './view.js';

class ShowModel {
  _formRegister = document.querySelector('.modal');
  _overLay = document.querySelector('.overlay');
  _modal = document.querySelectorAll('.btn--show-modal');

  openModal() {
    [this._overLay, this._formRegister].forEach(el =>
      el.classList.remove('hidden')
    );
  }

  addHandlerClick(func) {
    //becareFul func() mean excute code imidietly page load
    this._modal.forEach(el => el.addEventListener('click', func));
    // this._modal.addEventListener('click', func);
  }
}

export default new ShowModel();
