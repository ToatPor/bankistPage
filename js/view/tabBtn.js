class TabBtn {
  _parenetElement = document.querySelector('.operations__tab-container');
  _tabOperations = document.querySelectorAll('.operations__tab');
  _content = document.querySelectorAll('.operations__content');
  addHandlerClick(func) {
    this._parenetElement.addEventListener('click', function (e) {
      e.preventDefault();
      const btnTab = e.target.closest('.operations__tab');
      const tabActive = btnTab.dataset.tab;
      func(tabActive);
    });
  }
  clearTab() {
    this._tabOperations.forEach(el =>
      el.classList.remove('operations__tab--active')
    );
  }
  activeTab(tabActive) {
    const activeOne = document.querySelector(`.operations__tab--${tabActive}`);
    activeOne.classList.add('operations__tab--active');
  }
  clearContent() {
    this._content.forEach(el =>
      el.classList.remove('operations__content--active')
    );
  }
  activeContent(tabActive) {
    const content = document.querySelector(
      `.operations__content--${tabActive}`
    );
    content.classList.add('operations__content--active');
  }
}

export default new TabBtn();
