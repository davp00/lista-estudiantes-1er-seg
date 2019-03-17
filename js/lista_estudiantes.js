if(!localStorage.getItem('nombre'))window.location.href = "index.html";
const estudiantes ={
    "2017114118":
        {
            nombre:"DANIEL AURELIANO VILORIA PEREZ",
            email:"daniielvp82@gmail.com",
            celular:"3007348151",
            asistio:undefined,
            img:"https://scontent.fbaq2-2.fna.fbcdn.net/v/t1.0-9/22519614_1589943831056007_862710084899241549_n.jpg?_nc_cat=0&oh=9ca4337da86ef88e76dc162819d15eaa&oe=5C1723C1"
        },
    "2014114114":
        {
            nombre:"ALVAREZ AYOLA JOEL DAVID",
            email:"jalvarezayola@gmail.com",
            celular:"",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214037":
        {
            nombre:"CANTILLO DE LA CRUZ JOSE DAVID",
            email:"cantillojosed@gmail.com",
            celular:"3006534896",
            asistio:undefined,
            img:"img/user.png"
        },
    "2009214040":
        {
            nombre:"DANIEL SABOGAL SANTIAGO",
            email:"s.tiagodaniel@gmail.com",
            celular:"??",
            asistio:undefined,
            img:"img/user.png"
        },
    "2013214048":
        {
            nombre:"ESQUEA ESTRADA KEVIN JOSE",
            email:"rafael.esquea@gmail.com",
            celular:"??",
            asistio:undefined,
            img:"img/user.png"
        },
    "2015214050":
        {
            nombre:"GALVIS AMADOR YOICER DILAN",
            email:"ygalvisamador@gmail.com",
            celular:"??",
            asistio:undefined,
            img:"img/user.png"
        },
    "2013214057":
        {
            nombre:"GARZON RODRIGUEZ MICHAEL FERNEEIN",
            email:"amph7019@gmail.com",
            celular:"3043261092",
            asistio:undefined,
            img:"img/user.png"
        },
    "2014114102":
        {
            nombre:"GOENAGA RAIGOSA TANIA MARGARITA",
            email:"taniagoenaga@gmail.com",
            celular:"??",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016114057":
        {
            nombre:"GRANADOS BUENDIA GERALDINE DE JESUS",
            email:"geralgranadosb99@gmail.com",
            celular:"3015875851",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016114060":
        {
            nombre:"GUETES MIRANDA JHORMAN JAIR",
            email:"jhormnjair21@gmail.com",
            celular:"3017895870",
            asistio:undefined,
            img:"img/user.png"
        },
    "2015114034":
        {
            nombre:"HEREDIA LUNA CARLOS ANDRES",
            email:"carlosheredia210@gmail.com",
            celular:"3108404945",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214084":
        {
            nombre:"HERNANDEZ MARTINEZ NEIDER YESID",
            email:"neiderkk@gmail.com",
            celular:"3024061276",
            asistio:undefined,
            img:"img/user.png"
        },
    "2011114139":
        {
            nombre:"JARAMILLO VILLEGAS AILIN DEL PILAR",
            email:"ailinp8@gmail.com",
            celular:"3005388436",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214077":
        {
            nombre:"LOBATO BELEÑO DIEGO ALEJANDRO",
            email:"diegolobato1411@gmail.com",
            celular:"3017395260",
            asistio:undefined,
            img:"img/user.png"
        },
    "2015214080":
        {
            nombre:"MOLINA LEMUS KEINER RAFAEL",
            email:"keiner1027@gmail.com",
            celular:"3142637991",
            asistio:undefined,
            img:"img/user.png"
        },
    "2013214092":
        {
            nombre:"ORTIZ PALOMINO MISAEL DUBAN",
            email:"misaelortiz58@gmail.com",
            celular:"3128379962",
            asistio:undefined,
            img:"img/user.png"
        },
    "2014114054":
        {
            nombre:"RAMIREZ CASTILLO KARUL ANDRES",
            email:"ramirezcastillokarul@gmail.com",
            celular:"3016361557",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214069":
        {
            nombre:"RESTREPO LOPEZ JOSE AZADI",
            email:"joserestrepo301@gmail.com",
            celular:"3017129348",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214076":
        {
            nombre:"RODRIGUEZ NAVIA CHRISTIAN DAVID",
            email:"christian971204@gmail.com",
            celular:"3002714977",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214041":
        {
            nombre:"RODRIGUEZ RODRIGUEZ YAMID JOSE",
            email:"yamid0208@gmail.com",
            celular:"??",
            asistio:undefined,
            img:"img/user.png"
        },
    "2014114132":
        {
            nombre:"RUEDA PACHECO JULIAN ANDRES",
            email:"jarpkx@gmail.com",
            celular:"??",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016114126":
        {
            nombre:"SANTANA BUENDIA DEILER GALDINO",
            email:"deilersantana@gmail.com",
            celular:"3152995273",
            asistio:undefined,
            img:"img/user.png"
        },
    "2008114147":
        {
            nombre:"VALDEZ LOZANO MANUEL RODRIGO",
            email:"mrvaloz@gmail.com",
            celular:"3024561631",
            asistio:undefined,
            img:"img/user.png"
        },
    "2015214132":
        {
            nombre:"VARGAS PICON HALLEL SARID",
            email:"hallelsarid2411@gmail.com",
            celular:"3046783427",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214052":
        {
            nombre:"VELASQUEZ HERNANDEZ KEIVIN JOHAN",
            email:"keivinjvh@gmail.com",
            celular:"3015564994",
            asistio:undefined,
            img:"img/user.png"
        },
    "2016214082":
        {
            nombre:"VENEGAS VIDES RODRIGO JOSE",
            email:"rodrigojosevides@gmail.com",
            celular:"3167745562",
            asistio:undefined,
            img:"img/user.png"
        },
};

/**
 * @return {string}
 */
function Render(codigo,estudiante)
{
    return (
        `<div class="col-md-4">
            <div class="card card-profile estudiante" id="est_${codigo}">
                <div class="card-header card-avatar">
                    <a class="#">
                        <img src="${estudiante.img}" class="img">
                    </a>
                </div>
                <div class="card-body">
                    <h6 class="card-title">${estudiante.nombre}</h6>
                    <h6 class="card-category text-muted">${codigo}</h6>
                    <div class="container text-left">
                        <h6>Correo: <span class="text-lowercase">${estudiante.email}</span></h6>
                        <h6>Celular: ${estudiante.celular}</h6>
                        <div class="margin-top">
                            <button class="btn btn-success btn-round" onclick="MarcarAsistencia(true,'${codigo}')">
                                <i class="fas fa-check"></i>
                            </button>
                            <button class="float-right btn btn-danger btn-round" onclick="MarcarAsistencia(false,'${codigo}')">
                                <i class="fas fa-times"></i>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`
    );
}

/**
 * @return {string}
 */
function ToHtml()
{
    let html = "";
    $.each(estudiantes,(cod,estudiante)=>
    {
        html += Render(cod,estudiante);
    });
    
    return html;
}


function MarcarAsistencia(asistencia,codigo)
{

    if(asistencia)
    {
        $('#est_'+codigo).addClass('asistio');
        estudiantes[codigo].asistio = true;
    }else
    {
        $('#est_'+codigo).addClass('fallo');
        estudiantes[codigo].asistio = false;
    }


    $('#est_'+codigo+" button").hide(400);
}

/**
 * @return {boolean}
 */
function Registrados()
{
    for(codigo in estudiantes)
    {
        if(estudiantes[codigo].asistio === undefined)return false;
    }

    return true;
}


function getInformation()
{
    let est_asistidos = [];
    let est_noAsistidos = [];

    $.each(estudiantes,(cod,estudiante)=>
    {
        if(estudiante.asistio)
        {
            est_asistidos.push(estudiante);
        }else
        {
            est_noAsistidos.push(estudiante);
        }
    });

    return {est_asistidos,est_noAsistidos};
}


function RenderInformation(inf)
{
    let html = "Estudiantes Asistidos: " + inf.est_asistidos.length;
    html += "<ol>";
    $.each(inf.est_asistidos,(i,estudiante)=>
    {
       html += "<li>"+estudiante.nombre+"</li>"
    });

    html += "</ol><br>Estudiantes que faltaron: "+inf.est_noAsistidos.length;
    html += "<ol>";

    $.each(inf.est_noAsistidos,(i,estudiante)=>
    {
        html += "<li>"+estudiante.nombre+"</li>";
    });

    return html;
}


$(document).ready(()=> //Scripts cuando el documento este listo
{
    $('#lista').html(ToHtml());

    $('#btn_asistencia').on('click', ()=>
    {

        if(Registrados())
        {
            $('#mensaje-titulo').html('<h3>Lista de estudiantes.</h3>');
            $('#mensaje-cuerpo').html(RenderInformation(getInformation()));
        }else
        {
            $('#mensaje-titulo').html('<h3>Alerta</h3>');
            $('#mensaje-cuerpo').text('Aun no se ha registrado la asistencia de todos los estudiantes');
        }

        $('#mensaje').modal({show:true});
    });
});



