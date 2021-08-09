const btnadicionar = document.querySelector ("#bntclick")

btnadicionar.onclick = adicionar => {
    adicionar.preventDefault()

    const form = adicionar.target.parentNode

    const  formsdados = new FormData(form)

    const  nome = formsdados.get("nome")
    const  email = formsdados.get("email")
    const  senha = formsdados.get("senha")
    

    const  salvar = {

        nome, email, senha
    }

    console.log(salvar)

    fetch("http://localhost:3000/Cadastro", {

        method:"POST",
        headers: {
            "Accept": "aplication/json",
            "Content-Type": "aplication/json",

        },
        body:JSON.stringify(salvar)

    })
    .then(resp => resp.json())

    .then(resp => console.log(resp))
    }