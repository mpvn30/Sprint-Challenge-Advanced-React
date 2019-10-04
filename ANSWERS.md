- [ / ] Why would you use class component over function components (removing hooks from the question)?

Because class components have more benefits than function components. We can use libraries and lifecycle methods and other hooks while building class components as opposed to function components. In general, class components gives access to the `this` keyword and lets us extend functionality between classes using class inherence.

- [ / ] Name three lifecycle methods and their purposes.

1. Mounting - is when a component mounts and rendered for the first time. During this lifecycle we use a constructor();, a render(); and componentDidMount().

2. Updating - the updating lifecycle gives us control over how we want to update our components and when we want to update them. Updating methods open up codes such as componentDidUpdate();

3. Unmounting - Unmounting deals with the components that do not always stay in the DOM. They are removed for several reasons but they will all end up unmounted during the unmountid lifecycle method. This method uses componentWillUnmount();.

- [ / ] What is the purpose of a custom hook?

Custom hooks allows us to use the same logic in a single component but it is reusable globally. Custom hooks can also use other hooks within it.

- [ / ] Why is it important to test our apps?

Testing is like a long-term investment. It gives us the confidence that our code runs smoothly. Most importantly, it will assure us that any bugs or errors, which can be costly to the company or owner of the website, can be dealth with before launching the final product.