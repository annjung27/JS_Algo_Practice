// Check if two strings are anagrams of each other.
// One string is an anagram of another if it uses exact same characters
// in exact same quantity. Only consider word characters, and make sure the
// function is case insensitive.
// --- Examples
//   anagrams('heart', 'earth') --> True
//   anagrams('heart', '  earth') --> True
//   anagrams('Heart!', 'EARTH') --> True
//   anagrams('lol', 'lolc') --> False

function anagrams(stringA, stringB) {
  //  Sanitize the input strings (case insensitive, remove non-alphabet characters)
  stringA = stringA.toLowerCase().replace(/[\W_]+/g, "");
  stringB = stringB.toLowerCase().replace(/[\W_]+/g, "");

  // Solution 1
  // if input strings length is not same, return false
  if (stringA.length !== stringB.length) {
    return false;
  }

  // create char count object
  const stringACharCount = {};

  for (let i = 0; i < stringA.length; i++) {
    const charA = stringA[i];
    stringACharCount[charA] = stringACharCount[charA] + 1 || 1;
  }

  for (let i = 0; i < stringB.length; i++) {
    const charB = stringB[i];

    if (!stringACharCount[charB]) {
      return false;
    } else {
      stringACharCount[charB]--;
    }

    return true;
  }

  /*Solution 2
  // turn strings to array of chars -sort alphabetically - turn them back to strings
  const sortedStringA = stringA.split("").sort().join("");
  const sortedStringB = stringB.split("").sort().join("");

  return sortedStringA === sortedStringB;
*/
}

/*  Solution 1 Complexity  - Linear
Time Complexity: O(N+M) - because we go over every character in both input strings.
Space complexity: O(1) - because character Count Object has at most 26 key-val pairs 
(it will never be over 26)
*/

/* Solution 2 Complexity
Time Complexity: O(N * log N) - becasue we used sorting method.
Space Complexity: O(N) - becasue sorted strings will be as long as input string.
 */

// _________ _______  _______ _________   _______  _______  _______  _______  _______
// \__   __/(  ____ \(  ____ \\__   __/  (  ____ \(  ___  )(  ____ \(  ____ \(  ____ \
//    ) (   | (    \/| (    \/   ) (     | (    \/| (   ) || (    \/| (    \/| (    \/
//    | |   | (__    | (_____    | |     | |      | (___) || (_____ | (__    | (_____
//    | |   |  __)   (_____  )   | |     | |      |  ___  |(_____  )|  __)   (_____  )
//    | |   | (            ) |   | |     | |      | (   ) |      ) || (            ) |
//    | |   | (____/\/\____) |   | |     | (____/\| )   ( |/\____) || (____/\/\____) |
//    )_(   (_______/\_______)   )_(     (_______/|/     \|\_______)(_______/\_______)
//                             ____       _
//                             |  _ \     | |
//                             | |_) | ___| | _____      __
//                             |  _ < / _ \ |/ _ \ \ /\ / /
//                             | |_) |  __/ | (_) \ V  V /
//                             |____/ \___|_|\___/ \_/\_/
//                         ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

//                          ______ ______ ______ ______ ______
//                         |______|______|______|______|______|

mocha.setup("bdd");
const { assert } = chai;

describe("Anagrams", () => {
  it("works if case sensitivity and non word characters NOT taken into account", () => {
    assert.equal(anagrams("earth", "heart"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("is case insensitive. 'HEART' and 'earth' should return true", () => {
    assert.equal(anagrams("HEART", "earth"), true);
    assert.equal(anagrams("heart", "EARTH"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
  it("only matches word characters. 'heart!'' and '' earth' should return true", () => {
    assert.equal(anagrams("heart!", " earth"), true);

    assert.equal(anagrams("love", "meow"), false);
    assert.equal(anagrams("lol", "lolc"), false);
  });
});

mocha.run();
