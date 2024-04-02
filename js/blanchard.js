// map
ymaps.ready(init);
function init() {
  const mapElem = document.querySelector('#map');
  const myMap = new ymaps.Map(
    "map",
    {
      center: [55.75846806898367, 37.60108849999989],
      zoom: 14,
      controls: ['geolocationControl', 'zoomControl']
    },
    {
      suppressMapOpenBlock: true,
      geolocationControlSize: "large",
      geolocationControlPosition:  { top: "200px", right: "20px" },
      geolocationControlFloat: 'none',
      zoomControlSize: "small",
      zoomControlFloat: "none",
      zoomControlPosition: { top: "120px", right: "20px" },
    },
  );

  myMap.behaviors.disable('scrollZoom');

  const myPlacemark = new ymaps.Placemark(
    [55.75846806898367, 37.60108849999989],
    {},
    {
      iconLayout: "default#image",
      iconImageHref: "img/contacts-map.svg",
      iconImageSize: [20, 20],
    }
  );

  myMap.geoObjects.add(myPlacemark);

  setTimeout(() => {
    myMap.container.fitToViewport();
  }, 5000);
}

// scrollbar
const params = {
  btnClassName: "js-header-dropdown-btn",
  dropClassName: "js-header-drop",
  activeClassName: "is-active",
  disabledClassName: "is-disabled"
}

function onDisable(evt) {
  if (evt.target.classList.contains(params.disabledClassName)) {
    evt.target.classList.remove(params.disabledClassName, params.activeClassName);
    evt.target.removeEventListener("animationend", onDisable);
  }
}

  function setMenuListener() {
    document.body.addEventListener("click", (evt) => {
      const activeElements = document.querySelectorAll(`.${params.btnClassName}.${params.activeClassName}, .${params.dropClassName}.${params.activeClassName}`);

      if (activeElements.length && !evt.target.closest(`.${params.activeClassName}`)) {
        activeElements.forEach((current) => {
          if (current.classList.contains(params.btnClassName)) {
            current.classList.remove(params.activeClassName);
          } else {
            current.classList.add(params.disabledClassName);
          }
        });
      }

      if (evt.target.closest(`.${params.btnClassName}`)) {
        const btn = evt.target.closest(`.${params.btnClassName}`);
        const path = btn.dataset.path;
        const drop = document.querySelector(`.${params.dropClassName}[data-target="${path}"]`);

        btn.classList.toggle(params.activeClassName);

        if (!drop.classList.contains(params.activeClassName)) {
          drop.classList.add(params.activeClassName);
          drop.addEventListener("animationend", onDisable);
        } else {
          drop.classList.add(params.disabledClassName);
        }
      }
    });
  }

setMenuListener();


// search+burger

function debounce(f, ms) {

  let isCooldown = false;

  return function() {
    if (isCooldown) return;

    f.apply(this, arguments);

    isCooldown = true;

    setTimeout(() => isCooldown = false, ms);
  };
}

window.debounce = debounce;

function setBurger(params) {
  const btn = document.querySelector(`.${params.btnClass}`);
  const menu = document.querySelector(`.${params.menuClass}`);
  const links = menu.querySelectorAll(`.${params.linksClass}`);

  function onBtnClick () {
    btn.classList.toggle (params.activeClass);

    if (
    !menu.classList.contains(params.activeClass) &&
    !menu.classList.contains(params.hiddenClass)
    ){
    menu.classList.add(params.activeClass);
    document.body.style.overflow = 'hidden';
    btn.setAttribute('aria-label', 'Закрыть главное меню');
    } else {
    menu.classList.add(params.hiddenClass);
    document.body.removeAttribute('style');
    btn.classList. toggle (params.hiddenClass);
    btn.setAttribute('aria-label', 'Открыть главное меню');
    }

  }

  menu.addEventListener("animationend", function () {
    if (this.classList.contains(params.hiddenClass)) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      btn.classList.remove (params.hiddenClass);
    }
  });

  btn.addEventListener("click", window.debounce(onBtnClick, 500));

  links.forEach((link) => {
    link.addEventListener("click", window.debounce(onBtnClick, 500))
  });
}

// здесь мы вызываем функцию и передаем в нее классы наших элементов
setBurger({
  btnClass: "burger", // класс бургера
  menuClass: "menu-wrap", // класс меню
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed", // класс закрывающегося состояния (удаляется сразу после закрытия)
  linksClass: "js-menu-links"
});




// select
const element = document.querySelector('.js-choice');
const choices = new Choices(element, {
    searchEnabled: false ,
    itemSelectText: '' ,
    placeholder: true
});

// tabs

$(document).ready(function(){

  $('body').on('click','.tab-nav a',function(){
    $('.tab-nav a').removeClass('active');
    $(this).addClass('active');
    var href = $(this).attr('href');
    $('.tab-pane').removeClass('active').removeClass('in');
    var id = $(href).addClass('active');
    setTimeout(function(){
      $(href).addClass('in');
    }, 200);
    return false;
  });
});



// accordion

(() => {
  new Accordion(".js-accordion-container", {
    openOnInit: [0]
  });
})();


// tooltip

(() => {
  tippy('.js-projects-btn', {
    theme:'violet' ,
  });
})();



