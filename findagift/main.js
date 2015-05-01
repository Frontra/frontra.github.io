var genderDropdown;
var genderOptions;
var frontFilterOverlay;


$(function(){
    genderDropdown = $("#dd-gender");
    genderOptions = $("#options-gender");
    frontFilterOverlay = $("#front-filter-overlay");

    genderDropdown.click(openGenderOptions);
    frontFilterOverlay.click(closeAllOptions);
});

function openGenderOptions() {
    var pos = genderDropdown.position();
    frontFilterOverlay.fadeIn(600);
    genderOptions.css({
        left: pos.left
    }).addClass("show");
}

function closeGenderOptions() {
    genderOptions.removeClass("show");
    setTimeout(function(){
        genderOptions.css({
            left: "-1000px"
        })
    }, 300);
    frontFilterOverlay.fadeOut(600);
}

function closeAllOptions() {
    closeGenderOptions();
}
