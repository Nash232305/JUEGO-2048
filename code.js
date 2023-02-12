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
                document.getElementById(i.toString()+"."+j.toString()).innerHTML=numero.toString()
            }
        }
    }

function deslizarIzquierda(){


}    

function deslizarDerecha(){
    

}    

function deslizarArriba(){
    

}    

function deslizarAbajo(){
    

}    

}