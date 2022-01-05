function moveElement(duration, distance, element) {
    const start = performance.now();

    function move(currentTime) {
        const elapsedTime = currentTime - start;
        const progress = elapsedTime / duration;

        const amountToMove = progress * distance;
        element.style.transform = `translateX(${amountToMove}px)`;

        if (progress < 1) {
            requestAnimationFrame(move);
        }
    }

    move(performance.now());
}
