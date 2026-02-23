/**
 * Consume an array of numbers, and return a new array containing
 * JUST the first and last number. If there are no elements, return
 * an empty array. If there is one element, the resulting list should
 * the number twice.
 */
export function bookEndList(numbers: number[]): number[] {
    let temp: number[] = [];
    if (numbers.length >= 2) {
        temp.push(numbers[0]);
        temp.push(numbers[numbers.length - 1]);
    }
    if (numbers.length == 1) {
        temp.push(numbers[0]);
        temp.push(numbers[0]);
    }
    return temp;
}

/**
 * Consume an array of numbers, and return a new array where each
 * number has been tripled (multiplied by 3).
 */
export function tripleNumbers(numbers: number[]): number[] {
    let temp: number[] = numbers.map((num: number): number => num * 3);
    return temp;
}

/**
 * Consume an array of strings and convert them to integers. If
 * the number cannot be parsed as an integer, convert it to 0 instead.
 */
export function stringsToIntegers(numbers: string[]): number[] {
    let temp: number[] = numbers.map((num: string) => {
        const par = parseInt(num);
        return isNaN(par) ? 0 : par;
    });
    return temp;
}

/**
 * Consume an array of strings and return them as numbers. Note that
 * the strings MAY have "$" symbols at the beginning, in which case
 * those should be removed. If the result cannot be parsed as an integer,
 * convert it to 0 instead.
 */
// Remember, you can write functions as lambdas too! They work exactly the same.
export const removeDollars = (amounts: string[]): number[] => {
    let temp: number[] = amounts.map((amount: string) => {
        const fixed = amount.startsWith("$") ? amount.slice(1) : amount;
        const par = parseInt(fixed);
        return isNaN(par) ? 0 : par;
    });
    return temp;
};

/**
 * Consume an array of messages and return a new list of the messages. However, any
 * string that ends in "!" should be made uppercase. Also, remove any strings that end
 * in question marks ("?").
 */
export const shoutIfExclaiming = (messages: string[]): string[] => {
    let temp: string[] = messages
        .filter((message: string) => !message.endsWith("?"))
        .map((message: string) =>
            message.endsWith("!") ? message.toUpperCase() : message,
        );
    return temp;
};

/**
 * Consumes an array of words and returns the number of words that are LESS THAN
 * 4 letters long.
 */
export function countShortWords(words: string[]): number {
    let count = words.filter((word: string) => word.length < 4);
    return count.length;
}

/**
 * Consumes an array of colors (e.g., 'red', 'purple') and returns true if ALL
 * the colors are either 'red', 'blue', or 'green'. If an empty list is given,
 * then return true.
 */
export function allRGB(colors: string[]): boolean {
    let newArr = colors.filter(
        (color: string) =>
            color === "red" || color === "green" || color === "blue",
    );
    return newArr.length === colors.length;
}

/**
 * Consumes an array of numbers, and produces a string representation of the
 * numbers being added together along with their actual sum.
 *
 * For instance, the array [1, 2, 3] would become "6=1+2+3".
 * And the array [] would become "0=0".
 */
export function makeMath(addends: number[]): string {
    if (addends.length === 0) {
        return "0=0";
    }
    let sum: number = addends.reduce((total, num) => total + num, 0);
    let expression = addends.join("+");
    return sum + "=" + expression;
}

/**
 * Consumes an array of numbers and produces a new array of the same numbers,
 * with one difference. After the FIRST negative number, insert the sum of all
 * previous numbers in the list. If there are no negative numbers, then append
 * the sum to the list.
 *
 * For instance, the array [1, 9, -5, 7] would become [1, 9, -5, 10, 7]
 * And the array [1, 9, 7] would become [1, 9, 7, 17]
 */
export function injectPositive(values: number[]): number[] {
    let temp: number = values.findIndex((value) => value < 0);
    if (temp !== -1) {
        let sum: number = values
            .slice(0, temp)
            .reduce((total, num) => total + num, 0);
        return [...values.slice(0, temp + 1), sum, ...values.slice(temp + 1)];
    }
    let tSum: number = values.reduce((total, num) => total + num, 0);
    return [...values, tSum];
}
