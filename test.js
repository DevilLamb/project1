console.log("hello!");

//마천루 문제

function solution(input) {
  var result = [];
  var star = "";
  for (var i = 1; i <= input; i++) {
    if (star.length == 5) {
      result.push(star);
    } else {
      star += "*";
      result.push(star);
    }
  }
  // 출력할 결과를 문자열로 return 하세요.
  console.log(result.join("\n"));
}

//반쪽 피라미드 문제

function solution(num) {
  var sol = [];
  for (i = 1; i <= num; i++) {
    sol.push(" ".repeat(num - i) + "*".repeat(i));
  }
  return sol.join("\n");
}
