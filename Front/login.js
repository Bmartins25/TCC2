const btnadicionar = document.querySelector ("#bntclick")

btnadicionar.onclick = adicionar => {
    adicionar.preventDefault()

    const form = adicionar.target.parentNode

    const  formsdados = new FormData(form)

    
    const  email = formsdados.get("email")
    const  senha = formsdados.get("senha")
    

    const  salvar = {

        email, senha
    }

    console.log(salvar)

    fetch("http://localhost:3000/Login", {

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