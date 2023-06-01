// import { Configuration,  OpenAIApi } from 'openai';
const { error } = require("console");
const { Configuration, OpenAIApi } = require("openai");
// import readline from 'readline';
const readline = require("readline");

const configuration = new Configuration({
  organization: "org-ZNJWqpYNQafRj7BH9XF27XLm",
  apiKey: "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",
});

const openai = new OpenAIApi(configuration);

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.prompt();
userInterface.on("line", async (input) => {
  await openai
    .createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: input }],
    })
    .then((result) => {
      console.log(result.data.choices[0].message.content);
      userInterface.prompt();
    }).catch(error=> console.log(error));
});
