# Mo Language Documentation

## Introduction

Mo is a unique programming language designed to challenge conventional programming paradigms. Unlike traditional languages, Mo eschews keywords in favor of symbols, resulting in a syntax that is both minimalist and distinctive.

Developed as a personal challenge, Mo pushes the boundaries of language design by exploring unconventional approaches to coding. By leveraging symbols instead of keywords, Mo encourages programmers to think creatively and abstractly, fostering a deeper understanding of programming concepts.

Powered by a custom parser created with the Nearley parsing toolkit, Mo offers a seamless development experience while maintaining its minimalist philosophy. Nearley's robust parsing capabilities enable Mo to interpret symbolic expressions with precision and efficiency, facilitating the creation of complex programs with ease.

One of Mo's distinctive features is its ability to transpile code into JavaScript, allowing developers to leverage the power of the JavaScript ecosystem while retaining Mo's unique syntax.

Whether you're a seasoned programmer looking to explore new linguistic frontiers or a curious beginner eager to challenge yourself, Mo offers a refreshing take on programming that will inspire and intrigue.

Welcome to the world of Mo, where symbols speak louder than words.

## Getting Started

To start using Mo, follow these simple steps:

### 1. Download the Project

First, download the Mo project from [GitHub](https://github.com/Mohammad-y-abbass/mo-programming-language). You can either clone the repository using Git or download the source code as a ZIP file.

### 2. Navigate to the Project Directory

Navigate to the directory where you downloaded or cloned the Mo project using the terminal or command prompt.

### 3. Build the Project

Once you're in the project directory, run the following command to build the Mo code:

`npm run build`

This command will transpile the Mo code into JavaScript and execute it.

You can find a sample code in src/example/example.txt

## Syntax Overview

Mo is a programming language that utilizes symbols instead of keywords to represent language constructs. The syntax of Mo is designed to be minimalist and concise, allowing for expressive and readable code. Below is an overview of the key language constructs in Mo:

### Symbols

Mo uses a variety of symbols to represent different language constructs, including:

- `:=`: Assignment operator, used to assign a value to a variable.
- `+`, `-`, `*`, `/`, `%`: Arithmetic operators for addition, subtraction, multiplication, division, and modulo, respectively.
- `==`, `!=`, `<`, `<=`, `>`, `>=`: Comparison operators for equality, inequality, and relational comparisons.
- `<`, `>`: Angle brackets used to hold parameters and arguments.
- `=>`, `:end`: Delimiters to determine the blocks of code.
- `_` : used to represent loops.
- `<<>>`: holds array elements.
- `f`: Function keyword to define a function.
- `r`: Return keyword to return a value from a function.
- `w`: Write symbol used to print output.
- `c`: Call symbol used to call functions.
- Newline: Used to determine the end of a statement.

### Comments

Mo supports only single-line comments:

- Single-line comments start with `##` and continue to the end of the line.

`# This is a Single-line comment`

## Variables

Variables in Mo are declared using the `:=` assignment operator. Mo is dynamically typed, meaning variables can hold values of any type.

```
x := 10
name := "Mo"
```

## Data Types

Mo supports various data types, including:

Numbers: Integers or floating-point numbers.

Strings: Textual data enclosed in double or single quotes.

Booleans: Logical values `true` or `false`.

Arrays: Ordered collections of values.

Variables can hold values of any of these data types.

## Control Flow

Mo provides various control flow constructs for conditional execution and iteration.

### Conditional Statements

Conditional statements in Mo allow you to execute code based on certain conditions. The syntax is as follows:

```
? condition =>
    // code block
:endc
```

It can also be written as:

```
? condition => code block :endc
```

in case you have only one statement in the block.

**Note:** Mo does not support else if statements, if you have more than one condition simply write another condition statement.


Mo supports both `while` and `for` loops for iteration.

### While Loop

The `while` loop in Mo allows you to repeatedly execute a block of code as long as a condition is true. The syntax for a `while` loop is as follows:

```
_ condition =>
    // code block
:endl
```

Can also be written as:

```
_ condition => code block :endl
```

in case there is only one statement in the code block.

### For loop

The for loop in Mo allows you to iterate over a range of values. The syntax for a for loop is as follows:

```
_: i:=0 to n =>
    // code block
:endl
```

Can also be written as:

```
_: i:=0 to n => code block :endl
```

in case there is only one statement in the code block.

## Functions

Functions in Mo allow you to encapsulate reusable blocks of code. The syntax for defining a function is as follows:

```
f functionName <param> =>
    // code block
:endf
```

Can also be written as:

```
f functionName <param> => code block :endf
```

in case there is only one statement in the code block.

The `<param>` is a placeholder for function parameters, which are values passed to the function when it is called. Inside the function, you can access these parameters as regular variables.

You can also have multiple parameters in a function, separated by space.

```
f add <x y> =>
    z := x + y
:endf
```

### Function Call

To call a function in Mo, simply use the call function call symbol `c`followed by function name and provide the required arguments:

```
c functionName<args>
```

### Returning a value

To return a value from a function, use the r keyword followed by the value you want to return:

```
f square <x> =>
    y := x * x
    r y
:endf
```

## logging to the terminal

To log a message to the terminal simply use:

```
w<"hello World">
```

## Arrays

Arrays in Mo allow you to store collections of values. To create an array, use the following syntax:

```
varName := <<element1 element2 element3 ...>>
```

Elements in the array are separated by spaces. Arrays in Mo can hold values of different data types.

### Accessing Array Elements

You can access individual elements of an array using `<<index>>` with the index of the element you want to access. Array indices in Mo start from 0.

```
<<0>>arrName
```

This access the first index of the array.

### Updating an element

To update an element of an array, use:

```
arrName<<index>> => newValue
```

### Adding an element to the end of an array

To add an element to the end of an array use:

```
arrName <= addedValue
```

### Removing an element from the end of an array

To remove an element from the end of an array use:

```
arrName =>
```

### Adding an element to the start of an array

To add an element to the start of an array use:

```
addedValue => arrName
```

### Removing an element from the start of an array

To remove an element from the start of an array use:

```
<= arrName
```

### Array Length

To get the length of an array use:

```
l<arrName>
```

### Displaying array elements

To display the elements of an array use:

```
_arrName
```

## Incrementing and Decrementing

To increment or decrement a variable, use the following syntax:

```
varName++
varName--
```
