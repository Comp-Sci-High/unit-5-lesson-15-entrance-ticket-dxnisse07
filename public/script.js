const base = "https://bug-free-couscous-wrgrp5p6g54v255rg-3000.app.github.dev"

// Create a function that tests the post route handler [2 pts]
async function random() {
    try {
    const response= await fetch(base + "/",{
        method: "POST",
        headers: {
             "Content-Type": "application/json"
        },
        body: JSON.stringify()
    })
}
}

// Call the function [1 pt]
// Show us the successful POST fetch [1 pt]

