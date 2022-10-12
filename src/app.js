let message = [];
let pronoun = ["the", "our"];
let adj = ["great", "big"];
let noun = ["jogger", "racoon"];
let dom = ["com", "net", "gr", "er", "oon"];

let randomPronoun = pronoun[Math.floor(Math.random() * pronoun.length)];
let randomAdj = adj[Math.floor(Math.random() * adj.length)];
let randomNoun = noun[Math.floor(Math.random() * noun.length)];
let randomDom = dom[Math.floor(Math.random() * dom.length)];

for (let x = 0; x < pronoun.length; x++) {
  for (let y = 0; y < adj.length; y++) {
    for (let z = 0; z < noun.length; z++) {
      for (let w = 0; w < dom.length; w++) {
        let string = noun[z];
        let domString = dom[w];
        let substract = string.substr(string.length - domString.length);
        let firstPart = string.substr(0, string.length - domString.length);
        if (substract == dom[w]) {
          let newdomain = pronoun[x] + adj[y] + firstPart + "." + substract;
          console.log(newdomain);
          message.push(newdomain + "<br>");
        } else {
          let domain = pronoun[x] + adj[y] + noun[z] + "." + dom[w];
          console.log(domain);
          message.push(domain + "<br>");
        }
      }
    }
  }
}

const withoutCommas = message.join("");
document.querySelector("#header").innerHTML = withoutCommas;
