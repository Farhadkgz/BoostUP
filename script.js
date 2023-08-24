const btn = document.querySelector('#save-btn');
const form = document.querySelector('form');

btn.addEventListener('click', () => {
    const elem = form.elements;

    Array.from(elem).forEach(e => {
        const name = e.name;
        const value = e.value;
        console.log(name, value);
    })
})