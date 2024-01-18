# Composing React components - best practices

This is a sample playground project to explain some best practices when composing React components.

## Table of Contents

1. [Composing React Components - Best Practices](#composing-react-components---best-practices)
2. [Local Development](#local-development)
3. [Concepts Explained](#concepts-explained)
    - [Pure Functions / Components](#pure-functions--components)
        - [Pure Functions](#pure-functions)
        - [Pure Components](#pure-components)
    - [Low Coupling](#low-coupling)
    - [High Cohesion](#high-cohesion)
4. [Closing Note](#closing-note)


## Local development
The project uses [Vite](https://vitejs.dev).

To run it locally run (feel free to replace `yarn` with `npm` if you please):

```bash
yarn install
```

and then run it and open browser at http://localhost:5417

```bash
yarn dev
```

---

## Concepts explained
When composing React components, there are some best practices that should be followed.
Although all the principles are simple in theory, achieving them in practice is not always easy and depends on context. 
You should always consider the trade-offs and decide what is best for your project. 

As a rule of thumb, rather strive for more than less. You may think your project is to be too small to bother with
all the additional work related to proper components' composition. But can you guarantee it will never ever grow?   


### Pure functions / components
#### Pure functions
A pure function is a function that always returns the same output given the same input and does not cause any side effects (like modifying global state or variables outside its scope).

##### Characteristics:
- **Deterministic**: The output solely depends on its input values.
- **No Side Effects**: It doesn’t alter any external state; for instance, it doesn't modify variables outside its scope or perform I/O operations.
- **Same Input, Same Output**: It will always produce the same result if the input values are the same.

##### Benefits:
- **Predictability**: Easier to debug and test since the output is predictable based on the input.
- **Reusability**: Can be reused across different parts of the application.

#### Pure components
You may see React components as functions. They take some input (props) and return some output (JSX). 
For pure React component applies the same rules as for pure functions. Not all React components can be pure, 
but you should always deliberately decide whether component should be pure or impure. 

The simples approach is to implement all components responsible for rendering UI as pure components. And all components 
responsible for data storing of fetching as impure components.

### Low coupling
**Low coupling** is a design principle aimed at reducing the interdependencies between modules or components in a software system. In the context of React and front-end development, it refers to creating components and modules that are independent and do not rely heavily on each other.

#### Characteristics

- **Independence**: Each component or module operates independently of others.
- **Minimal Interaction**: Components interact with each other as little as possible, and when they do, the interaction is through well-defined interfaces.
- **Interchangeability**: Due to less dependency, it's easier to replace, update, or modify components without affecting the rest of the system.

#### Benefits

1. **Ease of Maintenance**: Changes in one component have minimal impact on others, making maintenance easier.
2. **Reusability**: Independent components can be reused in different parts of the application or in different projects.
3. **Testability**: Testing becomes easier as each component can be tested in isolation.
4. **Flexibility**: It’s easier to make changes and refactor parts of the system without widespread implications.

#### Implementing Low Coupling in React

- **Props for Configuration**: Pass data or callbacks to components via props, avoiding direct dependency on parent components.
- **Use Composition**: Favor composition over inheritance to build new components.
- **Global State**: Use Context API, Redux or similar for managing global states instead of prop drilling, which can create unnecessary coupling between components.
- **Modularize Code**: Break down the application into smaller, functional modules. Do not be afraid of small components.


### High cohesion

**High Cohesion** refers to the degree to which the elements inside a module or component are closely related to each other. In the context of React and front-end development, it means designing components that are focused, specialized, and have a well-defined purpose.

#### Characteristics

- **Focused Functionality**: Each component or module has a clear and specific responsibility.
- **Related Elements**: The functions, methods, or data within a component are closely related and contribute to achieving its specific task.
- **Self-Contained**: Components are self-contained with minimal dependencies on other parts of the system.

#### Benefits

1. **Ease of Understanding**: Components with a single focus are easier to understand and maintain.
2. **Improved Maintainability**: When components are well-organized and focused, maintaining and updating them becomes more straightforward.
3. **Enhanced Testability**: High cohesion makes unit testing easier since each component has a clear purpose and functionality to test.
4. **Scalability**: It’s easier to scale and modify applications with highly cohesive components.

#### Implementing High Cohesion in React

- **Naming**: Assure a component clearly communicates its purpose through its name. Add comment if needed.
- **Single Responsibility Principle**: Ensure that each component does one thing and does it well.
- **Functional Components**: Utilize functional components for simple tasks and straightforward UI rendering.
- **Logical Division**: Divide complex interfaces into smaller components, each handling a specific aspect of the UI.
- **State and Logic Management**: Keep related state and logic within the component that needs it, rather than spreading it across multiple components.
- **Use of Hooks**: Use React Hooks like `useState` and `useEffect` to manage state and side effects in a cohesive manner within functional components.

## Closing note
> Remember you write code for humans, not for machines.

Once syntactically valid, computer will understand whatever naming, formatting, structure your code has. Human developers
are those who will have to read and understand it. So, make it easy for them even-though it may require some additional effort. 
It will pay off in the long run.
