import { input } from './input';

interface NumberObject {
    num: string;
    line: number;
    start: number;
    end: number;
}

interface StarObject {
    index: number;
    line: number;
}

export const day3Part2 = () => {
    const lines: string[] = [];
    
    // Split input by lines
    input.split(/\r?\n|\r|\n/g).forEach((line: string) => {
        if (line.length) {
            lines.push(line);
        }
    });

    const numbers: NumberObject[] = [];
    const stars: StarObject[] = [];

    // Extract numbers and their positions
    lines.forEach((current, index) => {
        let prev: NumberObject | undefined = undefined;
        for (let i = 0; i < current.length; i++) {
            const char = current.charAt(i);
            if (/[0-9]/.test(char)) {
                if (prev !== undefined) {
                    prev.end = i;
                    prev.num += char;
                } else {
                    prev = { num: char, line: index, start: i, end: i };
                }
            } 
            if (!/[0-9]/.test(char) || i == current.length -1) {
                if (prev !== undefined) {
                    numbers.push(prev);
                    prev = undefined;
                }
                if (char == '*') {
                    stars.push({ index: i, line: index });
                }
            }
        }
        if (prev !== undefined) {
            numbers.push(prev);
        }
    });

    let result = 0;    
    stars.forEach ((gear) => {
        const nums: NumberObject[] = [];
        numbers.forEach ((num) => {
            if (num.line >= gear.line -1 && num.line <= gear.line +1) {
                if (gear.index >= num.start -1 && gear.index <= num.end +1) {
                    nums.push(num);
                }
            }
        })
        if (nums.length == 2) {
            result += parseInt(nums[0].num) * parseInt(nums[1].num);
        }
    })
    console.log(result);
};
