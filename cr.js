let runs = 0;
let balls = 0;
const maxBalls = 6;

document.getElementById('hitBtn').addEventListener('click', function() {
    if (balls < maxBalls) {
        let outcome = getRandomOutcome();
        
        
        if (outcome === 'Out') {
            document.getElementById('status').innerText = 'You are Out!';
            this.disabled = true; // Disable the button after getting out
            document.getElementById('resetbtn').disabled=false;
            if (balls === 0 && runs === 0) {
                document.getElementById('status').innerText = 'Golden Duck!';
                setTimeout(() => {
                  alert("THALA for a reason");
                }, 0);
              }
                if(balls===1 && runs===0)
                    {
                        document.getElementById('status').innerText='Duck!'
                    }
        } else {
            runs += outcome;
            balls++;
            document.getElementById('runs').innerText = runs;
            document.getElementById('balls').innerText = balls;
            document.getElementById('status').innerText = `You hit ${outcome} runs!`;
        }

        if (balls === maxBalls) {
            document.getElementById('status').innerText = 'Game Over!';
            this.disabled = true;
            document.getElementById('resetbtn').disabled=false;
        }
    }
});

document.getElementById('resetbtn').addEventListener('click',function(){
    runs=0;
    balls=0;
    document.getElementById('runs').innerText = runs;
    document.getElementById('balls').innerText = balls;
    document.getElementById('status').innerText = 'Press Hit to play!';
    document.getElementById('hitBtn').disabled=false;
    this.disabled=true;

})

function getRandomOutcome() {
    const outcomes = [0, 1, 2, 4, 6, 'Out'];
    return outcomes[Math.floor(Math.random() * outcomes.length)];
}
