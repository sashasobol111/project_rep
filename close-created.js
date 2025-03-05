const create = document.getElementById("create1");
const cl = document.getElementById("close");
const dia_cr = document.getElementById("create");

dia_cr.addEventListener('click', () => {
    window.created1.showModal();
})

create.addEventListener('click', () => {
    var inputValue;

    const name1 = document.getElementById('name');
    inputValue = name1.value;
    let name = inputValue;
    const desc1 = document.getElementById('description');
    inputValue = desc1.value;
    let desc = inputValue;
    const deadl1 = document.getElementById('deadline');
    inputValue = deadl1.value;
    let deadl = inputValue;

    const todo_list = document.getElementById('to-do-cont');
    todo_list.innerHTML += `<div class="to-do"><div class="head_todo"><h3 class="name-to"><b>${name}</b></h3></div><div class="center_todo"><p class="desc"></p>${desc}<p class="deadl">${deadl}</p></div><div class="tagi"><div class="tags2">swss</div></div><div class="buttons_todo"><button class="edit">Edit</button><button class="complete">Comlete</button><button class="delete">Delete</button></div>  </div>`;


    window.created1.close();
})

cl.addEventListener('click', () => {
    window.created1.close();
})