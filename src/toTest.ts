export function exampleAdd(x: number, y: number): number {
    let temp = x + y;
    return temp;
}

export function exampleBranch(x : boolean): number {
    if (x) {
        return 1;
    } else {
        return 0;
    }
}

export function exampleStringManip(inp: String): string {
    const temp = Array.from({length: (inp.length)}, (_, i) => i + 1)
    let newString: string = "";
    for (let i in temp) {
        newString += inp[i];
    }
    return newString + inp;
}