const url = "https://randomuser.me/api";

const getUser = async () => {
  const response = await fetch(url);
  const data = await response.json();
  const user = data.results[0];
  const { first, last } = user.name;
  const {
    street: { number, name },
    city,
    state,
    country,
    postcode,
  } = user.location;
  const email = user.email;
  const { age } = user.dob;
  const phone = user.phone;
  const { password } = user.login;
  const image = user.picture.large;
  return {
    name: `${first} ${last}`,
    street: `${number} ${name}`,
    email,
    age,
    phone,
    password,
    image,
  };
};

export default getUser;
