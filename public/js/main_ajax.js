//a1721956201bd612760834ddeb2d039e
//https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric
// https://api.openweathermap.org/data/2.5/forecast?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric

// $.ajax({
//     url: "../json/city.json",
//     type: "get",
//     dataType: "json",
//     success: function (data) {
//         console.log(data);
//     },
//     error: function (xhr, status, error) {
//         console.log(xhr, status, error);
//     }
// });

$.ajax({
    type: "get",
    url: "https://api.openweathermap.org/data/2.5/weather?id=1835848&appid=a1721956201bd612760834ddeb2d039e&units=metric",
    data: {
        id: "1835848",
        appid: "a1721956201bd612760834ddeb2d039e",
        units: "metric"
    },
    dataType: "json",
    success: function (data) {
        console.log(data);
        var imgRoot = "http://openweathermap.org/img/w/";
        var imgSrc = imgRoot + data.weather[0].icon + ".png";
        var html = '';
        html += '<div><img src="' + imgSrc + '"></div>';
        html += '<h1>서울날씨: ' + data.main.temp + '도</h1>';
        $("body").append(html);
    }
});