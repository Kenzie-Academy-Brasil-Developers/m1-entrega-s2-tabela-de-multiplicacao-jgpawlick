/*
Criar uma fução que receba numero que deseja multiplicar --- OK
1- criar uma variavel array --- OK
2- usar looping para contar de 0 até number no eixo X e usar **.push()** ---ArrayVaziu--- .push([]) --- OK
3- usar while para repetir a ação ---error--- usar for com counter Y --- OK
4- dar push em cada array com a mutiplica da tabela
5- rcon

*/

function multiplyTable(number) {
    let myTable = [];

    for (let counterX = 0; counterX <= number; counterX++) {
        myTable.push([])

        for (let counterY = 0; counterY <= number; counterY++) {
            myTable[counterX].push(counterX * counterY)

        }

    }
    console.table(myTable)
    return myTable

}