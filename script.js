function startTime()
{
  var tm=new Date();
  var h=tm.getHours();
  var m=tm.getMinutes();
  var s=tm.getSeconds();
  m=checkTime(m);
  s=checkTime(s);
  document.getElementById('txt').innerHTML=h+":"+m+":"+s;
  t=setTimeout('startTime()',500);

  //Будильник с установкой времени
  alarm(h, m, s);
}

function checkTime(i)
{
  if (i<10)
  {
      i="0" + i;
  }
  return i;
}

function alarm(a,b,c){
  var value_hour = document.getElementById("hour").value;
  var value_minute = document.getElementById("minute").value;
  var value_second = document.getElementById("second").value;
  if (+value_hour === +a && +value_minute === +b && +value_second === +c){
    alert("Будильник по определенному времени");
  }
}

//Будильник через промежуток времени
function alarm_m(){
  var value_hour_m = document.getElementById("hour_m").value;
  var value_minute_m = document.getElementById("minute_m").value;
  var value_second_m = document.getElementById("second_m").value;
  var time_out = +value_hour_m * 3600 * 1000 + +value_minute_m * 60 * 1000 + +value_second_m * 1000;
  t = setTimeout('alert("Будильник через интервал времени")', time_out);
}
