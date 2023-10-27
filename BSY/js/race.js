
document.addEventListener("DOMContentLoaded", function () {
    const snails = document.querySelectorAll("#snail1,#snail2,#snail3,#snail4");
    const startButton = document.getElementById("startButton");
    const resultText = document.getElementById("result");
  
    startButton.addEventListener("click", startRace);
  
    function startRace() {
        startButton.disabled = true;
        resultText.textContent = "경주 중...";
  
        const trackWidth = 420;
        const snailWidth = 20;
  
        const raceInterval = setInterval(function (index) {
            snails.forEach((snail) => {
                snail.position = snail.position || 0;
                snail.position += Math.random() * 10;
                const snailElement = document.getElementById(`snail-${snail.id}`);
                snail.style.left = snail.position + "px";

                if (snail.position + snailWidth >= trackWidth) {
                    clearInterval(raceInterval);
                    resultText.innerText = `${snail.id}번 달팽이가 1등으로 도착했습니다! :)`;
                    startButton.disabled = false;
                }
            });
        }, 100);
    }
});
