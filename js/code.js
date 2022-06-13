//Clase de la estructura de las Preguntas
class Questions{
    constructor(question, choiceFalse, choiceFalse1, choiceFalse2, answerTrue){
        this.question = question;
        this.choiceFalse = choiceFalse;
        this.choiceFalse1 = choiceFalse1;
        this.choiceFalse2 = choiceFalse2;
        this.answerTrue = answerTrue;
    }
}
//Aqui dentro de este Array vacio, se almacenan todas las preguntas que carga el usuario
let arrayQuestions = [];

alert('Bienvenidos a nuestros Colaboradores de QUIzPlay\nAhora vas a poder dejarnos tus desafios de preguntas para que usemos en nuestros juegos!!');

//Condicional de que si desar agregar mas preguntas o terminar el ciclo con "salir"
do {
    listQuestions = prompt('Ingresa la pregunta para usar en nuestros QUIz o escribe "salir" para terminar','¿?');
    if ( listQuestions === "salir" || listQuestions === "SALIR" || listQuestions === "Salir"){
        break;
    }else if ( listQuestions === "" || listQuestions === "¿?"){
        alert('ERROR!: Campo Vacio\nPor favor escriba la pregunta');
    }
    else{
            question = listQuestions;
        alert('Solo podes ingresar 3 respuestas Falsas y por ultimo la respuesta Correcta')
        let choiceFalse = prompt('Ingresa la primera respuesta Falsa');
        while (choiceFalse === "") {
            alert('ERROR!: Campo Vacio\nPor favor escriba la primer respuesta Falsa');
            choiceFalse = prompt('Ingresa la primera respuesta Falsa');
        }
        let choiceFalse1 = prompt('Ingresa la segunda respuesta Falsa');
        while (choiceFalse1 === "") {
            alert('ERROR!: Campo Vacio\nPor favor escriba la segunda respuesta Falsa');
            choiceFalse1 = prompt('Ingresa la segunda respuesta Falsa');
        }
        let choiceFalse2 = prompt('Ingresa la tercer respuesta Falsa');
        while (choiceFalse2 === "") {
            alert('ERROR!: Campo Vacio\nPor favor escriba la tercer respuesta Falsa');
            choiceFalse2 = prompt('Ingresa la tercer respuesta Falsa');
        }
        let answerTrue = prompt('Ingresa la respuesta CORRECTA');
        while (answerTrue === "") {
            alert('ERROR!: Campo Vacio\nPor favor escriba la respuesta CORRECTA');
            answerTrue = prompt('Ingresa la respuesta CORRECTA');
        }
        arrayQuestions.push(new Questions(question, choiceFalse, choiceFalse1, choiceFalse2, answerTrue));
    }
} while (listQuestions != "salir" || listQuestions != "SALIR" || listQuestions != "Salir");

//Mensaje con saludo y informando la cantidad de preguntas que ingreso
alert(`Gracias por cargar ${arrayQuestions.length} preguntas desafios, vamos a revisar el contenido y si cumple nuestras politicas seran utilizadas en nuestros QUIz\nA continuacion te dejamos el detalle de las preguntas enviadas.`);

//Informacion de dia y horario en cual ingreso la informacion.
document.write(`<center><h6>La informacion enviada quedo registrada el dia: ${new Date()}</h6></center>`);

//Funcion la cual muestra al usuario  todas las preguntas con sus respuestas ingresadas!
arrayQuestions.forEach((questions, indice) => {
    document.write(`<center><h4>Pregunta Nº: ${indice + 1} ==> ${questions.question}</h4><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse}</h5></b><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse1}</h5></b><h5>Respuesta FALSA es: <b style='color:red'>${questions.choiceFalse2}</h5></b><h5>Respuesta CORRECTA es: <b style='color:greenyellow'>${questions.answerTrue}</h5></b></center>`)
;});


