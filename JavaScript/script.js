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

    // --- i18n ---
    const translations = {
      en: {
        'nav.history': 'History',
        'nav.menu': 'Menu',
        'nav.getApp': 'Get Our App',
        'nav.auth': 'Log in and Sign up',
        'nav.countries': 'Countries',
        'nav.contact': 'Contact us',
        'nav.news': 'Newsroom',
        'nav.collections': 'Collections',
        'nav.join': 'Join Us'
      },
      zh: {
        'nav.history': '历史',
        'nav.menu': '菜单',
        'nav.getApp': '下载应用',
        'nav.auth': '登录与注册',
        'nav.countries': '国家/地区',
        'nav.contact': '联系我们',
        'nav.news': '新闻中心',
        'nav.collections': '系列',
        'nav.join': '加入我们'
      }
    };

    function applyTranslations(locale) {
      const dict = translations[locale] || translations.en;
      document.querySelectorAll('[data-i18n]')
        .forEach(function(el){
          const key = el.getAttribute('data-i18n');
          if (dict[key]) {
            el.textContent = dict[key];
          }
        });
      const html = document.documentElement;
      html.setAttribute('lang', locale === 'zh' ? 'zh' : 'en');
    }

    function initLanguage() {
      const saved = localStorage.getItem('locale') || 'en';
      const select = document.getElementById('lang-select');
      if (select) {
        select.value = saved;
        select.addEventListener('change', function(e){
          const value = e.target.value;
          localStorage.setItem('locale', value);
          applyTranslations(value);
        });
      }
      applyTranslations(saved);
    }

    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', initLanguage);
    } else {
      initLanguage();
    }