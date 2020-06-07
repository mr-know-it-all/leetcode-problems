// In a town, there are N people labelled from 1 to N.  There is a rumor that one of these people is secretly the town judge.

// If the town judge exists, then:

// The town judge trusts nobody.
// Everybody (except for the town judge) trusts the town judge.
// There is exactly one person that satisfies properties 1 and 2.
// You are given trust, an array of pairs trust[i] = [a, b] representing that the person labelled a trusts the person labelled b.

// If the town judge exists and can be identified, return the label of the town judge.  Otherwise, return -1.

// findJudge :: (Number, [[Number, Number]]) -> Number
const findJudge = (N, trust) => {
    if(N === 1 && trust.length === 0) return N;

    const cache = {};
    const possibleJudges = {};

    for(let i = 0; i < trust.length; i++) {
        if(possibleJudges[trust[i][1]]) possibleJudges[trust[i][1]] += 1;
        else possibleJudges[trust[i][1]] = 1;

        cache[trust[i][0]] = 1;
    }

    // the judge doesn't trust anybody (he's not in cache) but everybody except himself (N - 1) trusts him
    for(let i = 1; i <= N; i++) if(!cache[i] && possibleJudges[i] === N - 1) return i;

    return -1;
};
