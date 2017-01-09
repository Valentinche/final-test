"use strict";
$(document).ready(function () {
    $.getJSON("js/kids.json", function (kids) {
        window.kids = kids;
        searchByText("");
        render(kids);
        console.log(kids.length);
    });

    $("#search").keyup(function (evt) {
        var searchTerm = $(this).val();
        searchByText(searchTerm);
    });

    $("#byAge").click(function () {
        sortByField("age");
    });
    $("#byName").click(function () {
        sortByField("name");
    });
    $("#byGame").click(function () {
        sortByField("game");
    })

});

var template = '<div class="kid">\
<div class="panel panel-info">\
    <div class="panel-heading">\
    <h3>{name}</h3>\
    </div>\
    <div class="panel-body">\
    <div class="col-sm-4">\
    <img class="img-responsive" src="img/{photo}">\
    </div>\
    <div class="col-sm-8">\
    <ul>\
    <li><h5>Години: {age}</h5></li>\
<li><h5>Любим цвят: {color}</h5></li>\
<li><h5>Любима игра: {game}</h5></li>\
<li><h5>Любима храна: {food}</h5></li>\
</ul>\
</div>\
</div>\
</div>\
</div>';
function render(kids) {
    $("#kids").empty();            //children(".kid").remove();
    $.each(kids, function (k, kid) {
        var rendered = template.replace("{name}", kid.name)
            .replace("{photo}", kid.photo)
            .replace("{age}", kid.age)
            .replace("{color}", kid.color)
            .replace("{game}", kid.game)
            .replace("{food}", kid.food);
        $("#kids").append(rendered);

    })
}
function searchByText(text) {
    var filtered = kids;
    if (text.length > 0) {
        filtered = kids.filter(function (kid) {
            return JSON.stringify(kid).toLowerCase().indexOf(text.toLowerCase()) > 0;
        });
    }

    window.filtered = filtered;
    render(filtered);
}

function sortByField(fieldName) {
    var sorted = filtered.sort(function (kid1, kid2) {

        var field1 = kid1[fieldName];
        var field2 = kid2[fieldName];
        if (typeof field1 == "number") {
            return field1 - field2;
        } else { //string assumed
            return field1.localeCompare(field2);
        }
    });
    render(sorted);
}

