document.getElementById("button1").addEventListener("click", function() {
    showMessage("Prisijungimas ir registracija", "blue");
});

document.getElementById("button2").addEventListener("click", function() {
    showMessage("Problemu rušis", "green");
});

function showMessage(message, color) {
    const messageDiv = document.getElementById("message");
    messageDiv.innerText = message;
    messageDiv.style.backgroundColor = color;
    messageDiv.style.color = "#fff";
    messageDiv.style.padding = "10px";
    messageDiv.style.marginTop = "20px";
    messageDiv.style.borderRadius = "5px";
}
