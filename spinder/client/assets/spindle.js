let get_button = document.getElementById('get_spider').addEventListener('click', loadSpider)

async function loadSpider(event){
    let my_div = document.getElementById('spiders_go_here')
    let spider_resp = await fetch("api/spider/rand")
    let new_spider = await spider_resp.json()
    my_div.innerHTML = new_spider.name
}

let spider_images = document.querySelectorAll("img.spider")



for(let img of spider_images){
    img.classList.add("invisible")
    let clickable_parent = img.parentElement.parentElement.parentElement
    clickable_parent.addEventListener("click", () => {
        img.classList.remove("invisible")
    })
}