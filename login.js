document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.querySelector('input[name="NomUsuari"]').value;
    const password = document.querySelector('input[name="Contrassenya"]').value;

    if (!username || !password) {
        alert('Falten camps per completar.');
        return;
    }

    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
    })

    .then(response => {
        if (!response.ok) {
            alert('Error al connectar amb la API');
        }
        return response.json();
    })
    .then(data => {
        console.log(data);
        localStorage.setItem('username', username);
        window.location.href = 'CV_HarryPotter.html';
    })
    .catch(error => {
        console.error(error);
        alert('Error al connectar amb la API.');
    });
});
