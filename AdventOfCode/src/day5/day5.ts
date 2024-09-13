import { input } from "./input";

interface MapResults {
    // id of mappings
    [id: string]: {
        // origin seed
        [id: string]: number
    }
}

export const day5 = () => {
    const lines: string[] = [];
    
    // Split input by lines
    input.split(/\r?\n|\r|\n/g).forEach((line: string) => {
        if (line.length) {
            lines.push(line);
        }
    });

    const seeds = lines[0].slice(7).split(' ');
    const mapResults: MapResults = {};

    let currentMap: string;

    lines.slice(1).forEach((line) => {
        if (line.trim() === '') {
            return;
        }

        const splitString = line.split(' ');

        if (splitString[1] === 'map:') {
            currentMap = splitString[0];
            mapResults[currentMap] = {};
            return;
        }

        if (splitString.length === 3 && currentMap) {
            const [destStart, srcStart, rangeLength] = splitString.map((v) => parseInt(v));
            const sourceType = currentMap.split('-to-')[0];

            const sourceObjectKey = Object.keys(mapResults).find((v) => v.endsWith(sourceType));
            let sourceObject: {[id: string]: number}

            if (sourceObjectKey) {
                sourceObject = mapResults[sourceObjectKey];
            }

            seeds.forEach((seed) => {
                let value = parseInt(seed);

                if (sourceObject) {
                    value = sourceObject[seed];
                }

                if (
                    value >= srcStart &&
                    value < srcStart + rangeLength
                ) {
                    mapResults[currentMap][seed] =
                        destStart + value - srcStart;

                    return;
                }

                if (mapResults[currentMap][seed] === undefined) {
                    mapResults[currentMap][seed] = value;
                }
            })
        }
     })

    let result: number = Infinity;
    Object.keys(mapResults['humidity-to-location']).forEach((key) => {
        const value = mapResults['humidity-to-location'][key]
        
        if (value < result) {
            result = value;
        }
    })

    console.log(result)
}
