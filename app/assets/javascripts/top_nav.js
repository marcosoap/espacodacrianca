$(document).ready(function() {
  $("nav li.menu").mouseover(function() {
    $(this).find("ul").show();
  });

  $("nav li.menu ul").mouseover(function() {
    $(this).show();
  });

  $("nav li.menu").mouseout(function() {
    $(this).find("ul").hide();
  });


  $("nav li.menu ul").mouseout(function() {
    $(this).hide();
  });
});