//----------------------------------------------------------------1
/*Dada una cadena de texto (string) separe y muestre en consola los caracteres de forma desordenada uno por línea, 1 caracter a la vez.*/
let testWord = "esternocleidomastoideo";

function mezclar(word) {
  const random = Math.random();
  if (random < 0.5) {
    return -1
    
  }else{
    return 1
  }
}

function contadorPalabras(word) {
  let split = word.split('').sort(mezclar)
  split.forEach(letter=>console.log(letter))
  
}

console.log(mezclar(testWord));
contadorPalabras(testWord);


//----------------------------------------------------------------2
/*Dado un string buscar en un listado e indicar si se encuentra o no
ahí contenido, debe soportar mayúsculas y minúsculas sin importar
la variación, es lo mismo Carro, CARRO o carro.*/

let testTargetWordA = "Sabrosura";
let testTargetWordB = "Sazón";
let testTargetWordC = "Tempurado";
let testWordsList = [
    "Sabr0sura",
    "Gozadera",
    "ritmo",
    "TEMPURADO",
    "SAZON",
    "Chevere",
    "Meneo",
];

// pruebe para cada palabra A, B y C
function wordSearcherIgnoreCase(targetWord, wordsList) {
    let minusList = wordsList.map(element => element.toLowerCase());
    targetWord= targetWord.toLowerCase();
    targetWord= normalizeString(targetWord);
    console.log(minusList)
    console.log(minusList.some(element => targetWord.toLowerCase() === element ))
}

function normalizeString (targetWord) {
    return targetWord = targetWord.normalize ("NFD").replace(/[\u0300-\u036f]/g,"");
}
wordSearcherIgnoreCase(testTargetWordA,testWordsList);
wordSearcherIgnoreCase(testTargetWordB,testWordsList);
wordSearcherIgnoreCase(testTargetWordC,testWordsList);


//----------------------------------------------------------------3
/*Dado un arreglo de strings, retornar la palabra más larga,
la más corta y el tamaño promedio, el arreglo debe ser
entregado por parámetro y puede variar en cantidad de palabras
del arreglo de entrada libremente, debe retornar un objeto
con los valores mencionados*/


let testSampleList = [
  "Capitan",
  "Comandante",
  "Teniente",
  "Cabo",
  "Brigadier",
  "Coronel",
  "Zar",
];
const otrasPalabras = [
  "manzana",
  "papaya",
  "piña"
]

function wordLengthClassifier(wordsList) {
  let totalLetras = 0;
  const palabrasOrdenadas = wordsList.sort((a, b) => {
    if (a.length < b.length) {
      return -1;
    } else if (a.length > b.length) {
      return 1;
    } else {
      return 0;
    }
  })
  palabrasOrdenadas.forEach(palabra => totalLetras += palabra.length);
  const promedioTamaño = totalLetras / palabrasOrdenadas.length;

  return {
    palabraMasLarga: palabrasOrdenadas[palabrasOrdenadas.length - 1],
    palabraMasCorta: palabrasOrdenadas[0],
    promedioTamaño
  }
}
console.log(wordLengthClassifier(testSampleList))
console.log(wordLengthClassifier(otrasPalabras))

//---------------------------------------------------------------4

/*Dado un string retorna si este es o no un palíndromo. No debe diferenciar entre mayúsculas y minúsculas*/

let onVerificationWordA = "reconocer";
let onVerificationWordB = "querer";
let onVerificationWordC = "Gomosos";
let onVerificationWordD = "Somos";

function palindromeVerifier(palabra) {
let poliWord = palabra.toLowerCase().split("").reverse().join("");
if (poliWord === palabra) {
    console.log("The Word" + " "+ palabra  + " "+"is polindrome")} 
    else {
        console.log("The Word" + palabra +  " "+"iS not polindrome")
    }
}

palindromeVerifier(onVerificationWordA);
palindromeVerifier(onVerificationWordB);
palindromeVerifier(onVerificationWordC);
palindromeVerifier(onVerificationWordD);



   // ;)

//---------------------------------------------------------------5

/*Dado un objeto que contiene una lista de palabras contar el
número de letras vocales y consonantes y retornarlo en un arreglo de 2 posiciones.*/ 
  
let containerTestObject = {
  list:["Cumbamba", "Oreja", "Nariz", "Ojo", "Lengua", "Diente"]
}

function lettersCounter(containerTestObject) {
  const list = containerTestObject.list;
  let vocales = 0;
  let consonantes = 0;
  list.forEach(word => {
    word.split('').forEach(letter => {
      if (
        letter === 'a' ||
        letter === 'e' ||
        letter === 'i' ||
        letter === 'o' ||
        letter === 'u'
      ) {
        vocales++;
       } else {
         consonantes++;
       }       
      
    })
  })
  return [vocales, consonantes];
}
console.log(lettersCounter(containerTestObject));

//---------------------------------------------------------------6

/*Dado 2 arreglos de strings retornar un arreglo con todos los strings.*/
let wordArrayA = ["hola", "¿" ,"cómo", "estás", "?"];
let wordArrayB = ["te", "ves" ,"igual", "te", "ves", "igual"];

function arrayJoiner(listA, listB) {
  const lists = listA.concat(listB);
  console.log(lists);
}
arrayJoiner(wordArrayA, wordArrayB);


//---------------------------------------------------------------7
/*Dado un arreglo de strings indicar qué posiciones del arreglo
son anagramas de una palabra base (recibida como parámetro), retorne las posiciones en un arreglo.*/

let testWordToExplore = "amar";
let wordsToVerify = ["amar", "arma", "rana" , "mara", "rama", "roma", "amor", "ramon", "omar"];

function anagramVerifier(wordToExplore, listOfWords) {

  result = []

  listOfWords.forEach((palabra, index) => {

      if(palabra.split("").every(letra => {
          return wordToExplore.includes (letra);
      })) result.push(index)

  })
}
console.log(anagramVerifier(textWordToExplore))


//---------------------------------------------------------------8

/*Dado un objeto que contiene 2 arreglos, retornar un objeto con 1
arreglo que contiene las palabras sin vocales.*/
let testObjMultiContainer = {
  listA : ["piraña", "cachama", "tilapia", "trucha", "carpa", "salmón"],
  listB : ["rinoceronte", "elefante", "jirafa", "tigre", "gacela", "ñú"]
};

function vocalsRemoverFromObject(objectMultiContainer) {
    
  let lista = objectMultiContainer.listA.concat(objectMultiContainer.listB);
  

  lista.forEach(palabra => {
      let palActual = []
      let result = []
      palabra.split('').forEach(letra => {
          if (letra !== 'a'||
          letra !=='e'||
          letra !=='i'|| 
          letra !== 'o'|| 
          letra !=='u'){
              palActual.push(letra);
          } 
          
      }) 
      result.push(palActual.join(''))
      
  }) 
  return {result}

}
console.log(vocalsRemoverFromObject(testObjMultiContainer));
//---------------------------------------------------------------9

/*Dado un arreglo de palabras reemplazar la última vocal por una x y retornar dicho arreglo.*/

let someWordsToTest = ["compañeros", "estudiantes", "señores", "amigos", "graduandos", "artistas", "universitarios"];

function reemplazarUltimaVocal(words) {
  const replacedArray = words.map(word => {
      let replacedWord;
      for(let i = word.length - 1; i >= 0; i--) {
          const letter = word.charAt(i);
          if(
              letter === 'a'||
              letter ==='e'||
              letter ==='i'|| 
              letter === 'o'|| 
              letter ==='u'
          ) {
              //console.log(word.charAt(i))
              replacedWord = word.substring(0, i) + 'X' +  word.substring(i+1 , word.length );
              break;
          }
      }
      return replacedWord;
  })
  return replacedArray;
  
}
console.log(reemplazarUltimaVocal(someWordsToTest));

//---------------------------------------------------------------10
/*Dada una lista de palabras verificar si alguna de las palabras es la
versión al revés de alguna de las palabras de una segunda lista,
debe contar las identificadas y retornar un objeto con ese conteo.*/

let testListA = ["amor", "sabor", "calor","firma", "mara"];
let testListB = ["roma", "robar", "portar", "arma", "mora"];

function doubleListVerifier(listA, listB) {


  let doubleNumber = 0;
  let newB=[];

  for (let i = 0; i < listB.length; i++) {

      newB[i]=listB[i].split("").reverse().join("");

  }

  for (let i = 0; i < listA.length; i++) {
      for(let j = 0; j < newB.length; j++){
          if (newB[j] == listA[i]){

              doubleNumber++;

          }return doubleNumber;
      }
  }

  return {doubleNumber}


  //:)
}

console.log(doubleListVerifier(testListA,testListB));
