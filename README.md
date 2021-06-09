Write tests for the `validateEmail` function, which takes the `email` string and returns `true` for valid email, and` false` for invalid.  

Requirements to valid email:
- username could be 1-64 characters inclusive: Latin (Aa-Zz), numbers, some special characters (`+`, `-`,` _`);
- hostname could be 1-63 characters inclusive: Latin (Aa-Zz), numbers, some special characters (`-`,` _`);
- domain could be 1-63 characters inclusive: Latin (Aa-Zz), numbers, some special characters (`-`,` _`);
- max length 75 characters inclusive.

The function does not check the uniqueness of the email.  

Examples:
```js
validateEmail('test@mail.com') === true
validateEmail('t@q.c') === false
validateEmail('false@email') === false
```

`Hint`: focus on the most priority and realistic cases, do not focus on edge cases.  

[Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md)

Read more about [Jest expectations](https://jestjs.io/uk/docs/expect)
