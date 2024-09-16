var buttonToggle = document.getElementById('toggle');
var get = document.getElementById('get');
buttonToggle.addEventListener("click", function () {
    if (get.style.display === 'none') {
        get.style.display = 'block';
    }
    else {
        get.style.display = 'none';
    }
});
