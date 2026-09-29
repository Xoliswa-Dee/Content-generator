# ContentGen
ContentGen is a local AI-powered content generator built with Node.js,
Express.js, JavaScript, EJS, CSS, Ollama, and Qwen 2.5 (1.5B).

The application allows a user to enter a topic, select a content type,
tone, and length, and receive dynamically generated content from a
locally running AI model.

# Features
-   Topic-based content generation
-   Multiple content types:
    -   Social media posts
    -   Blog posts
    -   Product descriptions
    -   Advertisements
    -   Emails
    -   YouTube descriptions
-   Multiple writing tones:
    -   Professional
    -   Friendly
    -   Casual
    -   Persuasive
    -   Funny
-   Short, medium, and long output options
-   Copy generated content to the clipboard
-   Word-count display
-   Loading state while content is generated
-   Local AI processing through Ollama
-   No OpenAI API key required

# Technologies
  Technology      Purpose
  --------------- ---------------------------------------
  HTML/EJS        Page structure and dynamic rendering
  CSS             User interface and responsive styling
  JavaScript      Frontend interaction and API requests
  Node.js         Backend runtime
  Express.js      Web server and API route
  Ollama          Local AI model runtime
  Qwen 2.5 1.5B   Local language model
  Git/GitHub      Version control and project hosting

# Project Structure
content-generator/
│
├── public/
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
│
├── views/
│   └── index.ejs
│
├── .gitignore
├── package-lock.json
├── package.json
├── server.js
└── README.md

# Requirements
Install the following before running the application:

-   Node.js
-   npm
-   Ollama
-   Qwen 2.5 1.5B model

Check Node.js:
bash
node --version

Check npm:
bash
npm --version

Check Ollama:
bash
ollama --version

# Installing the AI Model
Pull the model with:
bash
ollama pull qwen2.5:1.5b

You can test it with:
bash
ollama run qwen2.5:1.5b

# Installation
Clone the repository:
bash
git clone <your-github-repository-url>

Enter the project folder:
bash
cd content-generator

Install the dependencies:
bash
npm install

Start the development server:
bash
npm run dev

Then open:
http://localhost:3000

Make sure Ollama is available locally and the `qwen2.5:1.5b` model is
installed.

## Example

A user could enter:

``` text
Topic: Benefits of learning programming
Content Type: Blog Post
Tone: Professional
Length: Medium
```

The application converts these selections into a prompt and sends it to
Qwen through Ollama.

## Development Prompts

The project was developed interactively with an AI assistant. The main
prompts used during development included:

1.  **Initial project** \> Create a content generator project

2.  **Initial implementation** \> Start with steps 1 to 3

3.  **Debugging** \> TypeError: "" is not a function ... server.js:26:3

4.  **Continue development** \> I fixed the error

5.  **AI integration** \> We can do the next steps

6.  **Switching AI providers** \> I see that openai has limited prompts,
    I want to use Ollama instead. How do I do it? It's already
    downloaded it

7.  **Selecting the local model** \> change the llama version to:
    qwen2.5:1.5b

8.  **Version control** \> Let's add this to github

9.  **Documentation** \> Create a readme and then create a
    documentation. Include prompts I used to create this project

These prompts show the development process from project conception,
through implementation and debugging, to local AI integration, version
control, and documentation.

## Current Status
The core application is connected to Ollama and is designed to generate
content using Qwen 2.5 1.5B.

Planned improvements include:
-   Improved prompt engineering
-   Better error messages
-   Regenerate functionality
-   Content history
-   Saved/favourite content
-   Improved loading animations
-   More content formats
-   User-customisable prompts
-   UI/UX improvements
-   Deployment documentation
