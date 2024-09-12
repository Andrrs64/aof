import {input} from './input'


export const day4 = () => {
    const lines: string[] = []

    input.split(/\r?\n|\r|\n/g).forEach((line: string) => {
        if (line.length) {
            lines.push(line);
        }
    });

    let result = 0

    lines.forEach((line) => {
        const winningNums: string[] = [];

        for (let i = 0; i < 10; i++){
            const start = 9 + (i * 3)
            const num = line.slice(start, start + 3)
            winningNums.push(num.trim());
        }

        const ourNums: string = line.split('|')[1];
        let cardValue = 0;

        for (let i = 0; i < 25; i++) {
            const start = i * 3;
            const num = ourNums.slice(start, start + 3).trim()

            if (winningNums.find((n) => n === num)) {
                cardValue = cardValue === 0 ? 1 : cardValue * 2
            }
        }

        result += cardValue;
    })

    console.log(result);
}
