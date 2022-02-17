const makeCase = function (input, type) {
  if (!Array.isArray(type)) {
    type = [type]
  }

  for (let i = 0; i < type.length; i++) {
    input = formatStr(input, type[i])
  }
  return input
}


const formatStr = function (input, type) {
  let stringOut = [];

  if (type === "camel") {
    for (let c = 0; c < input.length; c++) {
      if (input[c] != " ") {
        stringOut.push(input[c]);
      } else {
        stringOut.push(input[c + 1].toUpperCase());
        c++;
      }
    }
  } else if (type === "pascal") {
    stringOut.push(input[0].toUpperCase());
    for (let p = 1; p < input.length; p++) {
      if (input[p] != " ") {
        stringOut.push(input[p]);
      } else {
        stringOut.push(input[p + 1].toUpperCase());
        p++
      }
    }
  } else if (type === "snake") {
    for (let s = 0; s < input.length; s++) {
      if (input[s] === " ") {
        stringOut.push("_")
      } else {
        stringOut.push(input[s]);
      }
    }
  } else if (type === "kebab") {
    for (let k = 0; k < input.length; k++) {
      if (input[k] === " ") {
        stringOut.push("-")
      } else {
        stringOut.push(input[k]);
      }
    }
  } else if (type === "title") {
    stringOut.push(input[0].toUpperCase());
    for (let t = 1; t < input.length; t++) {
      if (input[t] === " ") {
        stringOut.push(" ");
        stringOut.push(input[t + 1].toUpperCase());
        t++;
      } else {
        stringOut.push(input[t]);
      }
    }
  } else if (type === "vowel") {
    for (let v = 0; v < input.length; v++) {
      if (input[v] === "a" || input[v] === "e" || input[v] === "i" || input[v] === "o" || input[v] === "u") {
        stringOut.push(input[v].toUpperCase());
      } else {
        stringOut.push(input[v]);
      }
    }
  } else if (type === "consonant") {
    for (let o = 0; o < input.length; o++) {
      if (input[o] === "a" || input[o] === "e" || input[o] === "i" || input[o] === "o" || input[o] === "u") {
        stringOut.push(input[o]);
      } else {
        stringOut.push(input[o].toUpperCase());
      }
    }
  } else if (type === "upper") {
    for (let u = 0; u < input.length; u++) {
      stringOut.push((input[u]).toUpperCase());
    }
  } else if (type === "lower") {
    for (let l = 0; l < input.length; l++) {
      stringOut.push((input[l]).toLowerCase());
    }
  }

  return String(stringOut).replaceAll(",", "");
};

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));