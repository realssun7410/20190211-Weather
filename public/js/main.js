//a1721956201bd612760834ddeb2d039e
//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric
// https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric

var apiURL = "https://api.openweathermap.org/data/2.5/";
var appid = "a1721956201bd612760834ddeb2d039e";
var units = "metric";
var files = ["weather", "forecast"];

//modal init
$.ajax({
    type: "get",
    url: "../json/city.json",
    dataType: "json",
    success: function (data) {
        var html = '<option value="">도시를 선택하세요.</option>';
        // console.log(data.cities.length);
        for (var i in data.cities) {
            html += '<option value="' + data.cities[i].id + '">' + data.cities[i].name + '</option>';
        }
        console.log(html);
        $("#city").html(html);
    }
});

$(".nav").click(function () {
    var n = $(this).index();
    $(".nav").css({
        "background-color": "#fff",
        "color": "#222",
        "border-top": "5px solid #fff",
        "border-right": "5px solid #fff",
        "border-bottom": "5px solid #666",
        "border-left": "5px solid #fff",
        "z-index":10
    });
    $(this).css({
        "background-color": "#666",
        "color": "#fff",
        "border-top": "5px solid #666",
        "border-right": "5px solid #666",
        "border-bottom": "5px solid #fff",
        "border-left": "5px solid #666",
        "z-index":10
    });
    $(".cont").hide(0);
    $(".cont").eq(n).show(0);

});
$(".nav").eq(0).trigger("click");