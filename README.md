# Jest test order mutates css snapshot results reproduction
## `master` branch
This branch has the tests setup passing and ready to fail by removing the first test. You can see the order of the styles rewritten in the final test just from the lack of the first test rendering the component.

You can run `yarn test` to see the 3 tests passing.

In the `src/__tests__/EmotionComponent.jsx` file, either remove this first test, or append `.skip` to the test to skip it and see the same result:
```js
test('mutating test 1', () => {
  render(<EmotionComponent variant="bold" />)
})
```
Oddly it does seem to require both of the mutating tests to take affect. If you remove both "mutating test"s the final test still passes.

##  `broken-example` branch
As an alternative, you can checkout the `broken-example` branch where I've already skipped the first test and commited with the failing snapshot in case my previous instructions were unclear.