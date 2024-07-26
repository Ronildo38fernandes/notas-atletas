
class Atleta{
    constructor(nome, notas){
        this.nome = nome.toUpperCase()
        this.notas = notas
        this.media = this.cacularMedia()
    }

    cacularMedia(){
        if(this.notas.length > 1){
            //ordena em ordem crescente
            this.notas.sort((a,b) => {
                if(a < b) return -1
            })

            let notasComputadas = this.notas.slice(1,4)
            
            //faz o Cálculo da média
            this.media = notasComputadas.reduce(function (a , b){
                return a + b
            },0) / notasComputadas.length
            
        }
        return this.media
    }
}

//simulando a criação dos objetos atleta e notas dada pelo jurado
let jogador1 = new Atleta("Cesar Abascal",[10, 9.34, 8.42, 10, 7.88])
let jogador2 = new Atleta("Fernando Puntel",[8, 10, 10, 7, 9.33])
let jogador3 = new Atleta("Daiane Jelinsky",[7, 10, 9.5, 9.5, 8])
let jogador4 = new Atleta("Bruno Castro",[10, 10, 10, 9, 9.5])

let atletas = [jogador1,jogador2,jogador3,jogador4]



atletas.forEach(atleta => {
    console.log(`Atleta: ${atleta.nome} notas: ${atleta.notas.join(", ")} Média: ${atleta.media}`)
})








