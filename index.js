//Main
let focus_time = 25;
let short_break_time = 5;
let long_break_time = 15;
let interval = 2;

var seconds = 25;
var start_count = false;
function Count() {//-----------------------------------Raw{
    if (seconds == 0){
        clearInterval(start);
    }
    document.getElementById("Timer").innerHTML = seconds;
    console.log(seconds);
    seconds -= 1;
}
document.getElementById("Start").onclick = function(){
    if (start_count == false)
    {
        start = setInterval(Count,1000);
        start_count = true;
    }
    else
    {
        start_count = false;
        clearInterval(start);
    }
}


//Setting
function Open_setting()
{
    document.getElementById("Setting_box").style.display = "block";
    document.getElementById("Count_box").style.display = "none";
}
function Get_value_time()
{
    focus_time = document.getElementById("Setting_focus").value;
    console.log(focus_time);
    short_break_time = document.getElementById("Setting_shortbreak").value;
    console.log(short_break_time);
    long_break_time = document.getElementById("Setting_longbreak").value;
    console.log(long_break_time);
    interval = document.getElementById("setting_box_input_interval").value;
    console.log(interval);
}
