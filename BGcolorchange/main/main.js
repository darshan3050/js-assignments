function changecolor() {
    var select = document.getElementById('color');
    var option = select.options[select.selectedIndex];
    console.log("option:", option)
    document.body.style.backgroundColor = option.value;
}