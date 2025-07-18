function toggleMenu() {
      const menu = document.getElementById('menu');
      menu.classList.toggle('active');

      // Optional: Adjust banner position based on menu state
      const banner = document.getElementById('banner');
      if (menu.classList.contains('active')) {
        banner.style.marginTop = menu.offsetHeight + 'px';
      } else {
        banner.style.marginTop = '0px';
      }
    }