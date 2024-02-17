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


//Check error input---------------------------------------------------------------
function Get_value_time()
{
    input1 = document.getElementById("Setting_focus").value;
    input2 = document.getElementById("Setting_shortbreak").value;
    input3 = document.getElementById("Setting_longbreak").value;
    input4 = document.getElementById("setting_box_input_interval").value;
    console.log('ad');
    if (input1 == '')
    {
        document.getElementById("Error_nofi").innerHTML = "You have not entered anything in the Focus box";
    }
    else if (input1 > 1000)
    {
        document.getElementById("Error_nofi").innerHTML = "Bro, Your exam on tommorow?";
    }
    else if (input2 == '' || input3 == '')
    {
        document.getElementById("Error_nofi").innerHTML = "You have not entered anything in the Break box";
    }
    else if (input4 == '')
    {
        document.getElementById("Error_nofi").innerHTML = "You have not entered anything in the Interval box";
    }
    else if (input1 < 0 || input2 < 0 || input3 < 0 || input4 < 0)
    {
        document.getElementById("Error_nofi").innerHTML = "Bro going to learn how to turn back time?";
    }
    else if (input2 == 0 || input3 == 0 || input4 == 0)
    {
        document.getElementById("Error_nofi").innerHTML = "Bro have whole life to study,at least take a rest!";
    }
    else{
        focus_time = input1;
        short_break_time = input2;
        long_break_time =  input3;
        interval = input4;
        document.getElementById("Setting_box").style.display = "none";
        document.getElementById("Count_box").style.display = "block";
        //When finish setting time, back the main with Focus actived with new time.
        document.getElementById("Focus").className = "cycle_active";
        document.getElementById("Short_break").className = "cycle";
        document.getElementById("Long_break").className = "cycle";
        seconds = focus_time;
        document.getElementById("Timer").innerHTML = seconds;
    }
}
//-------------------------------------------------------------------

//Switch counter
function switch_focus() 
{
    document.getElementById("Focus").className = "cycle_active";
    document.getElementById("Short_break").className = "cycle";
    document.getElementById("Long_break").className = "cycle";
    seconds = focus_time;
    document.getElementById("Timer").innerHTML = seconds;
}
function switch_short() 
{
    document.getElementById("Focus").className = "cycle";
    document.getElementById("Short_break").className = "cycle_active";
    document.getElementById("Long_break").className = "cycle";
    seconds = short_break_time;
    document.getElementById("Timer").innerHTML = seconds;
}
function switch_long() 
{
    document.getElementById("Focus").className = "cycle";
    document.getElementById("Short_break").className = "cycle";
    document.getElementById("Long_break").className = "cycle_active";
    seconds = long_break_time;
    document.getElementById("Timer").innerHTML = seconds;
}