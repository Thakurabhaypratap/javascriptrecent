const inser = document.getElementById('insert');

window.addEventListener('keydown' , function(e) {
    console.log(e.keyCode);
    inser.innerHTML = `
    <div class="color">
    <table>
        <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>Code</th>
        </tr>
        <tr>
            <td>${e.key == ' ' ? 'space' : e.key}</td>
            <td>${e.keyCode}</td>
            <td>${e.code}</td>
        </tr>
    </table>
    </div>`
})