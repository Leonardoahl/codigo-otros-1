const baseEndpoint = 'https://api.github.com';
const usersEndpoint = `${baseEndpoint}/users`;
const $n = document.getElementById("name"); //changed all the ref to id
const $b = document.getElementById("blog");
const $l = document.getElementById('location');

async function displayUser(username) { // added Async to function for expected promise
  $n.textContent = 'cargando...';
  const responseJSON = await fetch(`${usersEndpoint}/${username}`);   
  const response = await responseJSON.json(); // parsed response to json
  console.log(response);
  console.log(response.name);
  $n.textContent = response.name; //change the value to response.Key
  $b.textContent = response.blog;
  $l.textContent = response.location;

}

function handleError(err) {
  console.log('OH NO!');
  console.log(err);
  n.textContent = `Algo salió mal: ${err}`
}

displayUser('stolinski').catch(handleError);