// script.js

document.addEventListener("DOMContentLoaded", function () {
    // Füge deine JavaScript-Logik hier ein

    // Beispiel: Ändere den Text des Haupttitels nach dem Laden der Seite
    // var mainTitle = document.querySelector("h1");
    // mainTitle.textContent = "";
    
    // Beispiel: Füge eine Klick-Ereignisbehandlung für den Bestätigen-Button hinzu
    // var confirmButton = document.getElementById("confirmButton");
    // confirmButton.addEventListener("click", function () {
        // var selectedDate = document.getElementById("date").value;
        // var selectedTime = document.getElementById("time").value;
        // alert("Termin bestätigt!\nDatum: " + selectedDate + "\nUhrzeit: " + selectedTime);
    // });

    const mailFormElement = document.querySelector('#mail-form');

    function onMailFormSubmit(evt) {
        alert('mail wurde geschickt Danke!');
        // Zuerst sorgen wir dafür, dass der Formular nicht abgeschickt wird.
        evt.preventDefault();

        // Dann erzeugen wir aus dem Fromular ein FormData Objekt.
        const formData = new FormData(mailFormElement);

        // Dann holen wir den Body text und die texte aus den Zusatzfeldern.
        const bodyText = formData.get('body');
        const bodyAdditional1Text = formData.get('date');
        const bodyAdditional2Text = formData.get('time');

        // Hier säubern wir die FormData um nur das nötigste an den MailClient zu schicken.
        formData.delete('date');
        formData.delete('time');

        // Hier erstellen wir den Neuen Body Text und schreiben ihn zurück in die FormData.
        // Das newline Zeichen (\n) wird später zu einer Entity, die der Client interpretieren kann.
        const newBody = `${bodyText}\n${bodyAdditional1Text}\n${bodyAdditional2Text}`;
        formData.set('body', newBody);

        // heri erzeugen wir die URI aus der Formaction und dem Query String.
        const queryString = new URLSearchParams(formData).toString().replace(/\+/g, '%20');
        const url = `${mailFormElement.action}?${queryString}`

        // Zum Schluss schicken wir das Formular mit Hilfe von window.href ab.
        window.location.href = url;
    }

    // Als erstes registrieren wir einen Eventhandler für das Submit Event auf dem Formular.
    mailFormElement.addEventListener('submit', onMailFormSubmit);

});
