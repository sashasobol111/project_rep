const el = document.getElementById("select1");
const clear = document.getElementById("del_tag");
const tags1 = document.getElementsByClassName("tags1");
const div2 = document.getElementById("tags_sys");


let i = 0;
el.addEventListener('change', () => {
    if(i >= 3){

    }else{
        let tag = el.options[el.selectedIndex].value;
        let name_tag = tag;
        div2.innerHTML += `<div class="tags1" id="${i}">${name_tag}</div>`;
        i++;
    }
    

})

clear.addEventListener('click', () => {
    for (let index = 0; index < tags1.length; index++) {
        tags1[index].remove;
        
    }
})



