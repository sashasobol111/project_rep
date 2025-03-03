const el = document.getElementById("select1");
const clear = document.getElementById("del_tag");
const tags1 = document.getElementsByClassName("tags1");
const div2 = document.getElementById("tags_sys");



el.addEventListener('change', () => {
    let i = 0;

        let tag = el.options[el.selectedIndex].value;

        
        let name_tag = tag;
        div2.innerHTML += `<div class="tags1">${name_tag}</div>`;

    

})


clear.addEventListener('click', () => {
    if(tags1.length >= 0){
        tags1[0].remove();
    }
})



