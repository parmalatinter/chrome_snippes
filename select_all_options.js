Array.prototype.forEach.call(document.querySelectorAll('input[type="checkbox"]'), e => {
    e.checked = true;
    console.log(e)
});