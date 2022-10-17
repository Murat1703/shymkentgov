let burger = document.querySelector('.menu-burger');
let mobileMenu = document.querySelector('.mobile-menu-container');
let burgerContainer = document.querySelector('.burger-container');
let searchBtn = document.querySelector('.search-btn');
let inputBtn = document.querySelector('.input-search');
let bodyLck = document.querySelector('body');
burger.addEventListener('click', function()
	{
		burgerContainer.classList.toggle('active');
        mobileMenu.classList.toggle('active');
		bodyLck.classList.toggle('lock');
	});
searchBtn.addEventListener('click', function()
    {
        inputBtn.style.display = "block";
        searchBtn.classList.add('hide');
    })  
    window.addEventListener('click', e => { // при клике в любом месте окна браузера
      const target = e.target // находим элемент, на котором был клик
      if (!target.closest('.input-search') && !target.closest('.search-btn')) { // если этот элемент или его родительские элементы не окно навигации и не кнопка
        inputBtn.style.display = "none"; // то закрываем окно навигации, удаляя активный класс
        searchBtn.classList.remove('hide');
      }
    })
  

