
class Atleta{
    constructor(nome, idade,peso,altura,notas){
        this.nome = nome.toUpperCase()
        this.notas = notas
        this.idade = idade
        this.peso = peso
        this.altura = altura
        this.categoria = this.obtemCategoria(idade)
        this.imc = this.obtemIMC(peso,altura)
        this.media = this.cacularMedia()
    }


    obtemCategoria(idade){
        if(idade >=16 && idade <= 30){
            return "Adulto"
        }else if(idade>=14 && idade <16){
            return "Intermediário"
        }else if(idade >=12 && idade< 14){
            return "Juvenil"
        }else if(idade <= 9 && idade < 12){
            return "Infantil"
        }else{
            return "Sem Categoria"
        }
    }

    obtemIMC(peso,altura){
        return peso / (altura * altura) 
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
let jogador1 = new Atleta("Cesar Abascal",30,80,1.70,[10, 9.34, 8.42, 10, 7.88])
let jogador2 = new Atleta("Fernando Puntel",10,40,1.20,[8, 10, 10, 7, 9.33])
let jogador3 = new Atleta("Daiane Jelinsky",13,50,1.55,[7, 10, 9.5, 9.5, 8])
let jogador4 = new Atleta("Bruno Castro",15,65,1.68,[10, 10, 10, 9, 9.5])

let atletas = [jogador1,jogador2,jogador3,jogador4]



atletas.forEach(atleta => {
    console.log(`Atleta: ${atleta.nome}
    Idade:${atleta.idade} 
    Peso:${atleta.peso}  
    Notas: ${atleta.notas.join(", ")} 
    Categoria: ${atleta.categoria} 
    IMC:${atleta.imc}
    Média Valida: ${atleta.media}`)
})








