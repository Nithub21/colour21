function placeBet() {
    const amount = parseFloat(document.getElementById("amount").value);
    const guess = document.getElementById("guess").value;
    const resultDiv = document.getElementById("result");
    const coin = document.getElementById("coin");

    // Validate input
    if (isNaN(amount) || amount < 10 || (amount % 10 !== 0)) {
        resultDiv.innerHTML = '<span class="error">Minimum bet amount is ₹10 and must be in multiples of 10.</span>';
        return;
    }

    if (guess !== 'red' && guess !== 'green') {
        resultDiv.innerHTML = '<span class="error">Please select a valid guess.</span>';
        return;
    }

    // Animate coin flip
    coin.classList.add('animate-spin');

    // Determine outcome after animation
    setTimeout(() => {
        const outcome = Math.random() < 0.5 ? 'red' : 'green';
        coin.style.animation = 'none';
        coin.offsetHeight; // trigger reflow
        coin.style.animation = null;

        coin.className = 'coin';
        coin.classList.add(outcome);

        if (guess === outcome) {
            const winnings = amount * 1.9;
            resultDiv.innerHTML = `<span class="win">You won ₹${winnings.toFixed(2)}!</span>`;
        } else {
            resultDiv.innerHTML = '<span class="lose">You lost! Better luck next time.</span>';
        }
    }, 1500); // 1.5 seconds animation time
}