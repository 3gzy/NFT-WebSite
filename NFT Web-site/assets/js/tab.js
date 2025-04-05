function installTab() {
   const tabsComtent = document.querySelectorAll('.tabs__content');
   const tabsButton = document.querySelectorAll('.tabs__button');

   const addAttr = (selectors, attrName, attrValue) => {
      selectors.forEach((item, index) => {
         item.setAttribute(attrName, attrValue + index);
      })
   }   

   addAttr(tabsButton, 'data-content', 'content-');
   addAttr(tabsComtent, 'id', 'content-');

   const removeTabsActiveClasses = (elements) => elements.forEach(item => {
      item.classList.remove('active');
   })

   tabsButton.forEach(btn => {
      btn.addEventListener('click', () => {
         const dataContent = btn.getAttribute('data-content');
         const thisTabs = btn.closest('.tabs');
         const thisTabsButton = thisTabs.querySelectorAll('.tabs__button');
         const thisTabsContents = thisTabs.querySelectorAll('.tabs__content');
         const thisActiveContents = thisTabs.querySelector('#' + dataContent);

         removeTabsActiveClasses(thisTabsButton);
         removeTabsActiveClasses(thisTabsContents);
         thisActiveContents.classList.add('active');
         btn.classList.add('active');
      })
   })
}


