document.addEventListener('DOMContentLoaded', function() {
    let counter = parseInt(localStorage.getItem('visitorCounter')) || 21;
    document.getElementById('visitor-counter').textContent = 'Visitors: ' + counter;
    counter++;
    localStorage.setItem('visitorCounter', counter);
});
