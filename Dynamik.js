// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Füge deine JavaScript-Logik hier ein

    // Beispiel: Ändere den Text des Haupttitels nach dem Laden der Seite
    var mainTitle = document.querySelector("h1");
    mainTitle.textContent = "Herzlich willkommen, meine Prinzessin!";
    
    // Beispiel: Füge eine Klick-Ereignisbehandlung für den Bestätigen-Button hinzu
    var confirmButton = document.getElementById("confirmButton");
    confirmButton.addEventListener("click", function () {
        var selectedDate = document.getElementById("date").value;
        var selectedTime = document.getElementById("time").value;
        alert("Termin bestätigt!\nDatum: " + selectedDate + "\nUhrzeit: " + selectedTime);
    });
});
