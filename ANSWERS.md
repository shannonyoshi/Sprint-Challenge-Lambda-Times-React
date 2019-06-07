1. What are PropTypes used for? Please describe why it's important to type check our data in JavaScript.

Functions, methods, classes, etc. are written to receive data of specific types in specific structures. 
If the wrong type of data is passed in, the program will probably break. Proptypes allows us to ensure that the data we are passing in is of the type and in the structure required for the program to run properly.

2. Describe a life-cycle event in React?

    The build React Compenent has build in methods that allow us to control when things happen during the life cycle (Mounting, Updating, Unmounting). An example is componentDidMount, which runs only when the component is first mounted.

3.  Explain the details of a Higher Order Component?

An HOC is a function that receives a component as an argument and returns a new component. They can be used if you need a lot of components that follow the same structure. 

4.  What are three different ways to style components in React? Explain some of the benefits of each.
    SASS: probably the most simple way, but styles can 'bleed' 
    Reactstrap: has lots of premade themes to choose from, but you may have to override the theme styling, which can be annoying
    Styled Components: all JS, can create reusable styles, all styling is provided by you.
