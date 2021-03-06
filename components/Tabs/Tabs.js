
class TabItem {
  constructor(element) {
    this.element = element;// attach dom element to object. Example in Tabs class
  }

  select() {
    // should use classList
    this.element.classList.add("Tabs__item-selected")
  }

  deselect() {
    // should use classList
    this.element.classList.remove("Tabs__item-selected");
    this.tabItem.deselect();
  }
}

class TabLink {
  constructor(element, parent) {
    this.element = element;
    this.tabs = parent;
    this.tabItem = Tabs.getTab(this.element.dataset.tab);
   this.tabItem = new TabItem(this.tabItem); 
    this.element.addEventListener('click', () => {
      this.tabs.updateActive(this);
      this.select();
    });``
  }

  select() {
    // select this link
    // select the associated tab
    this.element.classList.add("Tab__item-selected");
    this.TabItem.select();
  }

  deselect() {
    // deselect this link
    // deselect the associated tab
    this.element.classList.remove("Tabs__item-selected")
    this.tabItem.deselect();
  }
}

class Tabs {
  constructor(element) {
    this.element = element;// attaches the dom node to the object as "this.element"
    this.links = element.querySelectorAll(".Tabs__link");
    this.links = Array.from(this.links).map((link) => {
      return new TabLink(link, this);
    });
    
    this.init();
  }

  init() {
    // select the first link and tab upon ititialization
    this.activeLink = this.links[0];
    this.activeLink.select();
  }

  updateActive(newActive) {
    // deselect the old active link
    // assign the new active link
    this.activeLink.deselect();
    this.activeLink = newActive
  }
  
  getTab(data) {
    return this.element.querySelector(`.Tabs__item[data-tab='${data}']`);
  }

}

let tabs = document.querySelectorAll(".Tabs");
tabs = Array.from(tabs).map(tabs => new Tabs(tabs));
