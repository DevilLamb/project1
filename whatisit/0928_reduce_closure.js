const Form = () => {
  const state = {};

  function register(name, validator = (value) => {}) {
    // register시, state에 필드를 등록합니다.
    // 필드 등록 객체는 { value, validator } 입니다.
    // value는 빈 문자열로 초기화됩니다.
    state[name] = {
      value: "",
      validator,
    };
  }

  function validate() {
    // state의 전체 필드를 검사합니다.
    // validator(value) 로 value가 유효한지 검사할 수 있습니다.
    // 전체 필드가 유효해야만 폼이 유효합니다.
    return Object.values(state).reduce(
      (flag, { value, validator }) => validator(value) && flag,
      true
    );
  }

  function getFormData() {
    // state의 각 필드에 있는 value를 모아 하나의 객체로 리턴합니다.
    // { name : 'Kim', age: 30 } 의 형식으로 리턴해야 합니다.
    return Object.entries(state).reduce((formData, [key, formObject]) => {
      formData[key] = formObject.value;
      return formData;
    }, {});
  }

  function setValue(name, value) {
    // name으로 찾은 필드의 value를 설정합니다.
    // name에 해당하는 상태는 반드시 있다고 가정합니다.
    state[name] = {
      ...state[name],
      value,
    };
  }

  return {
    register,
    validate,
    getFormData,
    setValue,
  };
};

export default Form;

// 예제
let stocks = [
  { name: "엘리스전자", purchasePrice: 80000, currentPrice: 100000, count: 5 },
  { name: "엘리스톡", purchasePrice: 60000, currentPrice: 90000, count: 10 },
  { name: "엘리스", purchasePrice: 30000, currentPrice: 50000, count: 5 },
];
// 총 매매손익은?
let result = stocks.reduce(
  (acc, { purchasePrice, currentPrice, count }) =>
    acc + (currentPrice - purchasePrice) * count,
  0
);
document.write(result);

// 첫번째 과정
/*
  acc: 0 (초기값 0)
  { purchasePrice, currentPrice, count } (엘리스전자 주식, cur): { purchasePrice: 80000, currentPrice: 100000, count: 5 }
  반환값 (return) = 0 + (100000 - 80000) * 5 = 100000 -> 다음 과정의 acc가 됨
  name은 불필요해서 가져오지 않은 것입니다!
  */

// 두번째 과정
/*
  acc: 100000
  { purchasePrice, currentPrice, count } (엘리스톡 주식, cur): { purchasePrice: 60000, currentPrice: 90000, count: 10 }
  반환값 (return) = 100000 + (90000 - 60000) * 10 = 400000
  */

// 세번째 과정
/*
  acc: 400000
  { purchasePrice, currentPrice, count } (엘리스톡 주식, cur): { purchasePrice: 30000, currentPrice: 50000, count: 5 }
  반환값 (return) = 400000 + (50000 - 30000) * 5 = 500000
  */
