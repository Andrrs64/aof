import {input} from './input'

interface numberObject {
    num: string;
    line: number;
    start: number;
    end: number;
}

export const day3 = () => {
    const lines:string[] = []
    input.split(/\r?\n|\r|\n/g).forEach((line:string) => {
        if (!line.length) {
            return
        }
        lines.push(line);
    });
    const numbers:numberObject[] = []
    lines.forEach((current, index) => {
        let prev: numberObject | undefined = undefined
        for (let i =0; i < current.length; i++) {
            const char = current.charAt(i);
            if (/[0-9]/.test(char)) {
                if (prev !== undefined) {
                    prev.end = i
                    prev.num += char
                }       
                else {
                    prev = {num: char, line: index, start: i, end: i}
                }
            }
            else if (prev !== undefined) {
                numbers.push(prev);
                prev = undefined;
            }
        }
        return 
    })
    let result = 0

    numbers.forEach((num) => {
        const chars:string[] = []
        if (num.start > 0) {
            chars.push(lines[num.line].charAt(num.start - 1))
        }
        if (num.end < lines[num.line].length - 1) {
            chars.push(lines[num.line].charAt(num.end + 1))
        }
        if (num.line > 0) {
            let start = num.start > 0 ? num.start - 1 : num.start
            let end = num.end < lines[num.line].length - 1
                ? num.end + 1
                : num.end
            for (let i = start; i <= end; i++) {
                chars.push(lines[num.line - 1].charAt(i))
            }
        }
        if (num.line < lines.length - 1) {
            let start = num.start > 0 ? num.start - 1 : num.start
            let end = num.end < lines[num.line].length - 1 ? num.end + 1 : num.end
            for (let i = start; i <= end; i++) {
                chars.push(lines[num.line + 1].charAt(i))
            }
        }

        let isSerialNumber = false
        for (let index in chars) {
            if (/[^0-9]/g.test(chars [index]) && chars [index] != '.') {
                isSerialNumber = true
            }
        }
        if (isSerialNumber) {
            result += parseInt(num.num)
        }
    })
    console.log(result)
}
