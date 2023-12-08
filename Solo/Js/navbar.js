class Navbar {
    constructor (menuHb, header2, navLinks ) {
        this.menuHb = document.querySelector(menuHb);
        this.header2  = document.querySelector(header2 );
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
 
    }

    animateLinks() {
        this.navLinks.forEach((link, index) => {
          link.style.animation
            ? (link.style.animation = "")
            : (link.style.animation = `navLinkFade 0.5s ease forwards ${
                index / 7 + 0.3
              }s`);
        });
      }

      handleClick() {
        this.header2.toggle(this.activeClass);
        this.menuHb.toggle(this.activeClass);
        this.animateLinks();
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

const navbar = new Navbar (
   ".menuHb",
   ".header2",
   ".header2 a",
   );
navbar.init();