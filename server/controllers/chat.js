import axios from "axios";

// export const chatBot = async (req, res) => {
//   try {
//     const userMessage = req.body.message;
//     let userMessageLower = userMessage.toLowerCase();
//     let chatbotResponse;

//     // Check the user message and generate a response based on the input
//     if (userMessageLower.includes("hello")) {
//       chatbotResponse = "Hello! How can I assist you today?";
//     } else if (userMessageLower.includes("help")) {
//       chatbotResponse = "Sure! What do you need help with?";
//     } else if (userMessageLower.includes("bye")) {
//       chatbotResponse = "Goodbye! Have a great day!";
//     } else {
//       // Make a request to ChatGPT API
//       const response = await axios.post(
//         "https://api.openai.com/v1/engines/text-davinci-002/completions", // Updated API URL
//         {
//           messages: [
//             {
//               role: "system",
//               content: "You are a helpful assistant.",
//             },
//             {
//               role: "user",
//               content: userMessageLower,
//             },
//           ],
//         },
//         {
//           headers: {
//             Authorization:
//               "Bearer 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",
//           },
//         }
//       );

//       chatbotResponse = response.data.choices[0].message.content;
//       console.log("chatbotResponse", chatbotResponse);
//     }

//     console.log("chatreact", chatbotResponse);
//     res.json({ response: chatbotResponse });
//   } catch (err) {
//     console.log(err.message);
//     res.status(500).json({ error: "Failed to generate chatbot response" });
//   }
// };

export const chatBot = async (req, res) => {
  try {
    const userMessage = req.body.message.toLowerCase();
    console.log(userMessage);
    let response = "";
    if (userMessage.includes("hi") || userMessage.includes("hello"))
      response = "Hello , How can I help you?";
    else if (userMessage.includes("react"))
      response =
        "React is an open-source JavaScript library used for building user interfaces in web applications. Developed by Facebook, it allows developers to create reusable UI components and efficiently update the view when data changes, following a declarative approach. React's virtual DOM minimizes direct manipulation of the actual DOM, leading to better performance. It is often used in conjunction with other libraries or frameworks to build modern, interactive, and dynamic web interfaces.";
    else if (userMessage.includes("react"))
      response =
        "React is an open-source JavaScript library used for building user interfaces in web applications. Developed by Facebook, it allows developers to create reusable UI components and efficiently update the view when data changes, following a declarative approach. React's virtual DOM minimizes direct manipulation of the actual DOM, leading to better performance. It is often used in conjunction with other libraries or frameworks to build modern, interactive, and dynamic web interfaces.";
    else if (userMessage.includes("css"))
      response =
        "CSS (Cascading Style Sheets) is a language used to control the presentation and layout of web documents. It works in tandem with HTML to define how elements on a webpage should appear, such as fonts, colors, spacing, and positioning. By applying styles through CSS, developers can create visually appealing and consistent designs for websites and web applications. CSS follows a cascading hierarchy, where styles can be inherited, overridden, or combined, allowing for flexible and efficient design management.";
    else if (userMessage.includes("javascript"))
      response =
        "JavaScript is a versatile programming language commonly used for web development. It enables dynamic behavior and interactivity on websites, running directly in web browsers. With its syntax influenced by Java and C, JavaScript supports event handling, DOM manipulation, and asynchronous operations. Node.js extends its utility to server-side scripting.";
    else if (userMessage.includes("html"))
      response =
        "HTML (Hypertext Markup Language) is a standardized language used to create the structure and content of web pages. It consists of tags that define the elements on a webpage, like headings, paragraphs, images, and links. HTML forms the foundation of a webpage's layout and content presentation.";
    else if (userMessage.includes("c++"))
      response =
        "C++ is a general-purpose programming language that is an extension of the C programming language. It supports object-oriented programming, allowing developers to create efficient and powerful software applications. C++ provides features like classes, templates, and polymorphism, enabling abstraction and code reusability. Its performance-oriented nature makes it suitable for system-level programming, game development, and other high-performance applications. With its rich standard library and versatility, C++ remains a popular choice for developers seeking a balance between performance and abstraction.";
    else if (userMessage.includes("thank you")) response = "You are welcome!";
    else response = "Sorry I didn't understand it?";

    // await axios.post(
    //   "https://api.botsonic.ai/v1/botsonic/generate",
    //   //"https://api.writesonic.com/v1/botsonic/botsonic/generate/9512d132-4124-470d-b890-eddbac30a84a",
    //   // '{"question": "How to develop these skills?", "chat_history": []}',
    //   {
    //     input_text: userMessage,
    //     chat_history: [],
    //   },
    //   {
    //     headers: {
    //       "Accept-Encoding": "gzip, deflate",
    //       Connection: "keep-alive",
    //       "Content-Type": "application/json",
    //       "User-Agent": "python-requests/2.28.1",
    //       accept: "application/json",
    //       token:"d45f3838-38a3-48a5-b659-d9a8d42b122c",
    //       //token: "00fde142-9299-4dcc-8e60-425d568b3180",
    //     },
    //   }
    // );

    res.json({ response: response });
  } catch (err) {
    console.log(err.message);
    console.log("This was an error message");
    res.status(500).json({ error: "Failed to generate chatbot response" });
  }
};
