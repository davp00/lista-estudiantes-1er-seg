const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
const dias = ['Lunes','Martes','Miercoles','Jueves','Viernes','Sabado','Domingo'];
function Reloj()
{
    let fecha = new Date();
    //Dia
    let year = fecha.getFullYear();
    let mes = fecha.getMonth();
    let dia = fecha.getDate();
    let dia_semana = fecha.getDay();
    //Hora
    let horas = fecha.getHours();
    let minutos = fecha.getMinutes();
    let segundos = fecha.getSeconds();
    let tipo = "a.m";
    if(horas>=12)
    {
        horas = horas - 12;
        tipo = "p.m";
    }

    $('#dia').text(`${dias[dia_semana-1]}, ${Parser(dia)} de ${meses[mes]} del ${year}`);
    $('#horas').text(Parser(horas));
    $('#minutos').text(Parser(minutos));
    $('#segundos').text(Parser(segundos));
    $('#tipo').text(tipo);
}

/**
 * @return {string}
 */
function Parser(num)
{
    if( num < 10)
    {
        return "0" +num;
    }
    return num;
}


Reloj();
setInterval(()=>
{
    Reloj();
},1000);