const btn_login = document.getElementById("btn-entrar");
const btn_cadastro = document.getElementById("btn-cadastrar");

btn_login.addEventListener("click", function(){
    login_test();
});

btn_cadastro.addEventListener("click", function(){
    window.location.href = "../pages/cadastro.html";
});


function login_test(){
    let user_email = document.getElementById("input-email").value;
    let user_password = document.getElementById("input-password").value;

    // - LOG LOGIN -
    /*console.log("- LOG LOGIN -   \nuser_email: " + user_email +
                                "\nuser_password: " + user_password);*/

    if(user_email === '' && user_password === '')
        alert("Preencha todos os campos");
    else{
            if(user_email === '')
                alert("Preencha o email");
                else
                    if(user_password === '')
                        alert("Preencha a senha");
        }    
}