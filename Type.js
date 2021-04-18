class TypeWriter {
    constructor() {
        this.sentence = sentence
        this.n = 0
        this.x = random(width / 2)
        this.y = random(height / 2)
    }
    dispose() {
        if (n < (sentence.length)) {
            text(sentence.substring(0, n + 1), x, y);
            n++;
            setTimeout(function () {
                typeWriter(sentence, n, x, y, speed)
            }, speed);
        }
    }
}