// Code will only run when the DOM is ready for the JS to enact upon "https://learn.jquery.com/using-jquery-core/document-ready/"
$(document).ready(function () {

// 1. The current date is displayed at the top of the calendar 
    $("#currentDay").text(moment().format("dddd MMM Do YYYY"));
    // var todaydate = $("#currentDay").text(moment().format("dddd MMM Do YYYY"));
    // console.log(todaydate);

// 2. When the saveBtn is clicked, the text event is saved to lorage storage 
    $(".saveBtn").on("click", function() {
        // console.log(this);
        var text = $(this).siblings(".textinput").val();
        var time = $(this).siblings(".timestamp").text();

        localStorage.setItem("text, time")
    })

// 3. The text event stays when the page is reloaded
    var savetextevent = function () {
        if (!localStorage.getItem()) {
            return "text, time";
        }
    }

    // local storage
    $("#9A .textinput").val(localStorage.getItem("9A"));
    $("#10A .textinput").val(localStorage.getItem("10A"));
    $("#11A .textinput").val(localStorage.getItem("11A"));
    $("#12P .textinput").val(localStorage.getItem("12P"));
    $("#1P .textinput").val(localStorage.getItem("1P"));
    $("#2P .textinput").val(localStorage.getItem("2P"));
    $("#3P .textinput").val(localStorage.getItem("3P"));
    $("#4P .textinput").val(localStorage.getItem("4P"));
    $("#5P .textinput").val(localStorage.getItem("5P"));

// 4. Each block is color coded by past, present, and future
    function timecolors() {
        // sets current time
        var rightnow = moment().format("H");
        console.log (rightnow);
    
        $(".timeblock").each(function () {

            if (moment().isAfter(rightnow)) {
                $(this).addClass("future");
                $(this).removeClass("past");
                $(this).removeClass("present");
            }
            if (moment().isBefore(rightnow)) {
                $(this).addClass("past");
                $(this).removeClass("present");
                $(this).removeClass("future");
            }
            else {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
        })
    }

    timeblockTracker(); 
})