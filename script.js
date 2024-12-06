// Password Generator Logic
document.getElementById("generate-btn").addEventListener("click", function () {
  const length = parseInt(document.getElementById("length").value) || 12;
  const includeLowercase = document.getElementById("include-lowercase").checked;
  const includeUppercase = document.getElementById("include-uppercase").checked;
  const includeNumbers = document.getElementById("include-numbers").checked;
  const includeSymbols = document.getElementById("include-symbols").checked;

  const password = generatePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols);
  document.getElementById("password-output").textContent = password || "Please select at least one option!";
});

function generatePassword(length, lowercase, uppercase, numbers, symbols) {
  const lowerChars = "abcdefghijklmnopqrstuvwxyz";
  const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numberChars = "0123456789";
  const symbolChars = "!@#$%^&*()_+[]{}<>?/|";

  let charPool = "";
  if (lowercase) charPool += lowerChars;
  if (uppercase) charPool += upperChars;
  if (numbers) charPool += numberChars;
  if (symbols) charPool += symbolChars;

  if (!charPool) return null;

  let password = "";
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charPool.length);
    password += charPool[randomIndex];
  }
  return password;
}
