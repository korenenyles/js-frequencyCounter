document.getElementById("countButton").onclick = function() {
  // your code will go here ...
  let typedText = document.getElementById("textInput").value;
  typedText = typedText.toLowerCase();
  typedText = typedText.replace(/[^a-z'\s]+/g, "");
  const letterCounts = {};
  for (let i = 0; i < typedText.length; i++) {
    currentLetter = typedText[i];
    if (letterCounts[currentLetter] === undefined) {
      letterCounts[currentLetter] = 1;
    } else {
      letterCounts[currentLetter]++;
    }
  }
  for (let letter in letterCounts) {
    const span = document.createElement("span");
    const textContent = document.createTextNode(
      '"' + letter + '": ' + letterCounts[letter] + ", "
    );
    span.appendChild(textContent);
    document.getElementById("lettersDiv").appendChild(span);
  }
  const words = typedText.split(" ");
  let wordCount = {};
  for (let i = 0; i < words.length; i++) {
    currentWord = words[i];
    if (wordCount[currentWord] === undefined) {
      wordCount[currentWord] = 1;
    } else {
      wordCount[currentWord]++;
    }
    for (let word in wordCount) {
      const span = document.createElement("span");
      const textContent = document.createTextNode(
        '"' + word + '": ' + wordCount[word] + ", "
      );
      span.appendChild(textContent);
      document.getElementById("wordsDiv").appendChild(span);
    }
  }
};
