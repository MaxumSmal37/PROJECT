
/*const navBar = document.getElementsByClassName('.navbar')

window.navScroll = () =>
{
 
  if (document.body.scrollTop >= 200 || document.documentElement.scrollTop >= 200) 
  {
    navBar.classList.add("nav-red");
    navBar.classList.remove("nav-black");
  }
  else {
    navBar.classList.add("nav-black");
    navBar.classList.remove("nav-red");
}
};*/
$(window).scroll(function () {
  var sc = $(window).scrollTop()
 if (sc > 50) {
     $("#header-sroll").addClass("grey")
 } else {
     $("#header-sroll").removeClass("grey")
 }
});