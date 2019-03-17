if(localStorage.getItem('nombre'))window.location.href = "asistencia.html";

let user = {
    "email":"admin@gmail.com",
    "pass":"123",
    "nombre":"Johan robles"
};

$('#form-login').on('submit', ()=>
{
    let form = {};

    $.each($('#form-login').serializeArray(), (i,input)=>
    {
        form[input.name] = input.value;
    });

    if(form['email'].toLowerCase() === user['email']
        && form['pass'] === user['pass']
    )
    {
        localStorage.setItem('nombre',user.nombre);
        window.location.href = "asistencia.html";
    }else
    {
        $('#text-alert').text('Correo o Contraseña incorrectos');
        $('#alert-form').show(200);
        setTimeout(()=>
        {
            $('#alert-form').hide(200);
        },2000);
    }

    return false;
});



$('#pass input').on('input',()=>
{
    let input = $('#pass input');
    if(input.val() === '')
    {
        $('#pass').addClass('has-danger').removeClass('has-success');
        $('#respuesta-pass').html(" <i class=\"material-icons\">error</i>");
    }else
    {
        $('#pass').addClass('has-success').removeClass('has-danger');
        $('#respuesta-pass').html(" <i class=\"material-icons\">done</i>");
    }
});

$('#email input').on('input',()=>
{
    let input = document.getElementById('input-email');
    if(!input.validity.typeMismatch && input.value)
    {
        $('#email').addClass('has-success').removeClass('has-danger');
        $('#respuesta-email').html(" <i class=\"material-icons\">done</i>");
    }else
    {
        $('#email').addClass('has-danger').removeClass('has-success');
        $('#respuesta-email').html(" <i class=\"material-icons\">error</i>");
    }
});