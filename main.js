const scrollUp = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollUp);
    window.scrollTo(0, c - c / 10);
  }
};

const navBarHandle = (e) => {
  const navList = document.querySelector(".navbar__list");
  const navBut = document.querySelector(".navbar__button");
  navList.classList.toggle("active");
  navBut.classList.toggle("active1");
};
window.onscroll = (e) => {
  console.log(e);
  const navList = document.querySelector(".navbar__list");
  const navBut = document.querySelector(".navbar__button");
  if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
    navList.classList.remove("active");
    navBut.classList.remove("active1");
  }
};

const handleClose = () => {
  const navList = document.querySelector(".navbar__list");
  const navBut = document.querySelector(".navbar__button");
  navList.classList.remove("active");
  navBut.classList.remove("active1");
};
