// input: aguas, par, rayo, carro, paraguas, parquimetro, metro
// output: paraguas

function checkWord(words) {
    let word_includes_count = {}

    // words.forEach(word => {
    //     word_lenght.push(word.length)
    // });
    // let maxLenght = Math.max.apply(null, word_lenght);
    // words.forEach(word => {
    //     if (word.length === maxLenght) {
    //         console.log(`La palabra mas larga es ${word}`);
    //     }
    // });
    
    words.forEach(word => {
       let coun = 0;
        for (let i = 0; i < words.length; i++) {
            if (word != words[i] && word.includes(words[i])) coun++;
        }
        word_includes_count[word] = coun
    });
    console.log(word_includes_count);
}

checkWord(["aguas", "par", "rayo", "carro", "paraguas", "parquimetro", "metro"])

