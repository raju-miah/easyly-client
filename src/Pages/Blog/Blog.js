import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className='text-5xl text-center mt-10'>Blog</h2>
            <div className='border-2 rounded-lg mx-5 mt-10 border-stone-900'>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-teal-400 rounded  w-4/5 mx-auto mt-10 mb-10">
                    <div className="collapse-title text-xl font-medium">
                        What are the different ways to manage a state in a React application?
                    </div>
                    <div className="collapse-content">
                        <p><strong>Answer: </strong>There are four main types of state you need to properly manage in your React apps: <br />
                            1. <strong>Local state</strong> <br />
                            2. <strong>Global state</strong> <br />
                            3. <strong>Server state</strong> <br />
                            4. <strong>URL state</strong> <br />
                            <span>
                                <strong>Local (UI) state:</strong> Local state is data we manage in one or another component. Local state is most often managed in React using the useState hook. For example, local state would be needed to show or hide a modal component or to track values for a form component, such as form submission, when the form is disabled and the values of a form’s inputs.
                            </span>
                            <br />
                            <span>
                                <strong>Global (UI) state:</strong> Global state is data we manage across multiple components. Global state is necessary when we want to get and update data anywhere in our app, or in multiple components at least. A common example of global state is authenticated user state. If a user is logged into our app, it is necessary to get and change their data throughout our application. Sometimes state we think should be local might become global.
                            </span>
                            <br />
                            <span>
                                <strong>Server state:</strong> Data that comes from an external server that must be integrated with our UI state. Server state is a simple concept, but can be hard to manage alongside all of our local and global UI state. There are several pieces of state that must be managed every time you fetch or update data from an external server, including loading and error state. Fortunately there are tools such as SWR and React Query that make managing server state much easier.
                            </span>
                            <br />
                            <span>
                                <strong>URL state:</strong> Data that exists on our URLs, including the pathname and query parameters. URL state is often missing as a category of state, but it is an important one.
                                In many cases, a lot of major parts of our application rely upon accessing URL state. Try to imagine building a blog without being able to fetch a post based off of its slug or id that is located in the URL. There are undoubtedly more pieces of state that we could identify, but these are the major categories worth focusing on for most applications you build.
                            </span>
                        </p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-teal-400 rounded w-4/5 mx-auto mb-10">
                    <div className="collapse-title text-xl font-medium">
                        How does prototypical inheritance work?
                    </div>
                    <div className="collapse-content">
                        <p><strong>Answer: </strong>The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object. getPrototypeOf and Object.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-teal-400 rounded w-4/5 mx-auto mb-10">
                    <div className="collapse-title text-xl font-medium">
                        What is a unit test?
                    </div>
                    <div className="collapse-content">
                        <p><strong>Answer: </strong>Unit Testing is a type of software testing where individual units or components of a software are tested. The purpose is to validate that each unit of the software code performs as expected. Unit Testing is done during the development (coding phase) of an application by the developers. Unit Tests isolate a section of code and verify its correctness. A unit may be an individual function, method, procedure, module, or object. In SDLC, STLC, V Model, Unit testing is first level of testing done before integration testing. Unit testing is a WhiteBox testing technique that is usually performed by the developer. Though, in a practical world due to time crunch or reluctance of developers to tests, QA engineers also do unit testing.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-teal-400 rounded w-4/5 mx-auto mb-10">
                    <div className="collapse-title text-xl font-medium">
                        Why should we write unit tests?
                    </div>
                    <div className="collapse-content">
                        <p><strong>Answer: </strong>They enable you to catch bugs early in the development process. Automated unit tests help a great deal with regression testing. They detect code smells in your codebase. For example, if you're having a hard time writing unit tests for a piece of code, it might be a sign that your function is too complex.</p>
                    </div>
                </div>

                <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-teal-400 rounded w-4/5 mx-auto mb-10">
                    <div className="collapse-title text-xl font-medium">
                        React vs. Angular vs. Vue?
                    </div>
                    <div className="collapse-content">
                        <p><strong>Answer: </strong>Vue provides higher customizability and hence is easier to learn than Angular or React. Further, Vue has an overlap with Angular and React with respect to their functionality like the use of components. Hence, the transition to Vue from either of the two is an easy option.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Blog;