const express = require("express");
const path = require("path");

const app = express();

const PORT = 3000;

// Middleware

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, "public")));

// EJS setup
app.set("view engine", "ejs");

app.set("views", path.join(__dirname, "views"));

// Home page
app.get("/", (req, res) => {

res.render("index");

});

// Generate content
app.post("/generate", async (req, res) => {

    const {
        topic,
        contentType,
        tone,
        length
    } = req.body;


    console.log("User request:");

    console.log({
        topic,
        contentType,
        tone,
        length
    });


    try {

        const response = await fetch("http://localhost:11434/api/generate", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({

                model: "qwen2.5:1.5b",

                prompt: `
Create content based on the following instructions.

Topic:
${topic}

Content type:
${contentType}

Tone:
${tone}

Length:
${length}

Write only the requested content.
Do not explain what you are doing.
                `,

                stream: false

            })

        });


        const data = await response.json();


        console.log("Ollama response received");


        res.json({

            success: true,

            content: data.response

        });


    } catch (error) {

        console.error("Ollama error:", error);


        res.status(500).json({

            success: false,

            error: "Failed to generate content."

        });

    }

});


app.listen(PORT, () => {

    console.log(`Server running at http://localhost:${PORT}`);

});