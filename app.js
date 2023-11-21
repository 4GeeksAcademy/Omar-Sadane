let pronouns = ['the', 'our'];
let adjectives = ['great', 'big'];
let nouns = ['jogger', 'racoon'];
let host = ['.com', '.net', '.us', '.io']
for (let i = 0; i < pronouns.length; i++) {
    for (let j = 0; j < adjectives.length; j++) {
        for (let k = 0; k < nouns.length; k++) {
            for (let h = 0; h < host.length;h++){

                console.log(pronouns[i] + adjectives[j] + nouns[k] + host[h]);
            }
        }
    }
}
