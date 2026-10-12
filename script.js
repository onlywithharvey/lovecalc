document.getElementById("theForm").addEventListener("submit", calc);

function calc(event) {
    event.preventDefault();
    const fName = document.getElementById("fName").value.trim();
    const lName = document.getElementById("lName").value.trim();

    if (fName === "" || lName === "") {
        alert("Please fill in all the fields");
        return;
    }

    // Combine names and force to lowercase for consistency
    const combinedNames = (fName + lName).toLowerCase();
    let sum = 0;

    // Sum up ASCII/Unicode numbers of every character
    for (let i = 0; i < combinedNames.length; i++) {
        sum += combinedNames.charCodeAt(i);
    }

    // The operation generates a clean 0 to 99 percentage
    const percentage = sum % 100;

    let relationshipTier = "just friends 😢";
    if (percentage >= 90) {
        relationshipTier = "soulmates! 💖✨";
    } else if (percentage >= 75) {
        relationshipTier = "great match! 🔥";
    } else if (percentage >= 50) {
        relationshipTier = "potential match! 🤔";
    }


    // Output the dynamic message to the UI
    document.getElementById("result").innerText =
        `${fName} & ${lName} are ${relationshipTier} with a ${percentage}% match.`;
}   