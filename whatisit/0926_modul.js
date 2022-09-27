//모듈화하기!

// 이론

// 리팩토링이 무엇인가요?
// 소프트웨어 공학에서 ‘결과의 변경 없이 코드의 구조를 재조정함’을 뜻합니다.
//주로 코드의 가독성을 높이고 유지보수를 편하게 합니다. 하지만 버그를 없애거나 새로운 기능을 추가하는 행위는 아닙니다.

// 모듈이란 무엇인가요? =>재사용성이 높은 코드를 하나로 묶어서 쓰게 하는 것
// 모듈이란 프로그램을 구성하는 구성 요소로, 관련된 데이터와 함수를 하나로 묶은 단위를 의미합니다.
//보통 하나의 소스 파일에 모든 함수를 작성하지 않고, 함수의 기능별로 따로 모듈을 구성합니다.
//이러한 모듈을 활용해 하나의 파일로 작성하는 방식으로 프로그램을 만들게 됩니다.
//저번시간부터 이해가 안됨. readline부분부터 복습할 것!

import close from "./assets/close_icon.svg";
import media from "./assets/media_icon.svg";
import arrow from "./assets/arrow_back_icon.svg";

function modalTemplate() {
  //만들었던 모달창을 모듈화 시킬거야. 함수로 만들어서 호출하면 불러올 수 있게!
  return `<div class="modal__close">
                <img
                width="22px"
                height="22px"
                src=${close}
                alt="close_icon_logo"
                />
            </div>
            <div class="modal__card">
                <div class="modal__header">
                <div class="modal__back">
                    <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
                </div>
                <h2>새 게시물 만들기</h2>
                <p>공유하기</p>
                </div>
                <div class="modal__main">
                <img src=${media} alt="media_icon" />
                <h3>사진과 동영상을 업로드 해보세요.</h3>
                <label for="file">
                    <p>컴퓨터에서 선택</p>
                </label>
                <input type="file" name="file" id="file" />
                </div>
            </div>`; //여기까지가 모달창이야.
}

function postTemplate(img) {
  //여기는 모달창에서 이미지를 업로드하면 보이는 템플릿. 올리기 전 문구입력하는곳.
  return `
          <div class="modal__post">
            <img width="478px" height="478px" src=${img} alt="image" />
            <div class="modal__write">
              <textarea placeholder="문구 입력..." autofocus></textarea>
            </div>
          </div>
        `;
}

// 지시사항에 맞춰 readFile 매개변수를 작성하고, readAsDataURL에 인자를 전달하세요.
function readFile(file, cb) {
  //여기는 올린 파일을 읽어오는 함수! readFile 함수는 windows API함수이고 내가 만드는 건 아니야. 찾아봐!
  let reader = new FileReader(); //FileReader 객체로 파일을 읽을거야.

  reader.readAsDataURL(file);

  reader.onload = function () {
    //그 FileReader 에서 로드할 파일은
    cb(reader.result); //콜백함수~ 파일리더.결과에 있어!
    // 지시사항에 맞춰 코드를 작성하세요.
  };

  reader.onerror = function (error) {
    //근데 만약 에러가 나면 콜백으로 에러메시지 띄워
    cb(error);
    // 지시사항에 맞춰 코드를 작성하세요.
  };
}

function createModal() {
  //모달창을 함수로 만들어서 띄울건데
  const modalEl = document.createElement("div"); //여기는 모달창 만드는 부분
  modalEl.setAttribute("class", "modal__layout"); //모달의 레이아웃을 만들고
  modalEl.innerHTML = modalTemplate(); //이너를 모달 템플릿으로 채워주고
  document.querySelector("body").prepend(modalEl); //바디부분에 모달창을 띄우고

  const modalCloseEl = document.querySelector(".modal__close"); //닫으려면

  modalCloseEl.addEventListener("click", function () {
    //클로즈버튼을 클릭했을때
    document.querySelector("body").removeChild(modalEl); //바디에 있는 모달창을 지워줘
  });

  const fileEl = document.querySelector("#file"); // 그리고 파일을 찾아서
  fileEl.addEventListener("input", function () {
    //'input'하면  함수를 실행할건데
    readFile(fileEl.files[0], function (response) {
      //리드파일의 0번째 = 즉 올린 이미지를 불러올거야!
      if (response instanceof Error) {
        //근데 만약 response결과가 에러라면
        alert("Error:", response); //알람으로 에러라는 말과 그 에러 메시지를 띄워줘!
        document.querySelector("body").removeChild(modalEl); //그리고 모달창 닫을거야.
      }

      const imageBase64 = response; //아무튼 아무 문제 없으면 이미지를 불러오는데 이 이미지는 위에 response되는 값이고
      document
        .querySelector(".modal__card") //모달창의 이미지가 들어가는 부분에
        .setAttribute("class", "modal__card write--post"); //포스트 쓴다는 창을 하나 만들고
      document
        .querySelector(".modal__main") //메인부분에도
        .setAttribute("class", "modal__main write--post"); //메인에 이미지가 들어간 부분을 하나 만들어

      const backBtn = document.querySelector(".modal__back > img"); //여기는 뒤로가기 버튼과 공유 버튼
      const shareBtn = document.querySelector(".modal__header > p ");

      backBtn.style.visibility = "visible"; //모달창이 열렸을때 위 두가지 이미지도 보여야되니까 visibility = "visible" 해주자.
      shareBtn.style.visibility = "visible";

      document.querySelector(".modal__main").innerHTML = //그리고 모달창 메인의 내용은
        postTemplate(imageBase64); //위에 선언해줬던 postTemplate 함수에 imageBase64를 넣은것!

      backBtn.addEventListener("click", function () {
        //그리고 뒤로가기 버튼에도 효과를 주는데
        document.querySelector("body").removeChild(modalEl); //뒤로가기 버튼을 누르면 모달창을 없애(닫아)
        createModal();
      });

      shareBtn.addEventListener("click", function () {
        //공유하기 버튼을 누를 경우
        const databaseName = "instagram"; //데이터베이스(이미지)의 이름을 정하고
        const version = 1; //그 버젼도 정해주고
        const data = {
          content: document.querySelector(".modal__write > textarea").value, //그 안에 들어가는 내용물은 모달창의 내용입력 부분에 썼던 텍스트.값 이랑
          image: imageBase64, //올린 이미지.
        };
        if (window.indexedDB) {
          //위에 공유하기 버튼을 누를 경우에서 계속 -> 윈도우.인덱스db
          const request = indexedDB.open(databaseName, version); //리퀘스트에 아까 정한 데이터베이스 이름과 버젼 넣어주고.

          request.onsuccess = function () {
            //정상적으로 업로드되면 실행할 것은 =
            const store = request.result //리퀘스트의.결과.를 =>여기부터 모르니까 다시 작성하기
              .transaction("posts", "readwrite")
              .objectStore("posts");
            store.add(data).onsuccess = function () {
              store.getAll().onsuccess = function (e) {
                const response = e.target.result;
                const mainPostsEl = document.querySelector(".main__posts");
                mainPostsEl.setAttribute("class", "main__posts");
                document.querySelector("body").removeChild(modalEl);
                mainPostsEl.innerHTML = "";
                for (let i = 0; i < response.length; i++) {
                  const postListEl = document.createElement("img");
                  postListEl.setAttribute("src", response[i].image);

                  document
                    .querySelector(".main__posts")
                    .appendChild(postListEl);
                }
              };
            };
          };
        }
      });
    });
  });
}

function main() {
  document.querySelector("#add-post").addEventListener("click", createModal);

  const databaseName = "instagram";
  const version = 1;

  if (window.indexedDB) {
    const request = indexedDB.open(databaseName, version);

    request.onupgradeneeded = function () {
      request.result.createObjectStore("posts", { autoIncrement: true });
    };

    request.onsuccess = function () {
      const store = request.result
        .transaction("posts", "readwrite")
        .objectStore("posts");
      store.getAll().onsuccess = function (e) {
        const response = e.target.result;
        const mainPostsEl = document.querySelector(".main__posts");
        if (response.length !== 0) {
          mainPostsEl.innerHTML = "";
          for (let i = 0; i < response.length; i++) {
            const postListEl = document.createElement("img");
            postListEl.setAttribute("src", response[i].image);

            document.querySelector(".main__posts").appendChild(postListEl);
          }
        } else {
          mainPostsEl.setAttribute("class", "main__posts not-posts");
        }
      };
    };
  }
}

main();

//모듈화 2
// 이론
// indexedDB 코드가 복잡하다고 느껴지지 않으셨나요?

// IndexedDB를 만들고, 데이터를 삽입하고,
// 전체 데이터를 불러오는 코드를 모듈화 해봅시다.

// 콜백 함수는 비동기 처리가 끝난 후 사용되는 코드 패턴입니다.

// 자바스크립트 비동기 로직은
// 특정 코드 흐름을 현재 실행중인 자바스크립트 프로그램에서 작업하지 않고
// 다른 곳에서 작업합니다. 그리고 그 작업이 끝난 후에 결과를
// 현재 자바스크립트 프로그램에서 가져오는 과정을 말합니다.

//지시사항!
// IndexedDB는 비동기 처리를 하기 때문에 addEventListener와 같이 콜백 패턴을 사용하여 만들어봅시다.

// createIndexedDB 함수에서는 새로운 데이터베이스 버전과 ObjectStore를 만듭니다.

// insertIndexedDB 함수에서는 data 인자값으로 들어온 데이터를 ObjectStore에 삽입합니다.

// getAllIndexedDB 함수에서는 ObjectStore에 모든 데이터를 조회합니다.

import close from "./assets/close_icon.svg";
import media from "./assets/media_icon.svg";
import arrow from "./assets/arrow_back_icon.svg";

function modalTemplate() {
  //이건 모듈 템플릿이었지?
  return `<div class="modal__close">
                <img
                width="22px"
                height="22px"
                src=${close}
                alt="close_icon_logo"
                />
            </div>
            <div class="modal__card">
                <div class="modal__header">
                <div class="modal__back">
                    <img width="32px" height="24px" src=${arrow} alt="arrow_back_icon" />
                </div>
                <h2>새 게시물 만들기</h2>
                <p>공유하기</p>
                </div>
                <div class="modal__main">
                <img src=${media} alt="media_icon" />
                <h3>사진과 동영상을 업로드 해보세요.</h3>
                <label for="file">
                    <p>컴퓨터에서 선택</p>
                </label>
                <input type="file" name="file" id="file" />
                </div>
            </div>`;
}

function postTemplate(img) {
  //이거는 포스팅을 하는 템플릿!
  return `
          <div class="modal__post">
            <img width="478px" height="478px" src=${img} alt="image" />
            <div class="modal__write">
              <textarea placeholder="문구 입력..." autofocus></textarea>
            </div>
          </div>
        `;
}

function readFile(file, cb) {
  //여기는 올릴 파일을 가져오는 부분
  let reader = new FileReader();

  reader.readAsDataURL(file);

  reader.onload = function () {
    cb(reader.result);
  };

  reader.onerror = function (error) {
    cb(error);
  };
}

function createModal() {
  //여기는 모달창을 만드는 부분!
  const modalEl = document.createElement("div");
  modalEl.setAttribute("class", "modal__layout");
  modalEl.innerHTML = modalTemplate();
  document.querySelector("body").prepend(modalEl);

  const modalCloseEl = document.querySelector(".modal__close");

  modalCloseEl.addEventListener("click", function () {
    document.querySelector("body").removeChild(modalEl);
  });

  const fileEl = document.querySelector("#file");
  fileEl.addEventListener("input", function () {
    readFile(fileEl.files[0], function (response) {
      if (response instanceof Error) {
        alert("Error:", response);
        document.querySelector("body").removeChild(modalEl);
      }

      const imageBase64 = response;
      document
        .querySelector(".modal__card")
        .setAttribute("class", "modal__card write--post");
      document
        .querySelector(".modal__main")
        .setAttribute("class", "modal__main write--post");

      const backBtn = document.querySelector(".modal__back > img");
      const shareBtn = document.querySelector(".modal__header > p ");

      backBtn.style.visibility = "visible";
      shareBtn.style.visibility = "visible";

      document.querySelector(".modal__main").innerHTML =
        postTemplate(imageBase64);

      backBtn.addEventListener("click", function () {
        document.querySelector("body").removeChild(modalEl);
        createModal();
      });

      shareBtn.addEventListener("click", function () {
        const databaseName = "instagram";
        const version = 1;
        const objectStore = "posts";
        const currentData = {
          content: document.querySelector(".modal__write > textarea").value,
          image: imageBase64,
        };

        insertIndexedDB(
          databaseName,
          version,
          objectStore,
          currentData,
          function () {
            getAllIndexedDB(
              databaseName,
              version,
              objectStore,
              function (dataList) {
                const mainPostsEl = document.querySelector(".main__posts");
                mainPostsEl.setAttribute("class", "main__posts");
                document.querySelector("body").removeChild(modalEl);
                mainPostsEl.innerHTML = "";
                for (let i = 0; i < dataList.length; i++) {
                  const postListEl = document.createElement("img");
                  postListEl.setAttribute("src", dataList[i].image);

                  document
                    .querySelector(".main__posts")
                    .appendChild(postListEl);
                }
              }
            );
          }
        );
      });
    });
  });
}

// indexedDB에 관련된 함수를 만들어보세요.
//여기서 실습해보자.
//이제 인덱스 디비들을 함수로 만들건데, 위에서 선언한 데이터베이스 이름과, 버젼, 오브젝트가 담긴곳, 콜백함수를 받아올거야.
function createIndexedDB(databaseName, version, objectStore, cb) {
  //여기는 뭐냐면 인덱스 디비 공간 만들어주는거야.
  if (window.indexedDB) {
    //만약 윈도우에 인덱스디비가 있다면
    const re = indexedDB.open(databaseName, version); //인덱스디비의 이름과 버젼을 re라는 이름의 변수로 받아서

    re.onupgradeneeded = function () {
      //그 re를 업그레이드 할건데 그건
      re.result.createObjectStore(objectStore, { autoIncrement: true }); //autoIncrement 얘 뭐냐면 이미지 파일 올리잖아? 그럼 거기 아이디값 만들어주는거.
    };

    re.onsuccess = function () {
      //그래서 성공적으로 올라가면 콜백함수 호출해줄거야.
      cb(); //뭐냐면 다음 로직을 실행시켜주는거야.
    };
  }
}

function insertIndexedDB(databaseName, version, objectStore, data, cb) {
  //여긴 뭐냐면
  if (window.indexedDB) {
    //윈도우에. 인덱스 디비가 있으면
    const re = indexedDB.open(databaseName, version); //위랑 똑같이 re를 받아와서

    re.onsuccess = function () {
      //성공적으로 올라갔을 경우
      const store = re.result //re의 결과를.
        .transaction(objectStore, "readwrite") //transaction 할건데 이건 주고-받기처럼 떨어질 수 없는 처리를 말해. 여기는 오브젝트 스토어에-읽고쓰기야.
        .objectStore(objectStore); //그 오브젝트 스토어는 오브젝트가 담긴 곳일거고.

      store.add(data).onsuccess = function () {
        //그래서 데이터를 성공적으로 더하면 콜백함수 실행!
        cb();
      };
    };
  }
}

function getAllIndexedDB(databaseName, version, objectStore, cb) {
  //그래서 이제 결과를 가져와야지.
  if (window.indexedDB) {
    //반복~
    const re = indexedDB.open(databaseName, version);

    re.onsuccess = function () {
      const store = re.result
        .transaction(objectStore, "readwrite")
        .objectStore(objectStore);

      store.getAll().onsuccess = function (e) {
        //스토어에.getAll().~인수로 주어진 검색 매개 변수와 관련된 모든 값들을 배열로 반환해줄게.
        cb(e.target.result); //그건 콜백함수로 받은.타겟의.결과야!
      };
    };
  }
}

function main() {
  document.querySelector("#add-post").addEventListener("click", createModal);

  const databaseName = "instagram";
  const version = 1;
  const objectStore = "posts";

  createIndexedDB(databaseName, version, objectStore, function () {
    getAllIndexedDB(databaseName, version, objectStore, function (dataList) {
      const mainPostsEl = document.querySelector(".main__posts");
      if (dataList.length !== 0) {
        mainPostsEl.innerHTML = "";
        for (let i = 0; i < dataList.length; i++) {
          const postListEl = document.createElement("img");
          postListEl.setAttribute("src", dataList[i].image);

          document.querySelector(".main__posts").appendChild(postListEl);
        }
      } else {
        mainPostsEl.setAttribute("class", "main__posts not-posts");
      }
    });
  });
}

main();

//오늘의 오류 : Uncaught ReferenceError: i is not defined
//해석하자면 i is not defined = i가 정의되지 않았다.
//for문을 썼는데 (i = 0; i < datalist.length; i++) 라고 써서 그럼. let 빼먹지 말자!!
