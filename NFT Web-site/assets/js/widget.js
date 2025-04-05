function installWidget() {
   const openButtons = document.querySelectorAll('[data-custom-widget="open-button"]'); 
   const customWidgetsMenu = document.querySelectorAll('[data-custom-widget="menu"]'); 
   
   openButtons.forEach(btn => { 
      btn.addEventListener('click', function () { 
         btn.closest('.layout-menu').classList.toggle('show'); 
      });
   });
   
   function closeAllwidgetMenu() {
      customWidgetsMenu.forEach(item => { 
         document.addEventListener('click', function (event) { 
            const inRoundarries = event.composedPath().includes(item); 
            if (!inRoundarries) {
               item.classList.remove('show'); 
            }
         });
      });
   }
   closeAllwidgetMenu(); 
   
   let date = new Date(Date.now() + 86400e3 * 365);
   date = date.toUTCString();

   function getCookie(name) {
      let matches = document.cookie.match(new RegExp(
         "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
      ));
      return matches ? decodeURIComponent(matches[1]) : undefined;
   }

   customWidgetsMenu.forEach((menu, index) => {
      let widgetCookie = getCookie('layoutCase-' + (index + 1));
      const widget = menu.closest('.widget');
      const itemList = widget.querySelector('[data-layout="list"]');
      const itemGrid = widget.querySelector('[data-layout="grid"]');

      if (widgetCookie === 'grid') {
         itemList.classList.remove('active'); 
         widget.classList.add('grid');      
         itemGrid.classList.add('active');   
      } else if (widgetCookie === 'list') {
         itemGrid.classList.remove('active'); 
         widget.classList.add('list');        
         itemList.classList.add('active');    
      }  else { 
         itemGrid.classList.remove('active'); 
         widget.classList.add('list');        
         itemList.classList.add('active');   
      }

      menu.addEventListener('click', function () {
         const dataLayout = menu.querySelectorAll('[data-layout]');
         dataLayout.forEach(item => {
            item.addEventListener('click', function () {
               const widget = item.closest('.widget');
               const thisNavigation = item.closest('.layout-case');
               const thisNavigationItems = thisNavigation.querySelectorAll('.layout-case__item');

               thisNavigationItems.forEach(navItem => {
                  navItem.classList.remove('active');
               });

               item.classList.add('active');
               const dataLayoutValue = item.getAttribute('data-layout');

               if (dataLayoutValue === 'grid') {
                  widget.classList.remove('list');
                  widget.classList.add('grid');
               } else if (dataLayoutValue === 'list') {
                  widget.classList.remove('grid');
                  widget.classList.add('list');
               }

               let layoutCase = 'layoutCase-' + (index + 1);
               let widgetLayoutCookie = layoutCase + "=" + dataLayoutValue + "; expires=" + date;
               document.cookie = widgetLayoutCookie;
               console.log(widgetLayoutCookie);
            });
         });
      });
   });
}


