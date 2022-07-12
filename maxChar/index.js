// Return the character most commonly used in the string.
// --- Examples
// maxChar("I loveeeeeee noodles") === "e"
// maxChar("1337") === "3"

function maxChar(str) {
  let charCountObj = {};
  let maxChar = "";
  let maxCount = 0;

  // fill charCountObj with Key-value
  for (let i = 0; i < str.length; i++) {
    let char = str[i];
    charCountObj[char] = 1 | (charCountObj[char] + 1);

    if (charCountObj[char] > maxCount) {
      maxChar = char;
      maxCount = charCountObj[char];
    }
  }
  return maxChar;
}

/*
Pseudocode
1. str의 각 글자를 카운트하는 object를 만듬. {H:1, e: 1, l:2, o:1}
2. for loop로 str의 각 글자를 돌면서 object에다가 넣고 1을 할당. 
같은 key (글자)가 한번더 나올경우 원래 넘버에 1을 더해줌. 
3. 만약 value가 maxcount보다 크면 그 캐릭터가 maxChar이되고, maxCount는 그 캐릭터의 value.

Time Complexity: O(N) because we visit every character in Input String using for loop. 
input string이 길어질수록 처리 시간에 영향을 줌. 

Space Complexity: O(1) 
- charCountObj will have at most 26 (a~z) key-val pars.
- charCountObj는 아무리 길어도 알파벳개수인 최대 26개로 정해져있어서 -  constant함. 
- maxChar는 언제나 1개의 알파벳(스트링) / maxcount는 숫자라서 space complexity에 영향을 안줌. 
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

describe("Max Character", () => {
  it("maxChar() finds the most frequently used character", () => {
    assert.equal(maxChar("a"), "a");
    assert.equal(maxChar("test"), "t");
    assert.equal(maxChar("I loveeeeee noodles"), "e");
    assert.equal(maxChar("1337"), "3");
  });
});

mocha.run();
