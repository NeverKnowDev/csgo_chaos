
let votes = [0, 0, 0, 0];


function setVotes(arr) {
    votes = arr;
}

function increase_vote(index) {
    if(votes[index - 1] != undefined)
     votes[index - 1]++;
}

function getVotes() {
    return votes;
}

function resetVotes() {
    votes = [0, 0, 0, 0]
}


/*
setInterval(() => {
    for(var i in votes) {
        votes[i] += Math.floor(Math.random() * 10);
    }
}, 1000)
*/

export {getVotes, setVotes, resetVotes, increase_vote}