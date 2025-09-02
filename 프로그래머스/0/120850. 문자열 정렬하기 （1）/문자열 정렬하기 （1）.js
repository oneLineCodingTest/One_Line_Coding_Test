function solution(my_string) {
    return my_string.split("").map(Number).filter(n => !isNaN(n)).sort();
}