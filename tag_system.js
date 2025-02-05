const el = document.getElementById("select1");
const tags = document.getElementsByClassName("tag");
const tags1 = document.getElementsByClassName("tags1");
const div2 = document.getElementById("tags_sys");

let i = 0;

el.addEventListener('change', () => {
    let name_tag = el[1].textContent;
    div2.innerHTML = `<div class="tags1" id="${i}">${name_tag}</div>`;
    i++;
})



