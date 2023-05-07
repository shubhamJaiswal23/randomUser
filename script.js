const flexDiv = document.querySelector('.flex');
const img = document.querySelector('img');
const info = document.querySelector('.space-y-3');
const btn = document.querySelector('#generate');

function getUserProfile() {
  btn.firstElementChild.classList.remove('hidden');
  fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((data) => data.results[0])
    .then((user) => {
      if (user.gender == 'male') {
        document.body.className = 'bg-blue-800 text-white overflow-x-hidden';
      } else {
        document.body.className = 'bg-purple-800 text-white overflow-x-hidden';
      }
      //Button Spinner

      //User Image:
      img.setAttribute('src', `${user.picture.large}`);

      //User Name:
      info.children[0].innerHTML = ` <p class="text-xl">
    <span class="font-bold">Name: </span>${user.name.first} ${user.name.last}
  </p>`;

      //User Email:
      info.children[1].innerHTML = ` <p class="text-xl">
        <span class="font-bold">Email: </span> ${user.email}
      </p>`;

      //User Phone:
      info.children[2].innerHTML = ` <p class="text-xl">
        <span class="font-bold">Phone: </span> ${user.phone}
      </p>`;

      //User Location
      info.children[3].innerHTML = ` <p class="text-xl">
      <span class="font-bold">Location: </span> ${user.location.city}, ${user.location.country}
    </p>`;

      //User Age:
      info.children[4].innerHTML = `<p class="text-xl"><span class="font-bold">Age: </span> ${user.dob.age}</p>`;
    })
    .then(() => {
      btn.firstElementChild.classList.add('hidden');
    })
    .catch(() => {
      flexDiv.style.fontSize = '30px';
      flexDiv.innerHTML = `<h2><strong>OOPs! Something Went Wrong. Please Refresh the Page and Try Again.</strong><h2>`;
      flexDiv.style.textAlign = 'center';
    });
}

btn.addEventListener('click', getUserProfile);
