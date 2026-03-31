document.addEventListener('DOMContentLoaded', () => {
    const heading = document.querySelector('.heading')
    const button = document.querySelector('.btn')
    let user = {
        "username": "preeti",
        "email": "preeti123@gmail.com",
        "password": "preeti@123",
        "age": "18"
    }

    // heading.textcontent = 'welcome ${user.username}';

    let islogin = false;

    let username = prompt("Enter username : ");
    let password = prompt("Enter password : ");

    if (username == user.username) {
        if (password == user.password) {
            islogin = true;
            alert(`welcome ${user.username}`);
        } else {
            alert("Wrong Password.");
        }
    } else {
        alert("User not found.");
    }

    if (islogin) {
        heading.textContent = `Welcome ${user.username}`;
    } else {
        heading.textContent = 'Please Login';
    }

    function changePassword() {
        let isTrue = confirm("You want to change password ?")

        if (isTrue) {
            let oldPassword = prompt("Enter oldPassword");

            if (user.password == oldPassword) {
                let newPassword = prompt("Enter New Password");
                let confirmPassword = prompt("Enter Confirm Password");

                if (newPassword == confirmPassword) {
                    user.password = newPassword;
                    alert("your password change succesfully.");
                } else {
                    alert("New Password and Confirm Password Not Match.");
                }
            } else {
                alert("Password not matched");
            }
        }
        else {
            return 0;
        }

    }
    console.log(button);
    
    button.addEventListener('click', changePassword)

    

})