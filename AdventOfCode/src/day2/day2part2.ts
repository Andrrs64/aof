import { input } from "./input"

const checkNumbers = (count: number, required: number) => {
    if (count < required) {
        return required;
    }

    return count
}

export const day2part2 = () => {
    const games = input.split('Game ');

    let result = 0;

    games.forEach((game) => {
        if (!game.trim().length) {
            return;
        }

        let redCount = 0;
        let greenCount = 0;
        let blueCount = 0;

        const cubeSegments = game.split(":")[1];

        const splittedSegments = cubeSegments.split(";");
        
        splittedSegments.forEach((segment) => {
            const colors = segment.split(",");

            colors.forEach((color) => {
                const trimmed = color.trim();
                const [countStr, name] = trimmed.split(" ");
                const count = parseInt(countStr);

                switch(name) {
                    case 'red':
                        redCount = checkNumbers(count, redCount);
                        break;
                    case 'green':
                        greenCount = checkNumbers(count, greenCount);
                        break;
                    case 'blue':
                        blueCount = checkNumbers(count, blueCount);
                        break;
                }
            })
        })
        result += redCount * blueCount * greenCount;
    })

    console.log(result);
}
