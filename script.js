const fetchAPI = 'https://type.fit/api/quotes';
const title = document.getElementById('title');
const getRandomCite = document.getElementsByClassName("getRandomCite")[0];

getRandomCite.addEventListener("click", updateContent);

updateContent();
function updateContent() {
    fetch(fetchAPI)
        .then(res => res.json())
        .then(data => {
            let randomNum = getRandomId(data.length);
            title.innerText = `Advice #${randomNum}`;
            document.getElementById('quote').innerText = `"${data[randomNum].text}"`;
            console.log(data)
        });
}
function getRandomId(x) {
    return Math.floor(Math.random() * x);
}

