$(document).ready(function() {
  $("#cont").children("div").hide();
  $("#pag1").show();
  $("tr:odd").css("background-color", "#00FF40");
  $("tr:even").css("background-color", "#FA58F4");
  $("tr:nth-child(1)").css("background-color", "#cccccc");
  $("td:nth-child(1)").css("background-color", "#cccccc");
  $("th:nth-child(1)").css("background-color", "#cccccc");
  $("#bot1").css("background-color", "yellow");
  $("#bot2").css("background-color", "white");
  $("#bot3").css("background-color", "white");
  $("#bot3").css("background-color", "white");
  $("#sel1").css("background-color", "red");

  $("button.no_back").click(function() {
    $(this).parent().parent().hide();
  });

  $("button.show_hidden").click(function() {
    $(this).parent().parent().siblings().show();
  });

  $("#bot1").click(function() {
    $("#cont").children("div").hide();
    $("#pag1").show();
    $("#bot1").css("background-color", "yellow");
    $("#bot2").css("background-color", "white");
    $("#bot3").css("background-color", "white");
    $("#bot4").css("background-color", "white");
    $("#sel1").css("background-color", "red");
    $("#sel2").css("background-color", "white");
    $("#sel3").css("background-color", "white");
    $("#sel4").css("background-color", "white");
  });

  $("#bot2").click(function() {
    $("#cont").children("div").hide();
    $("#pag2").show();
    $("#bot2").css("background-color", "yellow");
    $("#bot1").css("background-color", "white");
    $("#bot3").css("background-color", "white");
    $("#bot4").css("background-color", "white");
    $("#sel2").css("background-color", "red");
    $("#sel1").css("background-color", "white");
    $("#sel3").css("background-color", "white");
    $("#sel4").css("background-color", "white");
  });

  $("#bot3").click(function() {
    $("#cont").children("div").hide();
    $("#pag3").show();
    $("#bot3").css("background-color", "yellow");
    $("#bot1").css("background-color", "white");
    $("#bot2").css("background-color", "white");
    $("#bot4").css("background-color", "white");
    $("#sel3").css("background-color", "red");
    $("#sel1").css("background-color", "white");
    $("#sel2").css("background-color", "white");
    $("#sel4").css("background-color", "white");
  });

  $("#bot4").click(function() {
    $("#cont").children("div").hide();
    $("#pag4").show();
    $("#bot4").css("background-color", "yellow");
    $("#bot1").css("background-color", "white");
    $("#bot2").css("background-color", "white");
    $("#bot3").css("background-color", "white");
    $("#sel4").css("background-color", "red");
    $("#sel1").css("background-color", "white");
    $("#sel2").css("background-color", "white");
    $("#sel3").css("background-color", "white");
  });
});