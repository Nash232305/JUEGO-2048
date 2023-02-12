let tablero = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];



//****************************************************************************************** */
//inicio del programa
window.onload = function(){
    iniciarTablero();

}
//****************************************************************************************** */


/**
 * Funcion que inicializa una tabla, colocando un 2 o 4 de manera aleatoria en dos casilla.
 * Si hay algo en el tablero, este SE LIMPIA POR COMPLETO
 */
function iniciarTablero(){
    //limpiando el tablero
    tablero = [[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]];

    //colocar un 2 y un 4 en coordenadas random en el tablero
    //primero el 2
    tablero[Math.floor((Math.random()*(3-0+1))+0)][Math.floor((Math.random()*(3-0+1))+0)]=2;
    
    //luego el 4, SABIENDO QUE RANDOM PUEDE REPETIR LAS COORDENADAS
    while(true){
        //Creamos la nueva coordenada
        x=Math.floor((Math.random()*(3-0+1))+0)
        y=Math.floor((Math.random()*(3-0+1))+0)
        
        //validar que el espacio este vacio (tenga un cero)
        if(tablero[x][y]==0){
            tablero[x][y]=4;
            break;
        }
    }
    dibujar();
}
/**
 * Funcion que dibuja dentro de la matriz lo que haya dentro de la matriz del codigo
 * Restricciones: No dibuja ceros
 */

function dibujar(){
    for(let i =0; i <= 3; i++){
        for(let j = 0; j <= 3; j++){
            if (tablero[i][j]==0){
                continue
            }
            else{
                //Busca los divs que tenga de id i.j y les pone el numero que hay en a matriz
                let numero = tablero[i][j];
                //donde se ponga el numero su fondo se pone blanco
                document.getElementById(i+"."+j).style.color = "black";
                document.getElementById(i+"."+j).innerHTML = numero;
                document.getElementById(i+"."+j).style.backgroundColor = "beige";
                document.getElementById(i+"."+j).style.fontSize = "50px";
                document.getElementById(i+"."+j).style.textAlign = "center";
                //ESTILO DE LA LETRA DEPENDIENDO DEL NUMERO
                document.getElementById(i+"."+j).style.fontFamily = " sans-serif";
                    
            }
        }

    }

}
function moverArriba(tablero) {
    for (let j = 0; j < tablero.length; j++) {
      for (let i = 1; i < tablero.length; i++) {
        if (tablero[i][j] !== 0) {
          let k = i;
          while (k > 0 && tablero[k-1][j] === 0) {
            tablero[k-1][j] = tablero[k][j];
            tablero[k][j] = 0;
            k--;
          }
        }
      }
    }
  }
  
  function moverAbajo(tablero) {
    for (let j = 0; j < tablero.length; j++) {
      for (let i = tablero.length - 2; i >= 0; i--) {
        if (tablero[i][j] !== 0) {
          let k = i;
          while (k < tablero.length - 1 && tablero[k+1][j] === 0) {
            tablero[k+1][j] = tablero[k][j];
            tablero[k][j] = 0;
            k++;
          }
        }
      }
    }
  }
  
  
  function moverIzquierda(tablero) {
    for (let i = 0; i < tablero.length; i++) {
      for (let j = 1; j < tablero.length; j++) {
        if (tablero[i][j] !== 0) {
          let k = j;
          while (k > 0 && tablero[i][k-1] === 0) {
            tablero[i][k-1] = tablero[i][k];
            tablero[i][k] = 0;
            k--;
          }
        }
      }
    }
  }
  
  function moverDerecha(tablero) {
    for (let i = 0; i < tablero.length; i++) {
      for (let j = tablero.length - 2; j >= 0; j--) {
        if (tablero[i][j] !== 0) {
          let k = j;
          while (k < tablero.length - 1 && tablero[i][k+1] === 0) {
            tablero[i][k+1] = tablero[i][k];
            tablero[i][k] = 0;
            k++;
          }
        }
      }
    }
  }
  
  

function actualizarTablero() {
    for(let i =0; i <= 3; i++){
        for(let j = 0; j <= 3; j++){
            if (tablero[i][j] == 0){
                document.getElementById(i+"."+j).innerHTML = ""; /* remove the text */ 
                document.getElementById(i+"."+j).style.background = "";
            }
            else{
                document.getElementById(i+"."+j).innerHTML = tablero[i][j];
                document.getElementById(i+"."+j).style.backgroundColor = "beige";
                document.getElementById(i+"."+j).style.color = "black";
                document.getElementById(i+"."+j).style.fontSize = "50px";
                document.getElementById(i+"."+j).style.textAlign = "center";
                //ESTILO DE LA LETRA DEPENDIENDO DEL NUMERO
                document.getElementById(i+"."+j).style.fontFamily = " sans-serif";
            }
        }
    }
    
}

function mover(event, tablero) {
    if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(event.code)) {
      if (event.code === "ArrowUp") {
        moverArriba(tablero);
      } else if (event.code === 'ArrowDown') {
        moverAbajo(tablero);
      } else if (event.code === 'ArrowLeft') {
        moverIzquierda(tablero);
      } else if (event.code === 'ArrowRight') {
        moverDerecha(tablero);
      }
      actualizarTablero(tablero);
      agregarFicha(tablero);
      fusionarFichas(tablero);
    }
}


  
  


document.addEventListener('keydown', function(event) {
    mover(event, tablero);
});
  


function agregarFicha(tablero) {
    // Genera una nueva ficha con valor 2 o 4 (con probabilidad 0.9 y 0.1 respectivamente)
    const value = Math.random() < 0.9 ? 2 : 4;
  
    // Genera una posición aleatoria para la nueva ficha en una celda vacía del tablero
    const emptyCells = []; // Celdas vacías del tablero
    for (let i = 0; i < tablero.length; i++) { // Recorre el tablero
      for (let j = 0; j < tablero[i].length; j++) { // Recorre las filas del tablero
        if (tablero[i][j] === 0) {
          emptyCells.push({ row: i, col: j });
        }
      }
    }
    if (emptyCells.length === 0) {
      // No hay celdas vacías en el tablero, no se puede generar una nueva ficha
      return null;
    } 
    const randomIndex = Math.floor(Math.random() * emptyCells.length);
    const { row, col } = emptyCells[randomIndex];
    //si la celda aleatoria no está vacía, busca otra celda vacía
    if (tablero[row][col] !== 0) {
      emptyCells.splice(randomIndex, 1);
      return agregarFicha(tablero);
    }
    
    // Crea la nueva ficha en la posición aleatoria generada
    tablero[row][col] = value;
    return { row, col, value };
  }
   