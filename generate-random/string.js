export function generateRandomString(myLength) {
  let chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ~`!@#$%^&*()_+-={}[]:\";'<>?,./|\\";
  let randomArray = Array.from(
    { length: myLength },
    () => chars[Math.floor(Math.random() * chars.length)]
  );

  let randomString = randomArray.join("");
  return randomString;
}

generateRandomString(8);
