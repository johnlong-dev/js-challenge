# JS-Challenge

This project serves as a sandbox to practice JavaScript by providing the scaffolding in a local environment to practice algorithms and develop programming challenges.

## Getting Started

1. Clone the project
2. Run `yarn` in the root of the project directory
3. Run an existing challenge, such as `twoSum`

   `yarn dev twoSum '{"nums": [1, 2, 3, 4, 5], "target": 9}'`

   ```sh
   yarn run v1.22.21
   $ node ./index.js twoSum '{"nums": [1, 2, 3, 4, 5], "target": 9}'
   Calling challenge: twoSum
   [ 3, 4 ]
   Time elapsed: 0.5521669999999972ms
   rss 41.75 MB
   heapTotal 6.69 MB
   heapUsed 4.99 MB
   external 1.76 MB
   arrayBuffers 0.09 MB
   ✨  Done in 0.13s.
   ```

4. Create a new challenge
   - Create a new file in `./challenges/`
   - Create a function and `export default` it
   - If any input is needed to be passed to the function, it needs to be a single, object type, argument
   - Import the function in `./challenges/index.js` and export it
   - Add a test file in `./challenges/test/`
   - Write test cases
5. Run tests
   - Run all with `yarn test`
   - Run a specified test, such as `twoSum` with `yarn test twoSum`
6. Run a challenge
   - Run `yarn dev <challenge_name> "<JSON_formatted_argument>"`
