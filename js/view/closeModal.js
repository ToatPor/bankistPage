class CloseModal {
  _overlay = document.querySelector('.overlay');
  _btnCLose = document.querySelector('.btn--close-modal');
  _modal = document.querySelector('.modal');
  addHandlerremoveModal(func) {
    [this._btnCLose, this._overlay].forEach(el =>
      el.addEventListener('click', func)
    );
  }

  removeModalFc() {
    [this._overlay, this._modal].forEach(el => el.classList.add('hidden'));
  }
}

export default new CloseModal();
