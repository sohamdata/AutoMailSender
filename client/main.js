function signupAction(ele) {
    debugger;
    var firstName = document.getElementById("firstname").value;
    var lastName = document.getElementById("lastname").value
    var email = document.getElementById("email").value;
    var data = {
        "first_name": firstName,
        "last_name": lastName,
        "email_id": email,
        "platform_type": "web"
    };
    var auth = catalyst.auth;
    var signupPromise = auth.signUp(data);
    signupPromise
        .then((response) => {
            console.log(response.content);
        })
        .catch((err) => {
            console.log(err);
        });
}