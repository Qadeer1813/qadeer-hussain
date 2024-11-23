document.addEventListener("DOMContentLoaded", function() {
    fetch('navbar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('navbar').innerHTML = html;
        });

    fetch('sidebar.html')
        .then(response => response.text())
        .then(html => {
            document.getElementById('sidebar').innerHTML = html;
        });
});
