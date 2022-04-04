// 1. The current date is displayed at the top of the calendar 
$("#currentDay").text(moment().format('dddd MMM Do YYYY'));

// 2. Each block is color coded by past, present, and future


// 3. When the saveBtn is clicked, the text event is saved to lorage storage 
$(".saveBtn").on("click", function() {
    var text = $(this).siblings(".textinput").val();
    var time = $(this).parent().attr("id");
    localStorage.setItem(text, time);
})

// 4. The text event stays when the page is reloaded