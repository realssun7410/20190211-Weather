//a1721956201bd612760834ddeb2d039e
//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric
// https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric

var apiURL = "https://api.openweathermap.org/data/2.5/";
var appid = "a1721956201bd612760834ddeb2d039e";
var units = "metric";
var files = ["weather", "forecast"];
var option = {
    appid: appid,
    units: units
};

//modal init
cityInit();

function cityInit() {
    $("#modal").show();
}
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
        "z-index": 10
    });
    $(this).css({
        "background-color": "#666",
        "color": "#fff",
        "border-top": "5px solid #666",
        "border-right": "5px solid #666",
        "border-bottom": "5px solid #fff",
        "border-left": "5px solid #666",
        "z-index": 10
    });
    $(".cont").hide(0);
    $(".cont").eq(n).show(0);

});
$(".nav").eq(0).trigger("click");

$("#city").change(function () {
    option.id = $(this).val();
    var sendData = {
        type: "get",
        dataType: "json",
        data: option,
    }
    sendData.url = apiURL + files[0];
    sendData.success = dailyInit;
    $.ajax(sendData);
    sendData.url = apiURL + files[1];
    sendData.success = weeklyInit;
    $.ajax(sendData);
});

function dailyInit(data) {
    console.log(data);
    $("#modal").hide();
    var $daily = $("#daily");
    var src = "../img/icon/" + data.weather[0].icon + ".png";
    var temp = data.main.temp + " ℃";
    var temp2 = data.main.temp_max + " ℃ /" + data.main.temp_min + " ℃ /";
    var html = '';
    html += '<ul>';
    html += '<li class="icon"><img src="' + src + '" class="img"></li>';
    html += '<li class="city_name">' + $("#city > option:selected").text() + '</li>';
    html += '<li class="w3-center"><button class="w3-button w3-indigo" onclick="cityInit();">도시선택</button></li>';
    html += '<li class="temp">현재평균온도: <b>' + temp + '</b></li>';
    html += '<li class="temp2">최고/최저온도: <b>' + temp2 + '</b></li>';
    html += '</ul>';
    $daily.html(html);
};

function weeklyInit(data) {
    console.log(data);
    $("#modal").hide();
    var src, temp, temp2, date;
    var $weekly = $("#weekly");
    var html = '<div>';
    for (var i in data.list) {
        src = "../img/icon/" +data.weather[0].icon + ".png";
        date =data.list[i].dt_text;
        temp = data.list[i].main.temp+ " ℃";
        temp2 = data.list[i].main.temp_max+ " ℃ /" + data.list[i].main.temp_max + " ℃ /";
        html += '<ul>';
        html += '<li><img= src="'+src+'" class ="img"></li>';
        html += '<li>';
        html += '<div>예보날짜: '+date+'</div>';
        html += '<div>현재온도: '+temp+'</div>';
        html += '<div>최고/최저온도: '+temp2+'</div>';
        html += '</li>';
        html += '</ul>';
    }
    html += '</div>';
    $(this).
}