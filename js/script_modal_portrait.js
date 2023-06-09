function showModal(photoSrc) {
  const modal = document.createElement("div");

  modal.classList.add("modal");
  modal.innerHTML = `
        <div class="modal__inner">
        <div class="modal__top">
            <button class="modal__close" type="button">
            <span class="material-icons">close</span>
            </button>
        </div>
        <div class="modal__content">
            <button class="modal__back" type="button">
            <span class="material-icons">arrow_back_ios_new</span>
            </button>
            <div class="photo">
            <img src="${
              photoSrc.slice(0, -4) + "_.jpg"
            }" alt="zdj1" class="foto" />
            </div>
            <button class="modal__forward" type="button">
                <span class="material-icons">arrow_forward_ios</span>
            </button>
        </div>
        </div>
      `;

  const photos = [
    "images/Img0500.jpg",
    "images/Img0501.jpg",
    "images/Img0502.jpg",
    "images/Img0503.jpg",
    "images/Img0504.jpg",
    "images/Img0505.jpg",
    "images/Img0506.jpg",
    "images/Img0507.jpg",
    "images/Img0508.jpg",
    "images/Img0509.jpg",
    "images/Img0510.jpg",
    "images/Img0511.jpg",
    "images/Img0512.jpg",
    "images/Img0513.jpg",

    "images/Img0400.jpg",
    "images/Img0401.jpg",
    "images/Img0402.jpg",
    "images/Img0406.jpg",

    "images/Img0404.jpg",
    "images/Img0408.jpg",
    "images/Img0412.jpg",
    "images/Img0405.jpg",
    "images/Img0414.jpg",
    // "images/Img0409.jpg",
    "images/Img0410.jpg",
    // "images/Img0411.jpg",
    "images/Img0403.jpg",
    "images/Img0413.jpg",
    "images/Img0407.jpg",
    "images/Img0305.jpg",
    "images/Img0300.jpg",
    "images/Img0301.jpg",
    "images/Img0302.jpg",
    // "images/Img0303.jpg",
    "images/Img0304.jpg",

    "images/Img0200.jpg",
    "images/Img0201.jpg",
    // "images/Img0205.jpg",
    "images/Img0203.jpg",
    "images/Img0211.jpg",
    // "images/Img0202.jpg",
    "images/Img0206.jpg",
    "images/Img0207.jpg",
    // "images/Img0208.jpg",
    "images/Img0209.jpg",
    "images/Img0210.jpg",

    "images/Img0100.jpg",
    // "images/Img0204.jpg",
    // "images/Img0102.jpg",
    "images/Img0103.jpg",
    // "images/Img0104.jpg",
    "images/Img0108.jpg",
    "images/Img0106.jpg",
    "images/Img0107.jpg",
    "images/Img0109.jpg",
    // "images/Img0111.jpg",
    "images/Img0110.jpg",
    // "images/Img0101.jpg",
    // "images/Img0105.jpg",

    "images/DSC02003.jpg",
    "images/Img0055.jpg",
    "images/Img0064.jpg",
    "images/Img0004.jpg",
    // "images/Img0051.jpg",
    // "images/Img0063.jpg",
    // "images/Img0059.jpg",
    "images/DSC02045.jpg",
    // "images/DSC02026.jpg",
    // "images/DSC02023.jpg",
    // "images/DSC01797.jpg",
    // "images/DSC01953.jpg",
    // "images/DSC01684.jpg",
    // "images/Img0006.jpg",
    // "images/Img0002.jpg",
    // "images/Img0003.jpg",
    // "images/Img0001.jpg",
    // "images/Img0007.jpg",
    // "images/Img0010.jpg",
    "images/Img0008.jpg",
    "images/Img0005.jpg",
    // "images/Img0009.jpg",
    // "images/Img0014.jpg",
    // "images/Img0011.jpg",
    // "images/Img0015.jpg",
    // "images/Img0013.jpg",
  ];

  const photos_small = [
    "images/Img0500.jpg",
    "images/Img0501.jpg",
    "images/Img0502.jpg",
    "images/Img0503.jpg",
    "images/Img0504.jpg",
    "images/Img0505.jpg",
    "images/Img0506.jpg",
    "images/Img0507.jpg",
    "images/Img0508.jpg",
    "images/Img0509.jpg",
    "images/Img0510.jpg",
    "images/Img0511.jpg",
    "images/Img0512.jpg",
    "images/Img0513.jpg",

    "images/Img0408.jpg",
    "images/Img0407.jpg",
    "images/Img0404.jpg",
    "images/Img0406.jpg",
    "images/Img0414.jpg",
    "images/Img0405.jpg",
    "images/Img0402.jpg",
    "images/Img0400.jpg",

    "images/Img0412.jpg",
    "images/Img0409.jpg",
    "images/Img0410.jpg",
    "images/Img0411.jpg",
    "images/Img0401.jpg",
    "images/Img0413.jpg",
    "images/Img0403.jpg",
    "images/Img0305.jpg",
    "images/Img0300.jpg",
    "images/Img0301.jpg",
    "images/Img0302.jpg",
    // "images/Img0303.jpg",
    "images/Img0304.jpg",

    "images/Img0200.jpg",
    "images/Img0201.jpg",
    // "images/Img0205.jpg",
    "images/Img0203.jpg",
    "images/Img0211.jpg",
    // "images/Img0202.jpg",
    "images/Img0206.jpg",
    "images/Img0207.jpg",
    // "images/Img0208.jpg",
    "images/Img0209.jpg",
    "images/Img0210.jpg",

    "images/Img0100.jpg",
    // "images/Img0204.jpg",
    // "images/Img0102.jpg",
    "images/Img0103.jpg",
    "images/Img0104.jpg",
    "images/Img0108.jpg",
    "images/Img0106.jpg",
    "images/Img0107.jpg",
    "images/Img0109.jpg",
    // "images/Img0111.jpg",
    "images/Img0110.jpg",
    // "images/Img0101.jpg",
    // "images/Img0105.jpg",

    "images/DSC02003.jpg",
    "images/Img0055.jpg",
    "images/Img0004.jpg",
    // "images/Img0051.jpg",
    // "images/Img0063.jpg",
    "images/DSC02045.jpg",
    // "images/Img0059.jpg",
    "images/Img0064.jpg",
    // "images/DSC02026.jpg",
    // "images/DSC02023.jpg",
    // "images/DSC01797.jpg",
    "images/Img0005.jpg",
    // "images/DSC01684.jpg",
    // "images/Img0001.jpg",
    // "images/Img0002.jpg",
    // "images/Img0003.jpg",
    // "images/Img0006.jpg",
    "images/Img0007.jpg",
    "images/Img0008.jpg",

    "images/DSC01953.jpg",
    // "images/Img0009.jpg",
    // "images/Img0010.jpg",
    // "images/Img0014.jpg",
    // "images/Img0011.jpg",
  ];

  modal.querySelector(".modal__close").addEventListener("click", () => {
    document.body.removeChild(modal);
  });

  document.body.appendChild(modal);
  document.querySelector(".modal").addEventListener("click", (evt) => {
    let button = document.querySelector(".modal__close");
    let insideModal = document.querySelector(".modal__content");
    let modalBack = document.querySelector(".modal__back");
    let modalForward = document.querySelector(".modal__forward");
    // let modalIcons = document.querySelector("span.material-icons");

    // console.log(evt.target);
    if (
      document.body.contains(modal) &&
      evt.target != button &&
      evt.target != insideModal &&
      evt.target != modalBack &&
      evt.target != modalForward &&
      !modalForward.contains(evt.target) &&
      !modalBack.contains(evt.target)
    ) {
      // console.log("usunięto modal");
      document.body.removeChild(modal);
    }
  });

  if (window.innerWidth > 800) {
    let whole_source = document.querySelector(
      "div.modal__content div.photo img.foto"
    ).src;
    let source = whole_source.substring(whole_source.search("images"));
    // console.log(source);
    let index = photos.indexOf(source.replace("_", ""));

    modal.querySelector(".modal__back").addEventListener("click", () => {
      // console.log("Previous");
      if (index != 0) {
        document.body.removeChild(modal);
        showModal(photos[index - 1]);
      }
    });

    modal.querySelector(".modal__forward").addEventListener("click", () => {
      // console.log("Next");

      if (index + 1 != photos.length) {
        document.body.removeChild(modal);
        showModal(photos[index + 1]);
      }
    });

    if (index + 1 == photos.length) {
      modal.querySelector(".modal__forward").classList.add("hide_arrows");
    }
    if (index == 0) {
      modal.querySelector(".modal__back").classList.add("hide_arrows");
    }
  } else {
    let whole_source_ = document.querySelector(
      "div.modal__content div.photo img.foto"
    ).src;
    let source_ = whole_source_.substring(whole_source_.search("images"));
    // console.log(source_);
    let index_ = photos_small.indexOf(source_.replace("_", ""));

    modal.querySelector(".modal__back").addEventListener("click", () => {
      // console.log("Previous");
      if (index_ != 0) {
        document.body.removeChild(modal);
        showModal(photos_small[index_ - 1]);
      }
    });

    modal.querySelector(".modal__forward").addEventListener("click", () => {
      // console.log("Next");

      if (index_ + 1 != photos_small.length) {
        document.body.removeChild(modal);
        showModal(photos_small[index_ + 1]);
      }
    });

    if (index_ + 1 == photos_small.length) {
      modal.querySelector(".modal__forward").classList.add("hide_arrows");
    }
    if (index_ == 0) {
      modal.querySelector(".modal__back").classList.add("hide_arrows");
    }
  }
}
