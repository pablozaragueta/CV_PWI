/////////////////////////////////////////////////////EXERCICI 1////////////////////////////////////////////////
function greetUser(name) {
    alert(`Hello, ${name}!`);
}

const username = localStorage.getItem('username');
greetUser(username);

/////////////////////////////////////////////////////FIBBONACCI////////////////////////////////////////////////
function getFibonacci(x) {
    if (typeof x !== 'number' || x <= 0 || !Number.isInteger(x)) {
        throw new Error('Please provide a positive integer.');
    }

    const sequence = [];
    for (let i = 0; i < x; i++) {
        if (i === 0 || i === 1) {
            sequence.push(1);
        } else {
            sequence.push(sequence[i - 1] + sequence[i - 2]);
        }
    }

    return sequence;
}

console.log(getFibonacci(10));


/////////////////////////////////////////////////////SHOPING LIST////////////////////////////////////////////////
const shoppingList = ['Llet', 'Pa', 'Ous', 'Pizza', 'Fuet'];

function displayList() {
shoppingList.forEach((item, index) => {
    console.log(`${index + 1}: ${item}`);
});
}

displayList(shoppingList);


/////////////////////////////////////////////////////COLORS EXERCICE////////////////////////////////////////////////
const numbers = [69, 43, 78, 3, 156];

function stats() {
const max = Math.max(...numbers);
const min = Math.min(...numbers);
const avg = numbers.reduce((sum, num) => sum + num, 0) / numbers.length;

console.log('min: ', min);
console.log('max: ', max);
console.log('avg: ', avg);
}

stats();


/////////////////////////////////////////////////////STRING TO ARRAY////////////////////////////////////////////////
const loerm = "Lorem ipsum dolor sit amet consectetur adipiscing elit";

function stringToArray(str) {
return str.split(' ');
}

const wordsArray = stringToArray(loerm);
console.log(wordsArray);


/////////////////////////////////////////////////////ARRAY TO STRING////////////////////////////////////////////////
const wordsArray2 = ["Lorem", "ipsum", "dolor", "sit", "amet"];

function arrayToString(array) {
return array.join(" ");
}

console.log(arrayToString(wordsArray2));


/////////////////////////////////////////////////////FER FOTO GRAN////////////////////////////////////////////////
document.getElementById("foto").addEventListener('click', function () {
this.classList.toggle('ferGran');
});


/////////////////////////////////////////////////////SHOW QUAN HOVER "EDUCACIÓ"////////////////////////////////////////////////
any.style.visibility = "hidden";
mostraHover.addEventListener("mouseenter", function() {
any.style.visibility = "visible";
});

mostraHover.addEventListener("mouseleave", function() {
any.style.visibility = "hidden";
});


//////////////////////////////////////////////MOSTRAR ALERTA QUAN ENVIAR FORMULARI////////////////////////////////////////////////
// document.getElementById("Enviar").addEventListener("click", function() {
//     alert("Hem rebut el vostre missatge. El llegirem amb atenció quan poguem ;)");
//     event.preventDefault();
// });


///////////////////////////////////////////////SECCIÓ COMENTARIS////////////////////////////////////////////////
const commentInput = document.getElementById("commentInput");
const sendBtn = document.getElementById("sendBtn");
const removeBtn = document.getElementById("removeBtn");
const commentsList = document.getElementById("commentsList");

let commentsArray = [];

function updateCommentsDisplay() {
commentsList.innerHTML = '';
commentsArray.forEach(comment => {
    const li = document.createElement("li");
    li.textContent = comment;
    commentsList.appendChild(li);
});
}

sendBtn.addEventListener("click", function() {
const newComment = commentInput.value.trim();
if (newComment) {
    commentsArray.push(newComment);
    commentInput.value = '';
    updateCommentsDisplay();
}
});

removeBtn.addEventListener("click", function() {
commentsArray.pop();
updateCommentsDisplay();
});


///////////////////////////////////////////////ENVIAR FORMULARI////////////////////////////////////////////////
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input[type='text']");
const submitButton = document.querySelector("input[type='submit']");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    let isValid = true;

    inputs.forEach(input => {
        const parent = input.parentElement;
        let errorMessage = parent.querySelector(".error");

        if (errorMessage) {
            parent.removeChild(errorMessage);
        }

        if (input.value.trim() === "") {
            isValid = false;
            errorMessage = document.createElement("span");
            errorMessage.textContent = "Aquest camp és obligatori";
            errorMessage.className = "error";
            errorMessage.style.color = "red";
            parent.appendChild(errorMessage);
        } else {
            if (input.name === "Correu Electrònic" && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(input.value)) {
                isValid = false;
                errorMessage = document.createElement("span");
                errorMessage.textContent = "Introdueix un correu electrònic vàlid";
                errorMessage.className = "error";
                errorMessage.style.color = "red";
                parent.appendChild(errorMessage);
            }

            if (input.name === "Telèfon" && !/^\d{9}$/.test(input.value)) {
                isValid = false;
                errorMessage = document.createElement("span");
                errorMessage.textContent = "Introdueix un telèfon vàlid (9 digits)";
                errorMessage.className = "error";
                errorMessage.style.color = "red";
                parent.appendChild(errorMessage);
            }
        }
    });

    if (!isValid) {
        return;
    }

    submitButton.disabled = true;
    submitButton.value = 'Loading...';

    inputs.forEach(input => {
        input.disabled = true;
    });

    setTimeout(() => {
        alert("Hem rebut el vostre missatge. El llegirem amb atenció quan poguem ;)");

        form.reset();

        submitButton.disabled = false;
        submitButton.value = 'Enviar';

        inputs.forEach(input => {
            input.disabled = false;
        });

    }, 2000);
});
