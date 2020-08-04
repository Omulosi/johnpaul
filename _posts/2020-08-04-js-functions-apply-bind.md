---
layout: post
title:  "JavaScript Functions: Call, Apply and Bind"
date:   2020-08-03 01:58 +0300
categories: [javascript]
---

This article touches on the bells and whistles behind the **_call_**, **_apply()_**,  and **_bind()_** methods in JavaScript.

Before embarking, it'd be instructive to first talk about JavaScript execution contexts and the concept
of **this**.

When a script executes for the first time, the JavaScript engine creates a Global Execution Context. Here,
a global object is created containing everything defined globally - variables, functions, classes etc.
This object will also have a **this** property pointing to the global object itself.

The engine then starts executing the code line by line, assigning variables and executing any function calls.

For every function call, the JavaScript engine creates a new **Function Execution Context**.
This Function Execution Context is similar to the Global Execution Context.

The **_this_** in the function execution context will depend on how the function is called.
Normally, it'd default to the global object, or undefined if the function is called in
strict mode.

To keep track of all the execution contexts including the Global Execution Context and Function Execution Contexts,
the JavaScript engine uses a data structure named call stack.


If the execution context is global - **_this_** references the global object.
If execution context is a function - **_this_** depends on how we call the function.

Let's make all this concrete.


```javascript

// Here, **_this_** defaults to the global object, which is the window object
// if the code is run in the browser.

name = "The hobbits";

function greet1() {
  console.log(this);
  console.log(this.name);
  console.log(this.greet2);
}

greet1(); // window object

// In strict mode, this defaults to undefined

function greet2() {
  'use strict';
  console.log(this);
}

greet2(); // undefined

```

We can explicitly set the value of **_this_** in the function so that it doesn't default to undefined or the global object.
we use the **'call'** method defined on a function (recall functions are objects in javascript).

syntax:
```js
func.call(context, arg1, arg2, ...)
```
Example usage:

```js
func(1, 2, 3);

func.call(obj, 1, 2, 3)
```
Both of these functions call `func` with arguments 1, 2 and 3.
The only difference is that `func.call` also sets 'this' to obj.


```js
function greet() {
console.log(this.name);
}

let user = {
name: "John"
};

let admin = {
name: "Admin"
};

// use call to pass different objects as "this"
greet.call(user); // John
greet.call(admin); // Admin
```
