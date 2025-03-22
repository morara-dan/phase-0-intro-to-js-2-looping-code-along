function writeCards (names, event) {
    let messages = [];
    for(let i = 0; i < writeCards.length +1; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!` )
    }
    return messages
}

let msg = (writeCards(["Charlie", "Samip", "Ali"], "birthday"));
console.log(msg);


let countDown = (number) => {
    while(number >= 0 ){
        console.log(number);
        number --
    }

}

countDown(10)