// window.addEventListener("scroll", function() {
//     var header = this.document.querySelector(".myNav");
//     header.classList.toggle("sticky", this.window.scrollY > 0);
// });

// var menu = document.querySelector('.menu--icon');
// var nav = document.querySelector('.mobile_nav');
// var cancelmenu = document.querySelector('.cancel-menu');
// menu.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });


// cancelmenu.addEventListener('click', () => {
//     nav.classList.toggle('active');
// });


// Select all elements with the class 'drop-menu'
var dropMenus = document.querySelectorAll('.drop-menu');

// Loop through each dropMenu element
dropMenus.forEach((dropMenu) => {
    dropMenu.addEventListener('click', function() {
        // Remove the 'active' class from all dropMenu elements
        dropMenus.forEach((menu) => {
            menu.classList.remove('active');
        });
        // Toggle the 'active' class on the clicked dropMenu element
        this.classList.toggle('active');
    });
});


// Select all elements with the class 'faq_box__content'
var megaMenu = document.querySelectorAll('.mega-list');

// Loop through each faqBox element
for (var i = 0; i < megaMenu.length; i++) {
    megaMenu[i].addEventListener('click', function () {
        // Toggle the 'active' class on the clicked faqBox element
        this.classList.toggle('show');
    });
}