$(document).ready(function() {
    $(".units-btn").on("click", function() {
        $(this).parent().find(".active").toggleClass("active");
        $(this).toggleClass("active");
    
        if ($("#lyserg").hasClass("active")) {
        $(".units").text("μg");
        $("#dose").attr("step", "5");
        } else if ($("#mushy").hasClass("active")) {
        $(".units").text("g");
        $("#dose").attr("step", "1");
        }
    
    });
    
    });
    function calculate() {
    var x1 = document.getElementById("dose").value;
    var x2 = document.getElementById("desired").value;
    var n = document.getElementById("days").value;

    var estimatedDosage = (x1 / 100) * 280.059565 * (Math.pow(n, -0.412565956)) + (x2 - x1);
    // the ternary is because this equation will potentially return a value lower than the last value if the days since is long enough.
    var newAmount = ((estimatedDosage < x2) ? x2 : estimatedDosage);
    document.getElementById("result").value = Math.round(newAmount * 10) / 10; //added rounding
}