// Implement Linear Search Algorithms that search a provided Array for the provided value.
// The Linear Search Algorithms will either return a boolean, index, or value back.

// const foods = ["pizza", "orange", "yogurt"];
// linearSearchIndexOf(foods, "pizza") --> 0
// linearSearchIncludes(foods, "pizza") --> true
// linearSearchFind(foods, food => food === "pizza") --> "pizza"

function linearSearchIndexOf(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return i;
    }
  }
  return -1;

  // using built in method:
  // return arr.indexOf(val);
}

function linearSearchIncludes(arr, val) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === val) {
      return true;
    }
  }
  return false;

  // using builtin method:
  // reutrn arr.includes(val);
}

function linearSearchFind(arr, cb) {
  for (let i = 0; i < arr.length; i++) {
    if (cb(arr[i]) === true) {
      return arr[i];
    }
  }
  return undefined;

  // using builtin method:
  // return arr.find(cb);
}

/**
 Time Complexity for Lnear Search: O(N)
 because our search algorithm in the worst case needs to iterate over every item in Array 
 to check if it is the value we are looking for. 

 O(N) / Linear Time Complexity is best we can do for searching an "unsorted" array. 
 On a "sorted" array we can get much better time complexity with Binary Search.

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

const foods = ["pizza", "orange", "yogurt"];
const people = [{ name: "Kevin", last: "Nguyen", born: 1995 }];

describe("linearSearchIndexOf()", () => {
  it("returns index of found item", () => {
    assert.equal(linearSearchIndexOf(foods, "pizza"), 0);
    assert.equal(linearSearchIndexOf(foods, "yogurt"), 2);
  });
  it("returns -1 if item not found", () => {
    assert.equal(linearSearchIndexOf(foods, "laptop"), -1);
  });
});

describe("linearSearchIncludes()", () => {
  it("returns true if item found", () => {
    assert.equal(linearSearchIncludes(foods, "pizza"), true);
  });
  it("returns false if item NOT found", () => {
    assert.equal(linearSearchIncludes(foods, "laptop"), false);
  });
});

describe("linearSearchFind()", () => {
  it("returns item back if found", () => {
    const kevin = people[0];
    assert.equal(
      linearSearchFind(people, (person) => person.name === "Kevin"),
      kevin
    );
  });
  it("returns undefined if item NOT found", () => {
    assert.equal(
      linearSearchFind(people, (person) => person.name === "Kevinn"),
      undefined
    );
  });
});

mocha.run();
