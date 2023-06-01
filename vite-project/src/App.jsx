const { useState } = require("react");
const { Configuration, OpenAIApi } = require("openai");
// import readline from 'readline';
const readline = require("readline");

const configuration = new Configuration({
  organization: "org-ZNJWqpYNQafRj7BH9XF27XLm",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);
  return (
    <main>
      <h1>React ChatGPT App</h1>
{
  isTyping ? (
<div>

<p>

  <i>
    Typing
  </i>
</p>
</div>
  )
}
      
      <form onSubmit={chat()}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a Message and hit enter"
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </main>
  );
}

export default App;
