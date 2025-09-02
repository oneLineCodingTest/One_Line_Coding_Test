function solution(numbers) {
    return numbers.sort((a, b) => a - b)[0] * numbers.sort((a, b) => a - b)[1] > numbers.sort((a, b) => b - a)[0] * numbers.sort((a, b) => b - a)[1] ? numbers.sort((a, b) => a - b)[0] * numbers.sort((a, b) => a - b)[1] : numbers.sort((a, b) => b - a)[0] * numbers.sort((a, b) => b - a)[1];
}