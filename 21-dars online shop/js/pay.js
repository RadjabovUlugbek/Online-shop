window.addEventListener("DOMContentLoaded", () => {
    let parse = JSON.parse(window.localStorage.getItem("mahsulot"))
    let template = renderElement("template").content
    let boxes = renderElement(".boxes")
    let tulov = renderElement(".tulov")
    console.log(parse);
    function narx(e) {
        let index = 0
        for (let i = 0; i < e.length; i++) {
            if (e[i].narx) {
                index += e[i].narx
            }
        }
        let narxMah = renderElement(".narx")
        narxMah.innerHTML = "Siz sotib olmoqchi bo'lgan mahsulotlarning narxi: " + index + "so'm"
    }
    narx(parse)
    function render(e) {
        for (let i = 0; i < e.length; i++) {
            let clone = template.cloneNode(true)
            let img = clone.querySelector("img")
            img.src = e[i].bigPoster
            let name = clone.querySelector("h2")
            name.textContent = e[i].name
            let narx = clone.querySelector("h4")
            narx.textContent = e[i].narx
            let color = clone.querySelector("h5")
            color.textContent = e[i].color
            let height = clone.querySelector(".height")
            height.textContent = e[i].height
            let width = clone.querySelector(".width")
            width.textContent = e[i].width
            let del = clone.querySelector(".delete")
            del.dataset.id = e[i].name
            del.addEventListener("click", handleDel)
            boxes.appendChild(clone)
        }
    }
    render(parse)
    function handleDel(e) {
        let id = e.target.dataset.id
        for (let i = 0; i < parse.length; i++) {
            if(id === parse[i].name){
                e.target.parentNode.remove()
                parse.splice(i,1)
                window.localStorage.setItem("mahsulot",JSON.stringify(parse))
            }
        }
    }
    let form = renderElement("form")
    function handlesub(event){
        event.preventDefault()
        let data = new FormData(event.target)
        let input = data.get("input")
        if(input.length === 13){
            tulov.textContent = "To'lov amalga oshorilmoqda..."
            setTimeout(() => {
                alert("To'landi 🧨")
            }, 2000);

        }
    }
    form.addEventListener("submit", handlesub)
})