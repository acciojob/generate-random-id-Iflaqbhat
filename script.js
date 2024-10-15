function makeid(l) {
  // write your code here
	const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';

    // Loop to generate the string
    for (let i = 0; i < l; i++) {
        // Generate a random index
        const randomIndex = Math.floor(Math.random() * characters.length);
        // Append the character at the random index to the result
        result += characters[randomIndex];
    }

    return result;

}

// Do not change the code below.
const l = prompt("Enter a number.");
alert(makeid(l));
