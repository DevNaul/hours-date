function hoursDate (hoursDate) {
return hoursDate >= 10 ? hoursDate : `0${hoursDate}`;
}

function formsDate (date) {
    const dia = date.getDate();
    const mes = date.getMonth() + 1;
    const ano = date.getFullYear();
    const horas = hoursDate(date.getHours());
    const minutos = hoursDate(date.getMinutes());
    const segundos = hoursDate(date.getSeconds());

    return `${hoursDate(dia)}/${hoursDate(mes)}/${ano} ${hoursDate(horas)}:${hoursDate(minutos)}:${(segundos)}`;
} 

const date = new Date();
const dateBrasil = formsDate(date);
console.log(dateBrasil); 

function getDayWeek (dayWeek) {
    let dayWeekTexto;

    switch (dayWeek) {
        // No javascript o número 0 conta ou seja o (domingo é 0) e (segunda é 1)
        case 0:
            dayWeekTexto = 'Sunday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "domingo"
        case 1:
            dayWeekTexto = 'Monday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "Segunda"
        case 2:
            dayWeekTexto = 'Tuesday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "Terça"
        case 3:
            dayWeekTexto = 'Wednesday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "Quarta"
        case 4:
            dayWeekTexto = 'Thursday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "Quinta"
        case 5:
            dayWeekTexto = 'Friday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "Sexta"
        case 6:
            dayWeekTexto = 'Saturday'; // vai puxar o dia da semana 
            return dayWeekTexto; // e vai retornar o dia selecionado "Sábado"
        default:
            console.log('Dia inválido');
            return; // ou break; // se não deseja retornar nada caso o dia seja inválido
    }
}

const data = new Date();
const dayWeek = data.getDay();
const dayWeekTexto = getDayWeek(dayWeek);

document.getElementById("dateBrasil").textContent = dateBrasil;
document.getElementById("dayWeekTexto").textContent = dayWeekTexto;
// Exibir o dia da semana na página HTML  
// Aqui você pode colocar o id do elemento HTML que você deseja mostrar o dia da semana.  
// Eu usei um id chamado "dayWeekTexto" para mostrar na página.  
// Para testar, você pode alterar o id e usar o id que você deseja usar.

console.log(dayWeek, dayWeekTexto);
