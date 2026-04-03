# QA: Validate email

Write tests for the `validateEmail` function, which takes the `email` string and returns `true` for valid email, and `false` for invalid.  

An email is a string (a subset of ASCII characters) separated into two parts by `@` symbol, a "personal_info" and a domain, that is personal_info@domain.  

The personal_info part contains the following ASCII characters.  

- English letters (Aa-Zz)
- digits
- characters: - _
- character `.` ( period, dot or fullstop) provided that it is not the first or last character and it will not come one after the other.
- @ is required

- personal_info and domain can not start with dot `.`
- double dots are not allowed in personal_info part
- not allowed characters: ! $ % & ' * + / = ? ^ { | } ~

The domain name part contains letters, digits, hyphens, and dots.

The function does not check the `uniqueness` of the email (it happens during the request to DB) and the `length` of the email (it made by another function).  

Examples:

```js
validateEmail('test@mail.com') === true
validateEmail('t@q.c') === true
validateEmail('false@email') === false
```

`Hint`: focus on the most priority and realistic cases, do not focus on edge cases.  

---

- [Guideline](https://github.com/mate-academy/js_task-guideline/blob/master/README.md);
- Read more about [Jest expectations](https://jestjs.io/uk/docs/expect).
1
