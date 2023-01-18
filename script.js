function gerarPlano() {
    const plano = {
        nome: document.getElementById("nome").value, 
        identifique: document.getElementById("identifique").value, 
        problema: document.getElementById("problema").value, 
        solucao: document.getElementById("solucao").value, 
        publico: document.getElementById("publico").value, 
        concorrencia: document.getElementById("concorrencia").value, 
        vendas: document.getElementById("vendas").value, 
        marketing: document.getElementById("marketing").value, 
        datas: document.getElementById("datas").value, 
        receitas: document.getElementById("receitas").value, 
        despesas: document.getElementById("despesas").value, 
        time: document.getElementById("time").value, 
        parceiros: document.getElementById("parceiros").value, 
    }

    
    let file = new File([`
    <!DOCTYPE html>
    <html lang="pt-BR">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <style>
            *{
                margin:0;
                padding:0;
                box-sizing: border-box;
                font-family: sans-serif;
            }
            html{
                background: #ddd;
            }
            body{
                padding: 32px;
                max-width: 800px;
                margin: 0 auto;
                background: white;

            }
            h1{
                margin-bottom: 32px;
            }
            p{
                margin-bottom: 24px;
                font-weight: 600;
                font-size: 1.2rem;
                color: gray;
            }

        </style>
        <title>Plano de negócio: ${plano.nome}</title>
    </head>
    <body>
        <h1>${plano.nome}</h1>

        <h2>Identidade de marca</h2>
        <p>${plano.identifique}<p/>

        <h2>Problema</h2>
        <p>${plano.problema}<p/>

        <h2>Solução</h2>
        <p>${plano.solucao}<p/>

        <h2>Público alvo</h2>
        <p>${plano.publico}<p/>

        <h2>Concorrencia</h2>
        <p>${plano.concorrencia}<p/>

        <h2>Canais de vendas</h2>
        <p>${plano.vendas}<p/>

        <h2>Atividade de marketing</h2>
        <p>${plano.marketing}<p/>

        <h2>Datas e prazos</h2>
        <p>${plano.datas}<p/>

        <h2>Receitas</h2>
        <p>${plano.receitas}<p/>

        <h2>Despesas</h2>
        <p>${plano.despesas}<p/>

        <h2>Time e funções</h2>
        <p>${plano.time}<p/>

        <h2>Parceiros e recursos</h2>
        <p>${plano.parceiros}<p/>


    </body>
    </html>
    `], `plano_de_negócio_${plano.nome}.html
    
    `,{type: "text/plain;charset=utf-8"})



    let url = window.URL.createObjectURL(file)
    let a = document.createElement("a");
        a.href = url;
        a.download = file.name;
        a.click();
        window.URL.revokeObjectURL(url);
}