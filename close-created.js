const create = document.getElementById("create1");
const cl = document.getElementById("close");
const dia_cr = document.getElementById("create");

dia_cr.addEventListener('click', () => {
    window.created1.showModal();
})

create.addEventListener('click', () => {
    window.created1.close();
})

cl.addEventListener('click', () => {
    window.created1.close();
})