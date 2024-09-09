import { input } from "./input"

export const day2 = () => {
    const games = input.split('Game ');

    const redCount = 12;
    const greenCount = 13;
    const blueCount = 14;

    let result = 0;

    let fails = 0;

    games.forEach((game) => {
        if (!game.trim().length) {
            return;
        }

        const [gameNum, cubeSegments] = game.split(":");

        const splittedSegments = cubeSegments.split(";");
        let isPossible = true;
        
        splittedSegments.forEach((segment) => {
            const colors = segment.split(",");

            colors.forEach((color) => {
                if (!isPossible) {
                    return;
                }

                const trimmed = color.trim();
                const [countStr, name] = trimmed.split(" ");
                const count = parseInt(countStr);


                switch (name) {
                    case 'red':
                        isPossible = count <= redCount;
                        break;
                    case 'green':
                        isPossible = count <= greenCount;
                        break;
                    case 'blue':
                        isPossible = count <= blueCount;
                        break;
                    default:
                        break;
                }
            })
        })

        if (isPossible) {
            result += parseInt(gameNum)
        } else {
            fails++
        }
    })

    console.log(result, fails);
}
