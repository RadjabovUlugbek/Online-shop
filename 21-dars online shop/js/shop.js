window.addEventListener("DOMContentLoaded", () => {
    let input = renderElement(".search")
    let template = renderElement("template").content
    let boxes = renderElement(".boxes")
    let shop = renderElement("i")
    let shop_box = renderElement(".shop")
    let shop_btn = renderElement(".shop_btn")
    function change() {
        shop_box.classList.toggle("shop2")
    }
    shop.addEventListener("click", change)

    function render(e) {
        boxes.innerHTML = null
        e.forEach(item => {
            let clone = template.cloneNode(true)
            let img = clone.querySelector("img")
            img.src = item.bigPoster
            let name = clone.querySelector("h2")
            name.textContent = item.name
            let model = clone.querySelector("h3")
            model.textContent = item.model
            let size = clone.querySelector(".size")
            let height = size.querySelector(".height")
            height.textContent = item.height + "m"
            let width = size.querySelector(".width")
            width.textContent = item.width + "m"
            let color = clone.querySelector("h5")
            color.textContent = item.color
            let tok = clone.querySelector("h4")
            tok.textContent = item.tokTortish + " volt"
            let korzina = clone.querySelector(".shopping")
            korzina.dataset.id = item.name
            let narx = clone.querySelector("h4")
            narx.textContent = item.narx + " so'm"
            let result = []
            korzina.addEventListener("click", () => {
                for (let i = 0; i < object.length; i++) {
                    if (object[i].name === korzina.dataset.id) {
                        if (!result.includes(object[i])) {
                            result.push(object[i])
                            window.localStorage.setItem("mahsulot", JSON.stringify(result))
                            let parse = JSON.parse(window.localStorage.getItem("mahsulot"))
                            if (parse.length >= 1) {
                                shop_btn.textContent = "Hisoblashish"
                            }
                            parse.map((item) => {
                                let h3 = createTag("h3")
                                h3.textContent = item.name
                                shop_box.appendChild(h3)
                            })
                        }
                    }
                }
                console.log(JSON.parse(window.localStorage.getItem("mahsulot")));
            })
            boxes.appendChild(clone)
        });
    }
    render(object)

    let parse = JSON.parse(window.localStorage.getItem("mahsulot"))
    if (parse) {
        shop_btn.textContent = "Hisoblashish"
        shop_btn.addEventListener("click", handleLogin)
    }
    for (let i = 0; i < parse.length; i++) {
        let h3 = createTag("h3")
        console.log(parse.name);
        h3.textContent = parse.name
        shop_box.appendChild(h3)
    }
    function handleLogin() {
        window.location.replace("file:///C:/Users/RT/Desktop/IT%20center%20&%20EmPire%20acedemy/Em%20Pire/21-dars%20online%20shop/login.html")
    }



    function upSearch(e) {
        let regex = new RegExp(e.target.value, "gi")
        let filter = []
        filter = object.filter((item) => item.name.match(regex))
        render(filter)
    }
    input.addEventListener("keyup", upSearch)

})
