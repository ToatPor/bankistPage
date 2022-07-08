export default class View {
  _countSlide = 0;
  loadHandler(func) {
    window.addEventListener('load', func());
  }
}
