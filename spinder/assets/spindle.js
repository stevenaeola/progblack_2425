let spider_images = document.querySelectorAll("img.spider")

for(let img of spider_images){
    img.classList.add("invisible")
    let clickable_parent = img.parentElement.parentElement.parentElement
    clickable_parent.addEventListener("click", () => {
        img.classList.remove("invisible")
    })
}