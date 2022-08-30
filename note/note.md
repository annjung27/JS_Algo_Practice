# Big O of objects

Js objects

- unorderd, key value pairs

## Big O of objects

- Insertion: O(1) / constant time
- Removal: O(1) / constant time
- Object.keys(): O(N) / Linear time
- Objoect.values(): O(N) / Linear time
- Seaching: O(N)/ Linear time
- Accessing: O(1)/ constant time

when to use js objects to store your data...

- when you don't need order.
- when you need fast access by key value, and fast insertion and fast removal.

# Big O notation for Arrays

- Ordered List of Data

## Big O of Arrays

- Searching: O(N) / Linear Time
- Access: O(1) / Constant Time
- Insertion: O(N) / O(1) for end.
- Removal: O(N) / O(1) for end.

## Big O of Array Methods

- push: O(1)
- pop: O(1)
- shift: O(N)
- unshift: O(N)
- concat: O(N)
- slice: O(N)
- splice: O(N)
- sort: O(N\* logN)
- forEach, map, filter, reduce..: O(N)

When to use Arrays to store your Data..

- when you need order.

# Big O - Linked list and Array

## Linked List

- insertion: O(N) / O(1) for start & end.
- Removal: O(N) / O(1) for start.
- Searching: O(N)
- Accessing(index): O(N)

## Array

- insertion: O(N) / O(1) for end.
- Removal : O(N) / O(1) for start.
- Searching: O(N)
- Accessing(index): O(1)

## Linked list vs. Array

- Use a Single linked list over an Array for storing ordered data, if you plan on frequqently removing or inserting data at start.
- Use a Array over a Linked list for storing ordered data, if you plan on frequently accessing data using an index.
