function solution(n) {
    return Array.from({ length: n }, (_, i) => i + 1).filter(num => num % 2 == 0).reduce((sum, num) => sum + num, 0);
}