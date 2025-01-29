document.addEventListener("DOMContentLoaded", () => {
  const clockElement = document.getElementById("clock");
  const formatToggle = document.getElementById("formatToggle");
  const colorPicker = document.getElementById("colorPicker");
  const fontSizeInput = document.getElementById("fontSize");
  const alarmTimeInput = document.getElementById("alarmTime");
  const setAlarmButton = document.getElementById("setAlarm");

  let is24Hour = localStorage.getItem("is24Hour") === "true";
  let clockColor = localStorage.getItem("clockColor") || "#000";
  let fontSize = localStorage.getItem("fontSize") || "30";
  let alarms = JSON.parse(localStorage.getItem("alarms")) || [];

  // Create elements for alarm message and alarm list
  const alarmMessage = document.createElement("div");
  alarmMessage.id = "alarmMessage";
  alarmMessage.style.display = "none";
  alarmMessage.style.color = "red";
  alarmMessage.style.fontSize = "20px";
  alarmMessage.style.marginTop = "10px";
  alarmMessage.textContent = "⏰ Alarm! Time to wake up!";
  document.body.appendChild(alarmMessage);

  const alarmList = document.createElement("div");
  alarmList.id = "alarmList";
  alarmList.style.marginTop = "20px";
  document.body.appendChild(alarmList);

  formatToggle.checked = is24Hour;
  colorPicker.value = clockColor;
  fontSizeInput.value = fontSize;

  clockElement.style.color = clockColor;
  clockElement.style.fontSize = `${fontSize}px`;

  const updateClock = () => {
      const now = new Date();
      let hours = now.getHours();
      let minutes = now.getMinutes();
      let seconds = now.getSeconds();

      if (!is24Hour && hours > 12) hours -= 12;

      const formattedTime = `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
      clockElement.textContent = formattedTime;

      // Check alarms
      const currentTime = `${String(now.getHours()).padStart(2, "0")}:${String(now.getMinutes()).padStart(2, "0")}`;
      if (alarms.includes(currentTime)) {
          alarmMessage.style.display = "block"; // Show the alarm message
          setTimeout(() => {
              alarmMessage.style.display = "none"; // Hide after 10 seconds
          }, 10000);

          // Remove triggered alarm
          alarms = alarms.filter(alarm => alarm !== currentTime);
          localStorage.setItem("alarms", JSON.stringify(alarms));
          updateAlarmList();
      }
  };

  const updateAlarmList = () => {
      alarmList.innerHTML = "<strong>Active Alarms:</strong><br>";
      if (alarms.length === 0) {
          alarmList.innerHTML += "No alarms set.";
      } else {
          alarms.forEach(alarm => {
              const alarmItem = document.createElement("div");
              alarmItem.textContent = `⏰ ${alarm}`;
              
              // Add delete button
              const deleteButton = document.createElement("button");
              deleteButton.textContent = "❌";
              deleteButton.style.marginLeft = "10px";
              deleteButton.onclick = () => {
                  alarms = alarms.filter(a => a !== alarm);
                  localStorage.setItem("alarms", JSON.stringify(alarms));
                  updateAlarmList();
              };

              alarmItem.appendChild(deleteButton);
              alarmList.appendChild(alarmItem);
          });
      }
  };

  const savePreferences = () => {
      localStorage.setItem("is24Hour", is24Hour);
      localStorage.setItem("clockColor", clockColor);
      localStorage.setItem("fontSize", fontSize);
      localStorage.setItem("alarms", JSON.stringify(alarms));
  };

  formatToggle.addEventListener("change", () => {
      is24Hour = formatToggle.checked;
      savePreferences();
  });

  colorPicker.addEventListener("input", () => {
      clockColor = colorPicker.value;
      clockElement.style.color = clockColor;
      savePreferences();
  });

  fontSizeInput.addEventListener("input", () => {
      fontSize = fontSizeInput.value;
      clockElement.style.fontSize = `${fontSize}px`;
      savePreferences();
  });

  setAlarmButton.addEventListener("click", () => {
      const newAlarm = alarmTimeInput.value;
      if (newAlarm && !alarms.includes(newAlarm)) {
          alarms.push(newAlarm);
          savePreferences();
          updateAlarmList();
          alert(`Alarm set for ${newAlarm}`);
      } else {
          alert("Invalid or duplicate alarm time.");
      }
  });

  setInterval(updateClock, 1000);
  updateClock(); // Initial update
  updateAlarmList(); // Show existing alarms on page load
});
