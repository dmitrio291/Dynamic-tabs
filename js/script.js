/**
 * Importing functions
 */
import { getData } from "./apiService.js";
import { createTabs, createTabsContent } from "./tabs.js";

/**
 * Variables
 */
const data = await getData();
const tabsBlock = document.querySelector('.tabs__menu');
const tabsContent = document.querySelector('.tabs__content');
let goodsСategory;

/**
 * Generates tabs on the main page
 */
for (let i = 0; i < data.categories.length; i++) {
  const categoryName = data.categories[i];
  const tab = createTabs(categoryName);
  tabsBlock.insertAdjacentElement('beforeend', tab);
}

/**
 * Adds an active class for the first tab
 */
const tabsItem = document.querySelector('.tabs__item');
tabsItem.classList.add('tabs__item--active');

/**
 * Generates tabs content on the main page
 */
const generateTabsContent = () => {
  for (let i = 0; i < data.products.length; i++) {
    if (goodsСategory == data.products[i].categoryId) {
      const categoryName = data.products[i];
      const tabContent = createTabsContent(categoryName);
      tabsContent.insertAdjacentElement('beforeend', tabContent);
    }
  }
}

/**
 * Generates tabs content on the main page when the page loads
 */
if (tabsItem.classList.contains('tabs__item--active')) {
  goodsСategory = tabsItem.dataset.category;

  generateTabsContent();
}

/**
 * Switching the active tab class and content when clicking on one of the tabs
 */
tabsBlock.addEventListener('click', ({target}) => {
  if (target.dataset.category) {
    const activeTab = tabsBlock.querySelector('.tabs__item--active');

    activeTab.classList.remove('tabs__item--active');
    target.classList.add('tabs__item--active');

    goodsСategory = target.dataset.category;
    tabsContent.innerHTML = '';

    generateTabsContent();
  }
});