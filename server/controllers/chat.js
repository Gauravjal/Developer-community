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
  // try {
    const userMessage = req.body.message;

    const response = await axios.post(
      "https://api.botsonic.ai/v1/botsonic/generate",
      //"https://api.writesonic.com/v1/botsonic/botsonic/generate/9512d132-4124-470d-b890-eddbac30a84a",
      // '{"question": "How to develop these skills?", "chat_history": []}',
      {
        input_text: userMessage,
        chat_history: [],
      },
      {
        headers: {
          "Accept-Encoding": "gzip, deflate",
          Connection: "keep-alive",
          "Content-Type": "application/json",
          "User-Agent": "python-requests/2.28.1",
          accept: "application/json",
          token:"d45f3838-38a3-48a5-b659-d9a8d42b122c",
          //token: "00fde142-9299-4dcc-8e60-425d568b3180",
        },
      }
    );
    console.log(response.data);
    // console.log(response.data[0].data.answer);
    // res.json({ response: response.data[0].data.answer });
  // } catch (err) {
    // console.log(err.message);
    // console.log("This was an error message");
    //     res.status(500).json({ error: "Failed to generate chatbot response" });
  // }
};
