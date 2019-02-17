# Deloitte Tech Test Task:

Write a function that takes as its input a number (n) and converts it to a string, the contents of which depend on the numbers factors

- if the number has a factor of 3, output 'Pling'
- if the number has a factor of 5, output 'Plang'
- if the number has a factor of 7, output 'Plong'
- if the number does not have any of the above as a factor simply return the numbers digits

# Instructions to run:

- Clone the repository to your local machine
- Type the following in your console:

```
 npm install

```
- Once completed, go into your console, and type:
```
node
```
- this will then open up the node console. In here, type the following:
```
var raindrops = require('../src/raindrops.js')
```
- you can now test the programe directly by calling it as a function; such as:

```
> raindrops(5)
// 'Plang'

> raindrops(105)
// 'PlingPlangPlong'
```

# Instructions to test:

To test the project, complete the above up to the npm install section, then feel free to use the following commands:

```
npm run jasmine // will run the tests

npm run coverage // will produce a coverage report

npm run lint // will run ESlint - note, this produces a silent pass (no errors if passing)
```

# My Approach:
I started with project setup - this includes adding the Jasmine test framework, and having it communicate with coveralls.io to ensure I maintain a high test coverage (95%+).

From here, I followed a strict TTD approach, and using the smallest possible code to make my tests pass. This started off as simply passing a function, that accepts an argument, and having that argument returned. When I passed that, I pushed up my changes to Github.

After, I wrote the unit test for raindrops to pass 'Pling' if the function is passed 3. I then moved onto ensuring tests pass with the smallest possible code. Before committing to Github, I refactored my code.

The same approach followed for both 5 and 7 - string TTD, smallest possible test, refactor, then push to git with a suitable commit message.

Finally, once I had achieved the desired result, I created a Feature test to mimic the examples given in the test description. This included 28, 30, 34 and 105, to ensure all possible potions are tested.

To complete - I refactored and reviewed entire project file structure and set-up files.
