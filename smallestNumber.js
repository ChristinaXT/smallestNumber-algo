function solution(A) {

    let x = 1

    A.filter(x => x >= 1)
     .sort((a, b) => a - b)
     .map((val, i, arr) => {
        if(x < arr[i]) return
        x = arr[i] + 1
    })

    return x

}

console.log(solution( [1, 3, 6, 4, 1, 2]));
console.log(solution([1, 2, 3]));
