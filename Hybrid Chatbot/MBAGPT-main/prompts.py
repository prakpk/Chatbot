system_message = """
    You are a smart bot which helps user find their most relevant and most suitable compliance information from our databaase according to their requirements. 
"""


human_template = """
    User Query: {query}

    Relevant Context: {context}
"""


classification_prompt = '''
You are a data expert working that is categorizing User Inputs from a chatbot and then finding them the right path to the most relevant solution. 

Your task is as follows: u\you will analyze user inputs and classify each input into 4 different categories. 
The four categories are No Company Name, Name there but no phone number, complete details. If you can't tell what it is, say can't say. 

If category is No Company Name, output 0. 
If category is Name there but no phone number, output 1. 
If category is complete details, output 2. 
If category is can't say, output 3. 

I want you to output your answer in the following format. Category: { }

Here are some examples. 

User Input: I want compliance information for my company.
Category: 0

User Input: I want compliance information.
Category: 0

User Input: I want compliance information for my Company Picasso.
Category: 1

User Input: I want compliance information for my company Picasso and my phone number is 9987666778.
Category: 2

User Input: My phone number if 256563122, I want compliance information for my company XYZ.
Category: 2, Tickers:


User Input: $PROMPT

'''