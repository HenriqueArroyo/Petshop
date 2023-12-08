class Navbar {
    constructor (menuHb, header2, ) {
        this.menuHb = document.querySelector(menuHb);
        this.header2  = document.querySelector(header2 );
        this.activeClass = "active";
 
    }

addClickEvent() {
    this.menuHb.addEventListener("click", () => console.log("Hey"));
    
}

 init() {
    if(this.menuHb) {
     this.addClickEvent();

    }
    return this;
 }
}

const hbNavbar = new HbNavbar (
   ".menuHb",
   ".header2",
   ".header2 a",
   );
hbNavbar.init();