function showSection(name) {
    document.querySelectorAll('.hidden').forEach(hidden => {
        hidden.style.display = 'none';
    })
    document.querySelector(`#${name}`).style.display = 'block';
}

document.querySelectorAll('button').forEach(button => {
    button.onclick = function() {
        showSection(this.dataset.name);
        document.querySelector('main').style.display = 'none';
    }
})