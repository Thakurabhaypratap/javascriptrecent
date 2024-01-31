In JavaScript, the `call()` method is used to call a function with a specified `this` value and arguments provided individually. The syntax for `call()` is as follows:

```javascript
functionName.call(thisArg, arg1, arg2, ...)
```

- `functionName`: The function to be called.
- `thisArg`: The value to be passed as the `this` parameter to the function.
- `arg1`, `arg2`, ...: Arguments to be passed to the function.

Here's a simple example demonstrating the usage of `call()`:

```javascript
const person = {
  fullName: function() {
    return this.firstName + " " + this.lastName;
  }
}

const person1 = {
  firstName: "John",
  lastName: "Doe"
}

const person2 = {
  firstName: "Jane",
  lastName: "Doe"
}

// Using call() to invoke the fullName function with person1 and person2 objects
console.log(person.fullName.call(person1)); // Output: John Doe
console.log(person.fullName.call(person2)); // Output: Jane Doe
```

In this example, we have a `person` object with a `fullName` method. We then have `person1` and `person2` objects with `firstName` and `lastName` properties. By using `call()`, we can invoke the `fullName` method on `person1` and `person2`, passing them as the `this` context to the `fullName` method of the `person` object.