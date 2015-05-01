var genderDropdown;
var ageDropdown;
var priceDropdown;
var genderOptions;
var ageOptions;
var priceOptions;
var frontFilterOverlay;


$(function(){
    genderDropdown =     $("#dd-gender");
    ageDropdown =        $("#dd-age");
    priceDropdown =      $("#dd-price");
    genderOptions =      $("#options-gender");
    ageOptions =         $("#options-age");
    priceOptions =       $("#options-price");
    frontFilterOverlay = $("#front-filter-overlay");

    genderDropdown.click(openGenderOptions);
    ageDropdown   .click(openAgeOptions);
    priceDropdown .click(openPriceOptions);
    frontFilterOverlay.click(closeAllOptions);
});

function openGenderOptions() {
    openOptions(genderDropdown, genderOptions);
}

function openAgeOptions() {
    openOptions(ageDropdown, ageOptions);
}

function openPriceOptions() {
    openOptions(priceDropdown, priceOptions);
}

function openOptions(dropdown, options) {
    var pos = dropdown.position();
    frontFilterOverlay.fadeIn(600);
    options.css({
        left: pos.left
    }).addClass("show");
}

function closeAllOptions() {
    genderOptions.removeClass("show");
    ageOptions.removeClass("show");
    priceOptions.removeClass("show");
    frontFilterOverlay.fadeOut(300);
    setTimeout(function(){
        genderOptions.css("left", "-1000px");
        ageOptions.css("left", "-1000px");
        priceOptions.css("left", "-1000px");
    }, 300);
}
