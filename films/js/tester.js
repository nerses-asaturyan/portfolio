function solution(n, k) {
    return parseInt(Number(n).toString(2).split("").map((el,index,arr)=> (index === arr.length - k) ? "0":el).join(""),2);
}
console.log(solution(37,3))
