//show color option div when click on
    $(".gear-check").click(
        function() {
            $(".color-option").fadeToggle();
        });

$(".btn-contact").click(
    function () {
        alert("We Are Waiting You +963951320669");
    }
);
//change Theme color on click
$(".color-option ul li")
    .eq(0).css("backgroundColor", "#e41b17").end()
    .eq(1).css("backgroundColor", "#e426d5").end()
    .eq(2).css("backgroundColor", "#ffd500").end()
    .eq(3).css("backgroundColor", " #0099aaff");