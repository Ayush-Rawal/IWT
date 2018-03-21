var stack1 = [], stack2 = [], usedCards = []

document.writeln('<h3>Player1: </h3>')

for(var i = 0; i < 13; i++) {
    var ran = genRand()
    while (usedCards.indexOf(ran) !== -1){
        ran = genRand()
    }
    usedCards.push(ran)
    stack1.push(ran)
    
    document.write('<img src="./'+ ran + '.jpg"  />')
}

document.writeln('<br /><h3>Player2: </h3>')
for(var i = 0; i < 13; i++) {
    var ran = genRand()
    while (usedCards.indexOf(ran) !== -1){
        ran = genRand()
    }
    usedCards.push(ran)
    stack2.push(ran)
    document.write('<img src="./'+ ran + '.jpg"  />')
}


stack1 = findFreq(stack1)
stack2 = findFreq(stack2)

console.log("Freq", "Max")
console.log(stack1, stack2)

if (stack1[0] > stack2[0] ) {
    document.writeln('<br /><h2>Player1 is the winner</h2>')
} else if (stack2[0] > stack1[0]) {
    document.writeln('<br /><h2>Player2 is the winner</h2>')
} else {
    if (stack1[1] > stack2[1]) {
        document.writeln('<br /><h2>Player1 is the winner</h2>')        
    } else if (stack2[1] > stack1[1]) {
        document.writeln('<br /><h2>Player2 is the winner</h2>')                
    } else {
        document.writeln('<br/><h2>Both freq and maximum value are equal!, both Win!</h2>')
    }
}

// Random num b/w 1, 52
function genRand () {
    var random = Math.ceil(Math.random()*52)
    return random
}

function findCardVal (card) {
    return Math.ceil(card/4)
}

function findFreq (arr) {

    arr = arr.map(card => findCardVal(card));
    var freq = new Array(13).fill(0)
    for( card of arr){
        freq[card-1]++;
    }
    var maxFreq = Math.max.apply(null, freq) 
    return [maxFreq, freq.lastIndexOf(maxFreq)]
}
