/**
 * Home
 */
export default function() {
  $(document).on('click', 'header .menu a,.menu-sidebar .menu .top .close', function () {
    $('.menu-sidebar').toggleClass('menu-open');
    return false;
  });
  $(document).on('click', '.menu-sidebar .menu .body > ul > li > a', function () {
    $(this).closest('li').toggleClass('open');
    $(this).closest('li').find('ul').slideToggle();
    return false;
  });
}