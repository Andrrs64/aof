import { input } from './input';

interface NumberObject {
    num: string;
    line: number;
    start: number;
    end: number;
}

export const day3 = () => {
    const lines: string[] = [];
    
    // Split input by lines
    input.split(/\r?\n|\r|\n/g).forEach((line: string) => {
        if (line.length) {
            lines.push(line);
        }
    });

    const numbers: NumberObject[] = [];

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
            }
        }
        if (prev !== undefined) {
            numbers.push(prev);
        }
    });

    let result = 0;

    // Process each number to check its surroundings
    numbers.forEach((num) => {
        const chars: string[] = [];

        // Check horizontally
        if (num.start > 0) {
            chars.push(lines[num.line].charAt(num.start - 1));
        }
        if (num.end < lines[num.line].length - 1) {
            chars.push(lines[num.line].charAt(num.end + 1));
        }

        // Check vertically
        if (num.line > 0) {
            let start = num.start > 0 ? num.start - 1 : num.start;
            let end = num.end < lines[num.line].length - 1 ? num.end + 1 : num.end;
            for (let i = start; i <= end; i++) {
                chars.push(lines[num.line - 1].charAt(i));
            }
        }
        if (num.line < lines.length - 1) {
            let start = num.start > 0 ? num.start - 1 : num.start;
            let end = num.end < lines[num.line].length - 1 ? num.end + 1 : num.end;
            for (let i = start; i <= end; i++) {
                chars.push(lines[num.line + 1].charAt(i));
            }
        }

        // Check diagonals
        const diagonals = [
            [-1, -1], [-1, 1], [1, -1], [1, 1] // (top-left, top-right, bottom-left, bottom-right)
        ];
        diagonals.forEach(([dx, dy]) => {
            const newRow = num.line + dx;
            const newCol = num.start + dy;
            if (newRow >= 0 && newRow < lines.length && newCol >= 0 && newCol < lines[newRow].length) {
                chars.push(lines[newRow].charAt(newCol));
            }
        });

        // Check if any surrounding character is not a number or '.'
        let isSerialNumber = false;
        for (const char of chars) {
            if (/[^0-9]/.test(char) && char !== '.') {
                isSerialNumber = true;
                break;
            }
        }

        if (isSerialNumber) {
            console.log(num);
            result += parseInt(num.num);
        }
    });

    console.log(result);
};
