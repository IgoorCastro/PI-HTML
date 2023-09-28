const btn_cadastro = document.getElementById("btn-cadastrar");

btn_cadastro.addEventListener("click", function(){
    cadastro_test();
});


function cadastro_test(){
    let user_nome = document.getElementById("input-nome").value;
    let user_email = document.getElementById("input-email").value;
    let user_password = document.getElementById("input-password").value;
    let user_repassword = document.getElementById("input-repassword").value;
    let ckb_terms = document.getElementById("ckb-termos");

    if(user_nome === '' && user_email === '' && user_password === '' && user_repassword === '')
        alert("Preencha todos os campos");

    if(!(ckb_terms.checked))
        alert("Você deve concordar com os termos");
}