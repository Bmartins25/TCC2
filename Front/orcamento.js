const btnadicionar = document.querySelector ("#bntclick")

btnadicionar.onclick = adicionar => {
    adicionar.preventDefault()

    const form = adicionar.target.parentNode

    const  formsdados = new FormData(form)

    const  Contas = formsdados.get("Contas")
    const  Alimentacao = formsdados.get("Alimentacao")
    const  Eventos = formsdados.get("Eventos")
    const  Transportes = formsdados.get("Transportes")
    const  Compras = formsdados.get("Compras")

    const  salvar = {

        Contas, Alimentacao, Eventos, Transportes, Compras
    }

    console.log(salvar)

    fetch("http://localhost:3000/Orcamento", {

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