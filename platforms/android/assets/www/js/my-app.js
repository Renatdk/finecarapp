// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});


// имитируем position: fixed;
var pickerModal = document.getElementById('picker-modal');

// обрабатываем события touch и scroll
window.ontouchstart = function(e) {
    if (event.target !== pickerModal){
        pickerModal.style = "";
    }
}

window.onscroll = function(){
    var scrollTop = window.scrollY;
    pickerModal.style.bottom = (scrollTop + windowHeight - 260) + 'px';
};