
function popularTabela(id_tabela, respostas) {


    var objetoTabela = document.getElementById(id_tabela);
    var header = objetoTabela.createTHead();


    var headerRow = header.insertRow()

    for (var resp in respostas) {
        var atributos = Object.keys(respostas[resp]);
        atributosGlobais = atributos;
        for (atributo in atributos) {
            //console.log(atributos[atributo])
            var headerCol = headerRow.insertCell(atributo)
            headerCol.innerHTML = atributos[atributo]
        }
        var headerColEditar = headerRow.insertCell()

        headerColEditar.innerHTML = "Editar"
        var headerColDeletar = headerRow.insertCell()

        headerColDeletar.innerHTML = "Deletar"

        break;
    }

    var tbody = document.createElement("tbody");
    objetoTabela.append(tbody);


    for (var resposta in respostas) {
        //console.log(respostas[resposta])
        var linha = tbody.insertRow();


        //console.log(respostas[resposta])

        var valores = Object.values(respostas[resposta]).reverse();
        //console.log(valores)
        var valoresReversos = valores.reverse();

        //console.log(valoresReversos)

        for (var valorid in valoresReversos) {
            linha.id = valoresReversos[valorid]
            break
        }

        for (var valor in valoresReversos) {
            var coluna = linha.insertCell(valor)
            coluna.innerHTML = valoresReversos[valor]
        }


        id = respostas[resposta].id;


        var colunaEditar = linha.insertCell()

        colunaEditar.innerHTML = "<button type=\"button\" class=\"btn btn-warning\" data-toggle=\"modal\" data-target=\"#modal\" onClick = \"construirModal(" + id + ")\">Editar</button>"

        var colunaDeletar = linha.insertCell()


        colunaDeletar.innerHTML = "<button type = \"button\" class = \"btn btn-danger\" onClick = \"deletarObjeto(" + id + ")\">Deletar </button>"


    }
}

function construirModal(id) {

    //console.log(id)

    getObjectById(id)

    //console.log(objetoGlobal)

    var modal = document.getElementById("modal-body")

    modal.innerHTML = "";

    for (var campo in objetoGlobal){
        console.log("campo: " + campo)
        console.log("value: " + objetoGlobal[campo])

        const divRow = document.createElement('div');
        const divCol1 = document.createElement('div');
        const divCol2 = document.createElement('input');
        divRow.className = 'form-group';
        divCol1.className = 'col-form-label';
        divCol2.className = 'form-control';

        if(campo !== "id"){
            divCol1.innerHTML = campo;

            console.log(Date.parse(objetoGlobal[campo]));

            if(isNaN(Date.parse(objetoGlobal[campo]))){
                divCol2.type = "text"
                divCol2.value = objetoGlobal[campo];

            }else {
                divCol2.type = "date"
                divCol2.value = FormataStringData(objetoGlobal[campo]);
            }



            modal.appendChild(divRow);
            divRow.appendChild(divCol1);
            divRow.append(divCol2);

        }


    }

}

function FormataStringData(data) {
    var dia  = data.split("/")[0];
    var mes  = data.split("/")[1];
    var ano  = data.split("/")[2];

    return ano + '-' + ("0"+mes).slice(-2) + '-' + ("0"+dia).slice(-2);
    // Utilizo o .slice(-2) para garantir o formato com 2 digitos.
}



