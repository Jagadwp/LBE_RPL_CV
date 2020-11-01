let photo = document.querySelector("#profile-image");
photo.addEventListener("click", myFunction);

let index = 0;

function myFunction() {
  photo.setAttribute(
    "src",
    `https://github.com/Jagadwp/LBE_RPL_CV/blob/master/src/Profil-${index}.jpg?raw=true`
  );

  if (index == 3) index = 0;
  else index++;
}
