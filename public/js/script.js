const form = document.getElementById("contentForm");

const result = document.getElementById("result");

const generateBtn = document.getElementById("generateBtn");

const copyBtn = document.getElementById("copyBtn");

const wordCount = document.getElementById("wordCount");

form.addEventListener("submit", async (event) => {

event.preventDefault();


const topic = document.getElementById("topic").value;

const contentType =
    document.getElementById("contentType").value;

const tone =
    document.getElementById("tone").value;

const length =
    document.getElementById("length").value;


generateBtn.disabled = true;

generateBtn.textContent = "Generating...";

result.textContent = "Creating your content...";


try {

    const response = await fetch("/generate", {

        method: "POST",

        headers: {
            "Content-Type": "application/json"
        },

        body: JSON.stringify({

            topic,
            contentType,
            tone,
            length

        })

    });


    const data = await response.json();


    if (data.success) {

        result.textContent = data.content;

        copyBtn.disabled = false;

        updateWordCount(data.content);

    }


} catch (error) {

    console.error(error);

    result.textContent =
        "Something went wrong. Please try again.";

}


generateBtn.disabled = false;
generateBtn.textContent = "✦ Generate Content";
});

// Word count
function updateWordCount(text) {

const words = text
    .trim()
    .split(/\s+/)
    .filter(word => word.length > 0);
wordCount.textContent = `${words.length} words`;

}

// Copy button
copyBtn.addEventListener("click", async () => {
await navigator.clipboard.writeText(
    result.textContent
);

copyBtn.textContent = "Copied!";

setTimeout(() => {

    copyBtn.textContent = "Copy";

}, 1500);

});
