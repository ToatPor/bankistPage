// controller
import scrollView from './view/scrollView.js';
import hoverView from './view/hoverView.js';
import hoverOutView from './view/hoverOutView.js';
import sectionOpacityView from './view/sectionOpacityView.js';
import sectionView from './view/sectionView.js';
import stickyNav from './view/stickyNav.js';
import lazyImg from './view/lazyImg.js';
import { Hover_OPACITY, HOVER_OUT_OPACITY } from './view/config.js';
import showModel from './view/showModel.js';
import closeModal from './view/closeModal.js';
import tabBtn from './view/tabBtn.js';
import slideMove from './view/slideMove.js';

const scrollTo = function (e) {
  //can exist paremeter in scrollView module by pass in paremeter
  scrollView.scrollToView(e);
};
//addHandeler can send parameter to this function
//recieve parametor form hoverView module from addHandler method
const mouseOver = function (domELemet, target) {
  hoverView.setOpacity(domELemet, target, Hover_OPACITY);
};

const mouseOut = function (domELemet) {
  hoverOutView.hoverOut(domELemet, HOVER_OUT_OPACITY);
};
const hideSection = function () {
  sectionOpacityView.sectionHidden();
};

const showSection = function () {
  sectionView.oberserverSection();
};

const sticky = function () {
  stickyNav.obsIntersection();
};

const lazyFunc = function () {
  lazyImg.getDataset();
};

const modalOpen = function () {
  showModel.openModal();
};
const closeModalFunc = function () {
  closeModal.removeModalFc();
};
const clickTab = function (tabActive) {
  tabBtn.clearTab();
  tabBtn.clearContent();
  tabBtn.activeTab(tabActive);
  tabBtn.activeContent(tabActive);
};

const slideSetup = function () {
  slideMove.render();
  slideMove.setupSlide();
  slideMove.activeDot();
};
const goSlideR = function () {
  slideMove.goSlideR();
  // console.log(slideNum);
};
const goSlideL = function () {
  slideMove.goSlideL();
};
const dotClick = function (movDot) {
  slideMove.setupSlide(movDot);
  slideMove.activeDot(movDot);
};

const init = function () {
  slideMove.addHandlerClickL(goSlideL);
  slideMove.addHandlerClickR(goSlideR);
  slideMove.addHandlerDot(dotClick);
  tabBtn.addHandlerClick(clickTab);
  closeModal.addHandlerremoveModal(closeModalFunc);
  showModel.addHandlerClick(modalOpen);
  lazyImg.loadHandler(lazyFunc);
  sectionOpacityView.loadHandler(hideSection);
  sectionView.loadHandler(showSection);
  stickyNav.loadHandler(sticky);
  scrollView.addHandlerClick(scrollTo);
  hoverView.addHandlerHover(mouseOver);
  hoverOutView.addHandlerHover(mouseOut);
  slideMove.loadHandler(slideSetup);
};
init();
