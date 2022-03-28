document.addEventListener("DOMContentLoaded", function (event) {
    let name = localStorage.getItem('name');
    if (name != null) {
        document.getElementById(`name`).value = name;
    };

    let img = localStorage.getItem('img');
    if (img != null) {
        document.getElementById(`img`).src = img;
    };
    let result = localStorage.getItem('result');
    document.getElementById(`result`).textContent = result;

});

function checkSpam() {
    let comment = document.getElementById(`exampleFormControlTextarea1`).value;
    let autor = document.getElementById(`name`).value;
    let comment1 = comment.replace(/viagra|xxx/ig, "***");

    if (localStorage.getItem('name') == null) {
        localStorage.setItem('name', autor);
    };

    document.getElementById('result').innerHTML += `<br /><span class = "">${autor}: </span><span>${comment1}</span ><br/>`;

    localStorage.setItem('result', (document.getElementById('result').textContent));


}

function getavatar() {
    let avatar = document.getElementById('avatar').value;
    document.getElementById('img').src = avatar;

    if (localStorage.getItem('img') == null) {
        localStorage.setItem('img', avatar);
    };

};