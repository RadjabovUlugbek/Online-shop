window.addEventListener("DOMContentLoaded", () => {
    let form = renderElement("form")
    function handleSub(event) {
        event.preventDefault()
        let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "d", "e", "f", "g", 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "d", "e", "f", "g"]
        let data = new FormData(event.target)
        let result = ""
        for (let i = 0; i < array.length; i++) {
            result += array[parseInt(Math.random() * i)]
        }
        let natija = []

        let user = {
            name: data.get("firstname"),
            lastname: data.get("lastname"),
            email: data.get("email"),
            password: data.get("password"),
            id: uuid.v4()
        }
        console.log(user);
        natija.push({ token: result }, { user })
        console.log(natija);
        window.localStorage.setItem("user_shop", JSON.stringify(natija))
        let parses = JSON.parse(window.localStorage.getItem("user_shop"))
        if (parses.length >= 2) {
            window.location.replace("file:///C:/Users/RT/Desktop/IT%20center%20&%20EmPire%20acedemy/Em%20Pire/21-dars%20online%20shop/shop.html")
        }
    }
    form.addEventListener("submit", handleSub)
})
// let ob1 = [
//     {
//         a:"a"
//     }
// ];
// let ob2 = [
//     {
//         b:"b"
//     }
// ]
// let res = []
// res.push({ob1},{ob2})
// console.log(res);