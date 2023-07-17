export const chatBot = async (req, res) => {
  try {
    const userMessag = req.body.message;
    console.log(userMessag);
    let userMessage = userMessag.toLowerCase();
    console.log(userMessage);
    let chatbotResponse;

    // Check the user message and generate a response based on the input
    if (userMessage.includes("hello")) {
      chatbotResponse = "Hello! How can I assist you today?";
    } else if (userMessage.includes("help")) {
      chatbotResponse = "Sure! What do you need help with?";
    } else if (userMessage.includes("bye")) {
      chatbotResponse = "Goodbye! Have a great day!";
    } else if (userMessage.includes("react")) {
      chatbotResponse =
        "React is a JavaScript library used for building user interfaces, specifically for creating interactive web applications. It allows developers to create reusable UI components that update efficiently and automatically when data changes. React follows a component-based approach and is known for its virtual DOM, which helps improve performance by efficiently updating only the necessary parts of the user interface";
    } else if (userMessage.includes("html")) {
      chatbotResponse =
        "HTML (HyperText Markup Language) is the standard markup language used for creating the structure and content of web pages. It consists of a set of tags that define the elements and structure of a web document. HTML tags are used to define headings, paragraphs, lists, images, links, tables, forms, and other elements on a web page.";
    } else if (userMessage.includes("css")) {
      chatbotResponse =
        "CSS stands for Cascading Style Sheets. It is a stylesheet language used to describe the presentation and visual styling of a document written in HTML or XML. CSS allows developers to control the layout, appearance, and formatting of web pages. It provides a wide range of styling options, including font styles, colors, margins, borders, and positioning of elements. CSS works by applying rules and selectors to HTML elements, enabling the separation of content and presentation in web development. It plays a crucial role in creating visually appealing and responsive websites.";
    } else if (userMessage.includes("java")) {
      chatbotResponse =
        "Java is a popular, general-purpose programming language that was developed by Sun Microsystems (now owned by Oracle). It is known for its write once, run anywhere philosophy, meaning that Java code can run on any device or platform that has a Java Virtual Machine (JVM). Java is used for a wide range of applications, including web development, mobile app development (Android), desktop software, enterprise systems, and more. It is an object-oriented language that offers features such as automatic memory management (garbage collection), strong type checking, and extensive libraries and frameworks. Java is widely adopted and has a large community of developers worldwide.";
    } else if (userMessage.includes("javascript")) {
      chatbotResponse =
        "JavaScript is a versatile programming language primarily used for adding interactivity and dynamic behavior to web pages. It is supported by all major web browsers and can be executed both on the client-side (in the browser) and server-side (with the help of Node.js). JavaScript enables developers to manipulate and modify web page elements, handle user interactions, make asynchronous requests to servers, create animations, and much more. It is a high-level, interpreted language with a C-like syntax, and it has become an essential part of modern web development, powering numerous frameworks and libraries for building robust web applications.";
    } else if (userMessage.includes("node")) {
      chatbotResponse =
        "Node.js is an open-source runtime environment that allows developers to execute JavaScript code outside of a web browser. It enables server-side and command-line scripting, making JavaScript a versatile language beyond just client-side web development. Node.js is built on the V8 JavaScript engine from Google Chrome, providing a fast and efficient runtime environment. It offers a vast ecosystem of libraries and frameworks that enable developers to build scalable and high-performance applications. Node.js is well-suited for building real-time applications, server-side APIs, microservices, and other server-based applications. It has gained significant popularity due to its non-blocking, event-driven architecture, which allows for efficient handling of concurrent requests.";
    } else if (userMessage.includes("express")) {
      chatbotResponse =
        "Express is a popular web application framework for Node.js. It provides a minimal and flexible set of tools for building web servers and APIs. Express simplifies the process of creating server-side applications by offering a robust set of features, including routing, middleware support, template engine integration, and handling HTTP requests and responses. It follows the principle of simplicity and allows developers to build scalable and modular applications. Express has a large community and a wide range of third-party middleware and plugins, making it highly extensible and suitable for various web development needs.";
    } else if (userMessage.includes("frontend")) {
      chatbotResponse =
        "Frontend development refers to the process of building and creating the user interface and user experience (UI/UX) of a website or web application. It involves working on the client-side of web development, focusing on the visual aspects and interactivity that users see and interact with in their browsers. Frontend developers typically use HTML, CSS, and JavaScript to structure and style web pages, handle user interactions, and fetch data from servers. They also work with various frameworks, libraries, and tools to enhance productivity and create responsive, accessible, and visually appealing interfaces. Frontend development plays a critical role in delivering a seamless and engaging user experience on the web.";
    } else if (userMessage.includes("backend")) {
      chatbotResponse =
        "Backend development refers to the creation and maintenance of the server-side of a web application or website. It involves working on the logic, functionality, and database management that powers the application behind the scenes. Backend developers use server-side programming languages such as Java, Python, Ruby, or Node.js to handle requests from the frontend, process data, interact with databases, and generate responses to be sent back to the client-side. They also implement security measures, handle user authentication, and ensure the performance and scalability of the application. Backend development focuses on the server-side infrastructure that supports the frontend and enables the application to function properly.";
    } else if (userMessage.includes("angular")) {
      chatbotResponse =
        "Angular is a TypeScript-based open-source framework for building web applications. It is maintained by Google and offers a comprehensive set of tools and features for developing robust and scalable applications. Angular follows a component-based architecture similar to React, where the application is built using reusable components. It provides features such as two-way data binding, dependency injection, routing, and forms handling. Angular also includes a powerful command-line interface (CLI) for scaffolding and managing projects. It emphasizes modularity, testability, and code reusability. Angular is well-suited for large-scale applications and has a strong community and ecosystem of libraries and tools supporting its development.";
    } else if (userMessage.includes("django")) {
      chatbotResponse =
        "Django is a high-level, Python-based web framework that follows the model-view-controller (MVC) architectural pattern. It provides a robust set of tools and features for building web applications rapidly and efficiently. Django includes an ORM (Object-Relational Mapping) for interacting with databases, a URL routing system, a template engine for rendering dynamic HTML pages, and a built-in admin interface for managing application data. It follows the batteries included philosophy, offering many reusable components and libraries to handle common web development tasks. Django is known for its scalability, security, and excellent documentation. It is widely used for developing all kinds of web applications, from small projects to large-scale, high-traffic websites.";
    } else if (userMessage.includes("rails")) {
      chatbotResponse =
        "Rails, also known as Ruby on Rails, is a popular open-source web application framework written in the Ruby programming language. It follows the model-view-controller (MVC) architectural pattern and emphasizes convention over configuration, which means it provides default configurations and conventions to simplify development. Rails provides a comprehensive set of tools and libraries for building web applications, including an ORM (Object-Relational Mapping) for database interactions, a routing system, a view templating engine, and a range of built-in functionalities. It promotes developer productivity by focusing on simplicity and code elegance. Rails is widely used for rapid development and is known for its strong community support and extensive ecosystem of plugins and gems.";
    } else if (userMessage.includes("laravel")) {
      chatbotResponse =
        "Laravel is a popular open-source PHP web application framework known for its elegant syntax, expressive syntax, and developer-friendly features. It follows the model-view-controller (MVC) architectural pattern and offers a robust set of tools and libraries for building web applications. Laravel provides features such as an ORM (Object-Relational Mapping) for database interaction, a powerful routing system, a templating engine called Blade, and a wide range of built-in functionalities. It emphasizes code simplicity, readability, and maintainability. Laravel also has a vibrant ecosystem with a rich collection of packages and extensions, making it efficient for developers to build scalable and feature-rich applications.";
    } else if (userMessage.includes("vue")) {
      chatbotResponse =
        "Vue.js, commonly referred to as Vue, is an open-source JavaScript framework for building user interfaces. It is often used for developing single-page applications (SPAs) and provides a flexible and intuitive approach to building interactive web interfaces. Vue follows a component-based architecture, allowing developers to create reusable and self-contained UI components. It provides a reactive data binding system that automatically updates the DOM (Document Object Model) when the underlying data changes. Vue is known for its simplicity and gentle learning curve, making it accessible to developers of all skill levels. It can be used standalone or integrated with existing projects and libraries. Vue has gained significant popularity in the web development community for its performance, flexibility, and extensive ecosystem of plugins and extensions";
    } else if (userMessage.includes("mongo")) {
      chatbotResponse =
        "MongoDB is a popular open-source NoSQL database management system. It is known for its flexibility, scalability, and document-oriented data model. MongoDB stores data in flexible JSON-like documents, allowing for dynamic and schema-less data structures. It supports a wide range of data types and provides powerful querying and indexing capabilities. MongoDB is designed to scale horizontally, making it suitable for handling large volumes of data and high-traffic applications. It also offers features like replication and sharding for data redundancy and distribution. MongoDB is widely used in modern web development for various use cases, including real-time applications, content management systems, and data-driven applications.";
    } else if (userMessage.includes("algorithm")) {
      chatbotResponse =
        "An algorithm is a set of step-by-step instructions or a sequence of operations designed to solve a specific problem or perform a particular task. It is a fundamental concept in computer science and programming. Algorithms define the logic and procedure to be followed in order to achieve a desired outcome. They can range from simple calculations to complex sorting or searching algorithms. Good algorithms are efficient, accurate, and designed to handle various scenarios. They form the basis of many software applications and are essential for solving computational problems effectively.";
    } else if (userMessage.includes("c++")) {
      chatbotResponse =
        "C++ is a powerful and versatile programming language that is widely used for developing a wide range of applications. It is an extension of the C programming language and introduces additional features such as object-oriented programming (OOP) and templates. C++ supports low-level programming, allowing direct memory manipulation and efficient performance. It is used in various domains, including system programming, game development, embedded systems, and high-performance applications. C++ has a rich standard library and a large community that provides numerous libraries and frameworks for different purposes. It offers a balance between high-level abstractions and low-level control, making it a popular choice for developers seeking performance and flexibility";
    } else if (userMessage.includes("bootstrap")) {
      chatbotResponse =
        "Bootstrap is a popular open-source CSS framework that provides a collection of pre-designed components, styles, and utilities for building responsive and visually appealing websites and web applications. It simplifies the process of front-end development by offering a set of ready-to-use CSS classes and JavaScript plugins. Bootstrap follows a mobile-first approach, ensuring that websites look and function well on various screen sizes and devices. It includes a grid system for creating responsive layouts, along with components such as navigation bars, buttons, forms, cards, and more. Bootstrap is highly customizable and can be easily integrated into existing projects. It has a large community and extensive documentation, making it a popular choice for developers to streamline the UI development process.";
    } else if (userMessage.includes("spring")) {
      chatbotResponse =
        "Spring is a widely used open-source Java framework for building enterprise-level applications. It provides a comprehensive and modular platform for developing robust and scalable Java applications. Spring follows the principle of dependency injection and inversion of control, enabling loose coupling and easier testing of components. It offers various modules and features for different purposes, including Spring MVC for building web applications, Spring Boot for rapid application development, Spring Data for data access, Spring Security for authentication and authorization, and many more. Spring also integrates well with other technologies and frameworks, making it highly flexible and suitable for building complex enterprise solutions. It has a strong community and extensive documentation, making it a popular choice for Java developers.";
    } else if (userMessage.includes("codeigniter")) {
      chatbotResponse =
        "CodeIgniter is a lightweight, open-source PHP framework used for building web applications. It follows the model-view-controller (MVC) architectural pattern and offers a straightforward and intuitive approach to web development. CodeIgniter focuses on simplicity, speed, and a small footprint, making it ideal for small to medium-sized projects or applications where performance is a key consideration. It provides a rich set of libraries and helpers for common tasks like database interactions, form handling, data validation, and more. CodeIgniter emphasizes code reusability and encourages developers to write clean and maintainable code. It has a supportive community and good documentation, making it a popular choice for PHP developers who prefer a lightweight framework.";
    } else if (userMessage.includes("ide")) {
      chatbotResponse =
        "IDE stands for Integrated Development Environment. It is a software application that provides a comprehensive set of tools and features to assist developers in writing, testing, and debugging code. IDEs typically include a text editor with syntax highlighting, code completion, and formatting capabilities. They also offer features such as debugging, version control integration, build automation, and project management tools. IDEs are designed to streamline the development process and increase developer productivity by providing a unified environment for coding and development tasks. Some popular examples of IDEs are Visual Studio Code, IntelliJ IDEA, Eclipse, and Xcode, each tailored for specific programming languages and platforms.";
    } else if (userMessage.includes("compile")) {
      chatbotResponse =
        "Compiling refers to the process of translating human-readable source code into machine-executable instructions. It is a crucial step in the software development cycle. During compilation, a compiler takes the source code written in a programming language and converts it into a lower-level representation, typically machine code or bytecode, which can be directly executed by a computer or virtual machine.";
    } else if (userMessage.includes("build")) {
      chatbotResponse =
        "In software development, building refers to the process of transforming source code into a deployable or runnable artifact. Building involves various tasks such as compiling code, resolving dependencies, running tests, and packaging the application for deployment.";
    } else if (userMessage.includes("production")) {
      chatbotResponse =
        "In software development,production refers to the environment or stage where a software application or system is deployed and made available for actual use by end-users. The production environment is where the software runs and operates in a live or real-world setting.When an application is in production, it means it has gone through the development and testing phases and is deemed stable and ready for use by its intended audience. The software is deployed on production servers or infrastructure, and it serves actual users or customers.";
    } else if (userMessage.includes("thank")) {
      chatbotResponse =
        "You're welcome! If you have any more questions, feel free to ask. I'm here to help.";
    } else if (userMessage.includes("ok")) {
      chatbotResponse =
        "If you have any more questions or need further assistance, feel free to ask. I'm here to help!";
    } else {
      chatbotResponse = "I'm sorry, but I didn't understand your message.";
    }
    res.json({ response: chatbotResponse });
  } catch (err) {
    res.status(404).json(err);
  }
};
