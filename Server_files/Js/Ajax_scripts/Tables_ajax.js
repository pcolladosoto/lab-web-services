$(document).ready(function() {
  $("#pag1").show();
  get_n_create_table(1);
  $("#bot1").css("background-color", "yellow");
  $("#bot2").css("background-color", "white");
  $("#bot3").css("background-color", "white");
  $("#bot3").css("background-color", "white");
  $("#sel1").css("background-color", "red");

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
    get_n_create_table(this.id.substr(3));
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
    get_n_create_table(this.id.substr(3));
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
    get_n_create_table(this.id.substr(3));
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
    get_n_create_table(this.id.substr(3));
  });
});

function style_me_up(n) {
  $("#tab" + n + " tr:odd").css("background-color", "#00FF40");
  $("#tab" + n + " tr:even").css("background-color", "#FA58F4");
  $("#tab" + n + " tr:nth-child(1)").css("background-color", "#cccccc");
  $("#tab" + n + " td:nth-child(1)").css("background-color", "#cccccc");
  $("#tab" + n + " th:nth-child(1)").css("background-color", "#cccccc");
  add_functionality();
}

function add_functionality() {
  $("button.no_back").click(function() {
    $(this).parent().parent().hide();
  });

  $("button.show_hidden").click(function() {
    $(this).parent().parent().siblings().show();
  });
}
