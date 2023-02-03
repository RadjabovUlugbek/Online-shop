window.addEventListener("DOMContentLoaded", () => {
    let user = JSON.parse(window.localStorage.getItem("user_shop"))
    let form = renderElement("form")
    let input_email = renderElement(".email")
    let input_password = renderElement(".password")
    function handleSub(event) {
        event.preventDefault()
        let user_information = user[1]
        let user_email = user_information.user.email
        let user_password = user_information.user.password
        let data = new FormData(event.target)
        if (data.get("email") === user_email && data.get("password") === user_password) {
            window.location.replace("file:///C:/Users/RT/Desktop/IT%20center%20&%20EmPire%20acedemy/Em%20Pire/21-dars%20online%20shop/pay.html")
        } else if (data.get("email") !== user_email) {
            alert("Siz noto'g'ri Email kirg'azdingiz !!!")
            input_email.value = ""
        } else if (data.get("password") !== user_password) {
            alert("Siz noto'g'ri Parol kirg'azdingiz !!!")
            input_password.value = ""
        }   

    }
    form.addEventListener("submit", handleSub)
})