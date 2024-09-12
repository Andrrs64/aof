import {input} from './input'


export const day4Part2 = () => {
    const lines: string[] = []

    input.split(/\r?\n|\r|\n/g).forEach((line: string) => {
        if (line.length) {
            lines.push(line);
        }
    });
    const cardNums: string[][] = []
    const cardInstances: number[] = new Array<number>(lines.length).fill(0)
    lines.forEach((line, lineNum) => {
        cardInstances [lineNum] += 1
        const winningNums: string[] = [];

        for (let i = 0; i < 5; i++){
            const start = 7 + (i * 3)
            const num = line.slice(start, start + 3)
            winningNums.push(num.trim());
        }
        console.log(winningNums)
        const ourNums: string = line.split('|')[1];
        cardNums.push([])
        
        for (let i = 0; i < 8; i++) {
            const start = i * 3;
            const num = ourNums.slice(start, start + 3).trim()
            cardNums[lineNum].push(num)
        }
        for (let index = 0; index <= lineNum; index++) {
            let matchingNums = 0
            winningNums.forEach((num) => {
                if (cardNums[index].find((n) => n === num)) {
                    matchingNums ++
                }
            })
            for (let i = 1; i <= matchingNums; i++) {
                cardInstances[lineNum + i] += cardInstances [index]
            }
        }
    })
    console.log(cardInstances);
    let result = 0
    cardInstances.forEach((instances) => {
        result += instances
    })
    console.log(result);
}
