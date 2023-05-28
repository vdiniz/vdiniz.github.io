function load(){
    
    var img = window.document.getElementById('photo');
    var msg = window.document.getElementById('msg');
    var date = new Date();

    var hour = date.getHours();

    msg.innerHTML = `Agora são ${hour} horas`;

    if(hour >= 0 && hour < 12){
        //Bom dia
        document.body.style.background = '#32694c';
        img.src = 'manha.jpg';
    } else if ( hour >= 12 && hour < 18){
        //Boa tarde
        document.body.style.background = '#607185';
        img.src = 'tarde.jpg';


    } else {
        //Boa noite
        document.body.style.background = '#000002'
        img.src = 'noite.jpg';

    }

}


