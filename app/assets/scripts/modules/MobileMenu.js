import $ from 'jquery';

class MobileMenu {
    constructor() {
        this.siteHeader = $(".site-header");
        this.menuIcon = $(".site-header__menu-icon");
        this.menuContent = $(".site-header__menu-content");
        this.events();
    }  
    events(){
        this.menuIcon.click(this.toggleTheMenu.bind(this));

    }
    toggleTheMenu(){
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }
}

export default MobileMenu;













/*
steps b4 8mins but deleted because of spaghetti


import $ from 'jquery';

class MobileMenu {
    constructor() {
        $(".site-header__menu-icon").click(function(){
            console.log("the top right icon was clicked")
        })
    }
}

export default MobileMenu
*/
