export const displayUserName = (user) => {
  if (!user) return "";
  let { displayName } = user;
  let [name, lname] = displayName.split(" ");
  let userName = `#${name.toLowerCase()}${lname.toLowerCase()}`;
  return userName;
};
