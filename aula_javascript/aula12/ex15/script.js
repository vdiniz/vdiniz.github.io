function verify(){

    var date = new Date();
    var year = date.getFullYear();
    var input_year = document.getElementById('txtano');

    var res = document.querySelector('div#res');

    if(input_year.value.length == 0 || Number(input_year) > year){
        window.alert("Erro! Verifique os dados!");
    } else {
        var sex = document.getElementsByName('radsex');
        var age = year - Number(input_year.value);
        res.innerHTML = `Idade calculada: ${age}.`;

        var img = document.createElement('img');
        img.setAttribute('id', 'foto');

        var gen = '';

        if (sex[0].checked){
            gen = 'Homem';

            if(age >= 0 && age < 10){
                //criança
                img.setAttribute('src','crianca_h.jpg');
            } else if(age < 21){
                //Jovem
                img.setAttribute('src','jovem_h.jpg');

            } else if(age < 50){
                //Adulto
                img.setAttribute('src','adulto_h.jpg');

            } else {
                //Idoso
                img.setAttribute('src','idoso_h.jpg');

            }
        } else if (sex[1].checked){
            gen = "Mulher";

            if(age >= 0 && age < 10){
                //criança
                img.setAttribute('src','crianca_m.jpg');
            } else if(age < 21){
                //Jovem
                img.setAttribute('src','jovem_m.jpg');
            } else if(age < 50){
                //Adulto
                img.setAttribute('src','adulto_m.jpg');
            } else {
                //idoso
                img.setAttribute('src','idoso_m.jpg');
            }
                
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gen} com ${age} anos.`
        res.appendChild(img);

    }

}