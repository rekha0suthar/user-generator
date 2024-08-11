const generateButton = document.getElementById('generate-btn');
const userImage = document.getElementById('user-img');
const userName = document.getElementById('user-name');
const userEmail = document.getElementById('user-email');
const userPhone = document.getElementById('user-phone');
const userLocation = document.getElementById('user-location');
const userAge = document.getElementById('user-age');
const userWrapper = document.getElementById('user-container');
const loading = document.getElementById('loading');

const getUser = () => {
  const users = fetch('https://randomuser.me/api/');
  users
    .then((response) => {
      loading.style.display = 'block';
      if (!response.ok) {
        throw new Error('Something went wrong');
      }
      return response.json();
    })
    .then((data) => {
      const user = data.results[0];
      userImage.src = user.picture.large;
      userName.textContent = `${user.name.title}  ${user.name.first} ${user.name.last}`;
      userEmail.textContent = user.email;
      userPhone.textContent = user.phone;
      userLocation.textContent = `
        ${user.location.city}
        ${user.location.country}`;
      userAge.textContent = user.dob.age;
      loading.style.display = 'none';
      userWrapper.style.display = 'flex';
    })
    .catch((error) => {
      console.error(error);
    });
};

generateButton.addEventListener('click', getUser);
