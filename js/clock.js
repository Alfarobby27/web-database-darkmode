const currentTime = () => {
	const Clock = document.querySelector("h2");

    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    var day = date.toLocaleString("id-ID", { weekday: "long" });
    var currentDate = date.toLocaleDateString("id-ID");
  
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
  
    var time = hours + ":" + minutes + ":" + seconds;
    var date = day + ", " + currentDate;
  
    Clock.innerHTML = date + " - " + time;
};

currentTime();
setInterval(currentTime, 1000);