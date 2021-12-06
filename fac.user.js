// ==UserScript==
// @name         FuckAttendanceCheck
// @namespace    https://t.me/Ichinichi
// @version      0.1
// @description  Если вы вертели эти проверки активности
// @author       Ichinichi
// @match        https://*.edu.vsu.ru/html5client/*
// @grant        none
// ==/UserScript==

function autoClick() {
  var elementButton = document.querySelector('[aria-label="Проверка"]');
  if (elementButton != null) {
    console.log("FAC: Button found and clicked");
    elementButton.click();
  } else {
    console.log("FAC: Button not found");
  }
}

window.setInterval(function() {
  autoClick();
}, 5000);