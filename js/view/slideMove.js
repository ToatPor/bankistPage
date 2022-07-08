import View from './view.js';

class Slide extends View {
  _slide = document.querySelectorAll('.slide');
  _slideLength = this._slide.length;
  _btnRight = document.querySelector('.slider__btn--right');
  _btnLeft = document.querySelector('.slider__btn--left');
  _dot = document.querySelector('.dots');

  render() {
    this._insertMarkup();
  }
  _markup(activeDot) {
    return `<button class="dots__dot" data-dot="${activeDot}"></button>`;
  }
  _insertMarkup() {
    this._slide.forEach((_, i) =>
      this._dot.insertAdjacentHTML('beforeend', this._markup(i))
    );
  }
  activeDot(slide = this._countSlide) {
    const dot = document.querySelectorAll('.dots__dot');
    //prettier-ignore
    const active = document.querySelector(`.dots__dot[data-dot="${slide}"]`);
    dot.forEach(el => el.classList.remove('dots__dot--active'));
    active.classList.add('dots__dot--active');
  }
  setupSlide(slide = this._countSlide) {
    this._slide.forEach((el, i) => {
      el.style.transform = `translateX(${100 * (i - slide)}%)`;
    });
  }

  goSlideR() {
    //prettier-ignore
    this._countSlide = this._countSlide === this._slide.length - 1 ? 0 : ++this._countSlide;
    this.setupSlide(this._countSlide);
    this.activeDot(this._countSlide);
  }

  goSlideL() {
    this._countSlide =
      this._countSlide === 0 ? this._slide.length - 1 : --this._countSlide;
    this.setupSlide(this._countSlide);
    this.activeDot(this._countSlide);
  }

  addHandlerClickR(func) {
    this._btnRight.addEventListener('click', func);
  }
  addHandlerClickL(func) {
    this._btnLeft.addEventListener('click', func);
  }
  addHandlerDot(func) {
    this._dot.addEventListener('click', function (e) {
      e.preventDefault();
      if (!e.target.classList.contains('dots__dot')) return;
      const movDot = e.target.dataset.dot;
      func(movDot);
    });
  }
}

export default new Slide();
