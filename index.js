//Main//
let focus_time = 25;
let short_break_time = 5;
let long_break_time = 15;
let interval = 4;
var interval_temp = interval;
var start_count = false;
var in_count = "focus";
//Default counter in first_time_page//
var minutes = focus_time;
var seconds = minutes * 60;
function Count() {
  if (seconds == 0) {
    Alarm.play();
    clearInterval(start);
    if (in_count == "focus") {
      if (interval_temp != 1) {
        Switch_short();
        interval_temp -= 1;
      } else {
        Switch_long();
      }
    } else if (in_count == "short") {
      Switch_focus();
    } else {
      Switch_focus();
      interval_temp = interval;
    }
  } else {
    seconds -= 1;
  }
  minutes_on_screen = Math.floor(seconds / 60);
  seconds_on_screen = seconds % 60;
  if (seconds_on_screen >= 10) {
    document.getElementById(
      "Timer"
    ).innerHTML = `${minutes_on_screen}:${seconds_on_screen}`;
  } else {
    document.getElementById(
      "Timer"
    ).innerHTML = `${minutes_on_screen}:0${seconds_on_screen}`;
  }
}
document.getElementById("Start").onclick = function (minutes) {
  if (start_count == false) {
    document.getElementById("Start_text").innerHTML = "Pause";
    start = setInterval(Count, 1000);
    start_count = true;
  } else {
    document.getElementById("Start_text").innerHTML = "Start";
    start_count = false;
    clearInterval(start);
  }
};

//Setting
function Open_setting() {
  document.getElementById("Setting_box").style.display = "block";
  document.getElementById("Count_box").style.display = "none";
}

//Check error input---------------------------------------------------------------
function Get_value_time() {
  input1 = document.getElementById("Setting_focus").value;
  input2 = document.getElementById("Setting_shortbreak").value;
  input3 = document.getElementById("Setting_longbreak").value;
  input4 = document.getElementById("setting_box_input_interval").value;
  if (input1 == "" || input1 == 0) {
    document.getElementById("Error_nofi").innerHTML =
      "You have not entered anything in the Focus box";
  } else if (input1 > 1000) {
    document.getElementById("Error_nofi").innerHTML =
      "Bro, Your exam on tommorow?";
  } else if (input2 == "" || input3 == "" || input2 == 0 || input3 == 0) {
    document.getElementById("Error_nofi").innerHTML =
      "You have not entered anything in the Break box";
  } else if (input4 == "" || input4 == 0) {
    document.getElementById("Error_nofi").innerHTML =
      "You have not entered anything in the Interval box";
  } else if (input1 < input2 || input1 < input3) {
    document.getElementById("Error_nofi").innerHTML = "Bro too lazy";
  } else if (input1 < 0 || input2 < 0 || input3 < 0 || input4 < 0) {
    document.getElementById("Error_nofi").innerHTML =
      "Bro going to learn how to turn back time?";
  } else if (input2 == 0 || input3 == 0 || input4 == 0) {
    document.getElementById("Error_nofi").innerHTML =
      "Bro have whole life to study,at least take a rest!";
  } else {
    document
      .getElementById("Ringtone_input")
      .addEventListener("change", Change_ringtone);
    focus_time = input1;
    short_break_time = input2;
    long_break_time = input3;
    interval = input4;
    document.getElementById("Setting_box").style.display = "none";
    document.getElementById("Count_box").style.display = "block";
    //When finish setting time, back the main with Focus actived with new time.
    document.getElementById("Focus").className = "cycle_active";
    document.getElementById("Short_break").className = "cycle";
    document.getElementById("Long_break").className = "cycle";
    minutes = focus_time;
    seconds = minutes * 60;
    document.getElementById("Start_text").innerHTML = "Start";
    document.getElementById("Timer").innerHTML = `${minutes}:00`;
    if (start_count == true) {
      clearInterval(start);
      start_count = false;
    }
  }
}
//-------------------------------------------------------------------

//Switch counter
function Switch_focus() {
  document.getElementById("Focus").className = "cycle_active";
  document.getElementById("Short_break").className = "cycle";
  document.getElementById("Long_break").className = "cycle";
  minutes = focus_time;
  seconds = minutes * 60;
  if (start_count == true) {
    clearInterval(start);
    start_count = false;
  }
  document.getElementById("Start_text").innerHTML = "Start";
  document.getElementById("Timer").innerHTML = `${minutes}:00`;
  in_count = "focus";
}
function Switch_short() {
  document.getElementById("Focus").className = "cycle";
  document.getElementById("Short_break").className = "cycle_active";
  document.getElementById("Long_break").className = "cycle";
  minutes = short_break_time;
  seconds = minutes * 60;
  if (start_count == true) {
    clearInterval(start);
    start_count = false;
  }
  document.getElementById("Start_text").innerHTML = "Start";
  document.getElementById("Timer").innerHTML = `${minutes}:00`;
  in_count = "short";
}
function Switch_long() {
  document.getElementById("Focus").className = "cycle";
  document.getElementById("Short_break").className = "cycle";
  document.getElementById("Long_break").className = "cycle_active";
  minutes = long_break_time;
  seconds = minutes * 60;
  if (start_count == true) {
    clearInterval(start);
    start_count = false;
  }
  document.getElementById("Start_text").innerHTML = "Start";
  document.getElementById("Timer").innerHTML = `${minutes}:00`;
  in_count = "long";
}

//Input_alarm
function Change_ringtone() {
  var audio_input = document.getElementById("Ringtone_input");
  var audio_playing = document.getElementById("Alarm");
  if (audio_input.files && audio_input.files[0]) {
    const reader = new FileReader();
    reader.onload = function (e) {
      audio_playing.src = e.target.result;
    };
    reader.readAsDataURL(audio_input.files[0]);
  }
  document.getElementById("Ringtone_text").innerHTML = "Imported";
}
