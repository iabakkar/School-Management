let buttons = document.querySelectorAll(".tab-btn");
let panels = document.querySelectorAll(".panel");

function hideAll() {
  buttons.forEach((btn) => btn.classList.remove("active_btn"));
  panels.forEach((panel) => panel.classList.remove("show"));
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const target = document.getElementById(button.dataset.target);

    // Hide everything first
    hideAll();

    // Show only the clicked one
    button.classList.add("active_btn");
    target.classList.add("show");
  });
});

let galleryButtons = document.querySelectorAll(".gallery-btn");
let galleryDataBoxes = document.querySelectorAll(".gallery-data-boxs");

function hideData() {
  galleryButtons.forEach((gallerybtn) =>
    gallerybtn.classList.remove("gallery-active")
  );
  galleryDataBoxes.forEach((galleryDataBox) =>
    galleryDataBox.classList.remove("gallery-show-box")
  );
}

galleryButtons.forEach((galleryButton) => {
  galleryButton.addEventListener("click", () => {
    const targetdata = document.getElementById(galleryButton.dataset.target);

    hideData();
    galleryButton.classList.add("gallery-active");

    targetdata.classList.add("gallery-show-box");
  });
});



let aboutUsButtons = document.querySelectorAll(".about_button");
let aboutUsBoxes = document.querySelectorAll(".about_data_box");

function hideboxs() {
  aboutUsButtons.forEach((aboutUsbtn) =>
    aboutUsbtn.classList.remove("about_active_btn")
  );
  aboutUsBoxes.forEach((aboutUsBox) =>
    aboutUsBox.classList.remove("about_show_box")
  );
}

aboutUsButtons.forEach((aboutUsButton) => {
  aboutUsButton.addEventListener("click", () => {
    const targetdatabox = document.getElementById(aboutUsButton.dataset.target);

    hideboxs();
    aboutUsButton.classList.add("about_active_btn");
    targetdatabox.classList.add("about_show_box");
  });
});


