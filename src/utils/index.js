export const displayUserName = (user) => {
  if (!user) return "";
  // let { displayName } = user;
  let [name, lname] = user.split(" ");
  let userName = `#${name.toLowerCase()}${lname.toLowerCase()}`;
  return userName;
};

export const getInitials = function (displayName) {
  if (displayName) {
    const userName = displayName.split(" ");
    let [name = "", lname = " "] = userName;
    let initials = name[0].toUpperCase() + lname[0].toUpperCase();
    return initials;
  }
};

export const uniqueId = (() => {
  let num = 0;
  return (prefix) => {
    prefix = String(prefix) || "";
    num++;
    return prefix + num;
  };
})();
