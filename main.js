let scrollUp = () => {
  document.documentElement.scrollTop = -10000000;
};

let navBarHandle = (e) => {
  let navList = document.querySelector(".navbar__list");
  let navBut = document.querySelector(".navbar__button");
  navList.classList.toggle("active");
  navBut.classList.toggle("active1");
};
window.onscroll = (e) => {
  console.log(e);
  let navList = document.querySelector(".navbar__list");
  let navBut = document.querySelector(".navbar__button");
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    navList.classList.remove("active");
    navBut.classList.remove("active1");
  }
};
