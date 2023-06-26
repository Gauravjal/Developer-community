

export const chatBot = async (req, res) => {
  try {
    const userMessage = req.body.message;


    let chatbotResponse;
  
    // Check the user message and generate a response based on the input
    if (userMessage.includes('hello')) {
      chatbotResponse = 'Hello! How can I assist you today?';
    } else if (userMessage.includes('help')) {
      chatbotResponse = 'Sure! What do you need help with?';
    } else if (userMessage.includes('bye')) {
      chatbotResponse = 'Goodbye! Have a great day!';
    } else {
      chatbotResponse = "I'm sorry, but I didn't understand your message.";
    }
    res.json({ response: chatbotResponse });

  } catch (err) {
    res.status(404).json(err);
  }
};
