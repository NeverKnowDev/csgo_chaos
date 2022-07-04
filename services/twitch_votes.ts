let votes = [0, 0, 0, 0];

function setVotes(arr) {
  votes = arr;
}

function increase_vote(index) {
  console.log(`Increasing the vote for ${index}`);
  console.log(votes);
  if (votes[index - 1] != undefined) {
    votes[index - 1]++;
    console.log(`The vote for ${index} is ${votes[index - 1]}`);
  } else {
    console.log('Index not found');
  }
}

function getVotes() {
  return votes;
}

function resetVotes() {
  votes = [0, 0, 0, 0];
}

/*
setInterval(() => {
    for(var i in votes) {
        votes[i] += Math.floor(Math.random() * 10);
    }
}, 1000)
*/

//Voting system that includes setVotes, increase_vote(index) and getVotes and resetVotes functions
class Votes {
    private votes: number[];
    constructor() {
        this.votes = [0, 0, 0, 0];
    }
    
    setVotes(arr) {
        this.votes = arr;
    }

    //Increase the vote for the specified index
    increase_vote(index) {
        if (this.votes[index - 1] != undefined) {
            this.votes[index - 1]++;
        } else {
            console.log('Index not found');
        }
    }

    //Reset the votes to 0
    resetVotes() {
        this.votes = [0, 0, 0, 0];
    }

    //Get the votes
    getVotes() {
        return this.votes;
    }
}

let voting = new Votes();


export default voting;
export { getVotes, setVotes, resetVotes, increase_vote };
