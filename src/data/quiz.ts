export const QUIZ = [
  {
    id: '1',
    title: 'Using States',
    level: 1,
    questions: [
      {
        title: 'Hooks are a way to work with functions in React instead of classes. useState and useEffect are examples of commonly used hooks. However, it is not possible to create our own custom hooks.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Immutability in React is very important because if we directly mutate the value of a state instead of replacing it with a new value, your component will not properly re-render.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'About rendering in React, select the incorrect alternative:',
        alternatives: [
          'There are two common cases when a React component is rendered: the initial rendering of the component and state updates.',
          'Re-renders typically don\'t recreate all components as the initial render does',
          'A state update of a parent component can cause the re-rendering of a child component (nested).',
          'React does not follow a defined flow when rendering a screen, and the process steps can vary considerably.'
        ],
        correct: 0  
      },
    ]
  },
  {
    id: '2',
    title: 'Using Typescript',
    level: 2,
    questions: [
      {
        title: "What type of assignment is this variable, `const fullName: string = 'Dylan Israel';`?",
        alternatives: [
          'Explicit',
          'Implicit'
        ],
        correct: 0
      },
      {
        title: "What is the type of `const example = ['Dylan']`?",
        alternatives: [
          'unknown[]',
          'string',
          'string[]',
          'any[]'
        ],
        correct: 2
      },
      {
        title: "keyof can be used with index signatures to extract the index type.",
        alternatives: [
          'True',
          'False',
        ],
        correct: 0
      },
    ]
  },
  {
    id: '3',
    title: 'React Navigation',
    level: 2,
    questions: [
      {
        title: 'What is the best description to identify Stack Navigator?',
        alternatives: [
          'Adds a fixed menu at the bottom of the device, facilitating access to frequently used screens.',
          'When opening a new screen, this new screen is placed at the top of the navigation stack, and when going back, screens are removed from this stack.',
          'Adds a side menu, occupying the entire height of the device. At first, this menu is hidden and you can open it by dragging the screen.'
        ],
        correct: 1
      },
      {
        title: 'When typing routes, you have the advantage of knowing at navigation time whether a route receives parameters or not and what the format of the parameters is.',
        alternatives: [
          'True.',
          'False'
        ],
        correct: 0
      },
      {
        title: 'About NavigationContainer, it is correct to state:',
        alternatives: [
          'NavigationContainer is the component in which we create a route in the application, passing to it the properties "name" and "component".',
          'NavigationContainer is a "hook" exported from within react navigation that allows us to access functions like "navigate" and "goBack".',
          'NavigationContainer is a context that shares with our application all routes and navigation properties.'
        ],
        correct: 2
      },
    ]
  },
  {
    id: '4',
    title: 'Styled Components',
    level: 3,
    questions: [
      {
        title: 'CSS-in-JS is the styling strategy by which JavaScript is used to style components.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
      {
        title: 'Select below the alternative that does not correspond to a characteristic of Styled Components.',
        alternatives: [
          'Import styled as default and use it to create components (e.g., styled.View).',
          'It is possible to both create predefined styled components with "styled." and pass custom components to it with styled().',
          'The way to style components is very similar to what we use when working directly with CSS (lowercase letters, separated by hyphens and with a semicolon at the end).',
          'It is only possible to customize component styling (prop style) via styled, meaning it is not possible to configure other properties/attributes of the component.'
        ],
        correct: 1
      },
      {
        title: 'With Styled Components, it is possible to isolate the component structure from its styling.',
        alternatives: [
          'True',
          'False'
        ],
        correct: 0
      },
    ]
  },
  {
    id: '5',
    title: 'Local Storage',
    level: 2,
    questions: [
      {
        title: 'Which of the following methods saves information in AsyncStorage?',
        alternatives: [
          'AsyncStorage.removeItem',
          'AsyncStorage.setItem',
          'AsyncStorage.getItem'
        ],
        correct: 1
      },
      {
        title: 'What best describes PropDrilling?',
        alternatives: [
          'A strategy where you pass properties between components until you reach the desired component.',
          'A strategy where you save information locally on the device (storage) and access it when needed.',
          'A strategy where you share information between components through contexts (Context API).'
        ],
        correct: 1
      },
      {
        title: 'What is the correct way to save objects in AsyncStorage?',
        alternatives: [
          "await AsyncStorage.setItem('@app:key', { id: 1, name: 'Item 1' });",
          "await AsyncStorage.getItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));",
          "await AsyncStorage.setItem('@app:key', JSON.stringify({ id: 1, name: 'Item 1' }));"
        ],
        correct: 2
      },
    ]
  },
  {
    id: '6',
    title: 'React Native',
    level: 1,
    questions: [
      {
        title: 'Select the correct alternative about React Native:',
        alternatives: [
          'React Native is a Javascript framework based on React capable of creating applications only for Android and iOS.',
          'Unlike React, React Native is built entirely by the community and has no relationship with Facebook.',
          'With React Native, you can maintain almost your entire application with Javascript and manipulate native code if necessary.',
          'Despite the prominence of ReactJS on the Web, React Native is not widely used currently in the mobile job market.'
        ],
        correct: 2
      },
      {
        title: 'Select the incorrect alternative about React Native CLI and Expo',
        alternatives: [
          'Both React Native CLI and Expo make it possible to create applications for iOS and Android.',
          'React Native CLI is the most "raw" way to create a React Native project. Expo, on the other hand, brings more functionality on top of this base, for example, Expo Go.',
          'With Expo, you can test iOS applications through Expo Go if you have a physical iOS device even if you don\'t have a macOS system, which is not possible with React Native CLI.',
          'The official React Native documentation recommends only the React Native CLI, not even mentioning Expo.'
        ],
        correct: 3
      },
      {
        title: 'About Expo, select the correct alternative:',
        alternatives: [
          'Expo has two traditional paths when creating a project: Managed Workflow and Bare Workflow.',
          'Managed Workflow is the way to create projects where from the beginning you have access to your native code.',
          'With Bare Workflow, you cannot use Expo Go at any time.',
          'The React Native environment configuration for Managed Workflow is more complex than for Bare Workflow'
        ],
        correct: 3
      },
      {
        title: 'About componentization in React Native, choose the incorrect alternative:',
        alternatives: [
          'Componentization is a way to reuse code snippets in various places in your code.',
          'One of the advantages of componentization is simplifying a very complex component into multiple smaller components, thus facilitating code maintenance.',
          'Despite helping with code reuse and simplification, componentization reduces productivity and code readability.',
          'None of the above is correct.'
        ],
        correct: 3
      },
    ]
  },
];