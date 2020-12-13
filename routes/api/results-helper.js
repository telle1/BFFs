
const Results = require('../../models/Results')


async function getResultsAndRank(){

let allResults = await Results.find({quiz: quiz.id}).lean() //an array of objects //use .lean to turn it into a JSON object
allResults.sort((a,b) => (a.score > b.score) ? -1 : ((b.score > a.score) ? 1 : 0)); //sort by score

allResults[0].rank = 1
for (let i=1; i<allResults.length; i++){
    allResults[i].rank = i+1 
    if (allResults[i].score === allResults[i-1].score){
        allResults[i].rank = allResults[i-1].rank
    }
}

res.json({"allResults": allResults})

}

module.exports.getResultsAndRank = getResultsAndRank