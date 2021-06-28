// Referências do DOM HTML

const selCidade = document.getElementById('selCidade');
const btnConsultar = document.getElementById('btnConsultar');

const imgTempo = document.getElementById('imgTempo');
const pTemp = document.getElementById('pTemp');



// Lógica da aplicação

import apiTempo from '../services/api.js';

function consultaTempo(){
    const cidade = selCidade.value;

    apiTempo.get(cidade).then(res=>{
        console.log(res.data.results);
        const { temp, condition_slug } = res.data.results;
        console.log(temp);
        console.log(condition_slug);
        displayIcon[condition_slug]();
        pTemp.innerHTML= `Temperatura: ${temp} &deg;C`
    });
}
const displayIcon ={
    storm:()=>{
        imgTempo.setAttribute('src' ,'../assets/tSol.png');
     },
    snow:()=>{ 
        
    },
    hail:()=>{

     },

    rain:()=>{ },

    fog:()=>{ },

    clear_day:()=>{ },

    clear_night:()=>{ 
        imgTempo.setAttribute('src' ,'../assets/tNublado.png');

    },
    
    cloud:()=>{ },

    cloudly_day:()=>{
        imgTempo.setAttribute('src' ,'../assets/tNublado.png');
        
     },
    cloudly_night:()=>{ },

    none_day:()=>{ },

    none_night:()=>{ },
}
btnConsultar.onclick = ()=>{
    consultaTempo();
};
