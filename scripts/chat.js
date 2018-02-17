document.getElementById("container").scrollTop = document.getElementById("container").scrollHeight;
document.getElementById("input-box").focus();

function sendMessage() {
    var container = document.getElementById("container");
    var inputBox = document.getElementById("input-box");

    if(inputBox.value === "") {
        return;
    }

    var rightMessage = document.getElementsByClassName("box right")[0];
    var newMessage = document.createElement("DIV");
    newMessage.innerHTML = rightMessage.innerHTML;
    newMessage.className = rightMessage.className;

    var textNode = document.createTextNode(inputBox.value);
    var messageBox = newMessage.getElementsByClassName("chat right")[0];
    messageBox.replaceChild(textNode, messageBox.childNodes[0]);

    container.appendChild(newMessage);
    inputBox.value = "";

    container.scrollTop = container.scrollHeight;
    inputBox.focus()
}
