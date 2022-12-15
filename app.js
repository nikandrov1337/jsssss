function validateForm() {

    let name = document.forms['myForm']['name'].value
    if (!name) {
        document.getElementById('name_error').style.display = 'block'
    }
    else {
        document.getElementById('name_error').style.display = 'none'
    }


    let second_name = document.forms['myForm']['second_name'].value
    if (!second_name) {
        document.getElementById('second_name_error').style.display = 'block'
    }
    else{
        document.getElementById('second_name_error').style.display = 'none'
    }


    let email = document.forms['myForm']['email'].value
    if(!email){
        document.getElementById('email_error').style.display = 'block'
    }
    else{
        document.getElementById('email_error').style.display = 'none'
        if (!email || !validateEmail(email)) {
        document.getElementById('email_error_v').style.display = 'block'
        }
        else{
            document.getElementById('email_error_v').style.display = 'none'
        }
    }



    let passwd1 = document.forms['myForm']['passwd1'].value
    if (!passwd1) {
        document.getElementById('passwd1_error').style.display = 'block'
    }
    else{
        document.getElementById('passwd1_error').style.display = 'none'
    }


    let passwd2 = document.forms['myForm']['passwd2'].value
    if (!passwd2) {
        document.getElementById('passwd2_error').style.display = 'block'
    }
    else{
        document.getElementById('passwd2_error').style.display = 'none'
    }
    if (passwd1 != passwd2) {
        alert("Пароли не совпадают!")
    }
    

    let gender = document.forms['myForm']['gender'].value
    let male = document.forms['myForm']['male'].checked
    let female = document.forms['myForm']['female'].checked
    if (!male && !female) {
        document.getElementById('gender_error').style.display = 'block'
    }
    else {
        document.getElementById('gender_error').style.display = 'none'
    }
    console.log(name, second_name, email, passwd1, passwd2, gender)

    let request = new XMLHttpRequest
    request.open('POST', './server.php')
    request.setRequestHeader("Content-type", "application/json;charset=UTF-8")
    let data = {
        name: name
    }
    request.send(JSON.stringify(data))
    request.onreadystatechange = function () {
        if (request.readyState === 4)
            if (request.status === 200) {
                console.log(request.responseText)
            }
    }
    return false;
}


validateEmail = (email) => {
    let re = /\S+@\S+\.\S+/
    return re.test(email)
}