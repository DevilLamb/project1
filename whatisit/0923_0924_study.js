// FileReader 모르겠다

const upload = document.querySelector("#file");
upload.addEventListener("input", function () {
  const read = new FileReader(); //파일 리더를 써서
  read.readAsDataURL(upload.files[0]); //0번째 파일인 이미지를 올리는건 이해함

  read.onload = function () {
    const img64 = read.result;

    document
      .querySelector(".modal__card")
      .setAttribute("class", "modal__card write--post");
    document
      .querySelector(".modal__main")
      .setAttribute("class", "modal__main write--post");

    const back = document.querySelector(".modal__back > img");
    const on = document.querySelector(".modal__header > p");

    back.style.visibility = "visible";
    on.style.visibility = "visible";

    document.querySelector(".modal__main").innerHTML = createPost(img64);

    back.addEventListener("click", function () {
      document.body.removeChild(modalEl);
      createModal();
    });
  };

  read.error = function (error) {
    alert("Error", error);
    document.body.removeChild(modalEl);
  };
});


