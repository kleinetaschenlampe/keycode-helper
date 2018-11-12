let keyCode = document.getElementById("keyCode");
let keyName = document.getElementById("keyName");

window.onkeydown = (e) =>{
    keyCode.innerHTML = e.keyCode;
    keyName.innerHTML = e.key;
    console.log(e);
};

window.onclick = (e) => {
    setClipboard(keyCode.innerHTML);
};

function setClipboard(str) {
    let tempElement = document.createElement("input");
    tempElement.style = "position: absolute; top: -2000px; left: -2000px;";
    tempElement.value = str;
    document.body.appendChild(tempElement);
    tempElement.select();
    document.execCommand("copy");
    document.body.removeChild(tempElement);
}
