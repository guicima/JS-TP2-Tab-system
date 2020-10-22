let tabs = document.querySelectorAll('.tab');
let paragraphs = document.querySelectorAll('.content p');

for (let index = 0; index < tabs.length; index++) {
    const tab = tabs[index];
    const p = paragraphs[index];

    tab.addEventListener('click', function () {
        let actives = document.querySelectorAll('.active');

        for (let i = 0; i < actives.length; i++) {
            const active = actives[i];
            active.classList.remove('active');
        }

        tab.classList.add('active');
        p.classList.add('active');
    })
}