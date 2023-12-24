/** 
 * Generates tabs
*/
export const createTabs = product => {
  const li = document.createElement('li');

  li.classList.add('tabs__item');
  li.textContent = product.categoryName;
  li.dataset.category = product.categoryId;

  return li;
}

/** 
 * Generates tabs content
*/
export const createTabsContent = category => {
  const img = document.createElement('img');
  const h3 = document.createElement('h3');
  const li = document.createElement('li');

  img.classList.add('tabs__img');
  img.src = 'https://rrstatic.retailrocket.net/test_task/tovar.jpg';
  img.alt = category.productName;

  h3.classList.add('tabs-content__title');
  h3.textContent = category.productName;

  li.classList.add('tabs-content__item');
  li.append(img);
  li.append(h3);

  return li;
}