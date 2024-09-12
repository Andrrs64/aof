import {input} from './input'


export const day4Part2 = () => {
    const lines: string[] = []

    input.split(/\r?\n|\r|\n/g).forEach((line: string) => {
        if (line.length) {
            lines.push(line);
        }
    });
    const cardNums: string[][] = []
    const cardInstances: number[] = new Array<number>(lines.length).fill(1)
    lines.forEach((line, lineNum) => {
        console.log('Card ' + (lineNum + 1))
        const winningNums: string[] = [];

        for (let i = 0; i < 10; i++){
            const start = 9 + (i * 3)
            const num = line.slice(start, start + 3)
            winningNums.push(num.trim());
        }

        const ourNums: string = line.split('|')[1];
        cardNums.push([])
        
        for (let i = 0; i < 25; i++) {
            const start = i * 3;
            const num = ourNums.slice(start, start + 3).trim()
            cardNums[lineNum].push(num)
        }

        let matches = 0;
        winningNums.forEach((num) => {
            if (cardNums[lineNum].find((n) => n === num)) {
                matches++
            }
        })

        for (let i = 1; i <= matches; i++) {
            cardInstances[lineNum + i] += cardInstances[lineNum]
        }
    })

    let result = 0
    cardInstances.forEach((instances) => {
        result += instances
    })
    console.log(result);
}
