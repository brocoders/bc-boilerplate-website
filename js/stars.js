(() => {
  const frontedStarsRef = document.querySelector("[data-frontend-stars]");
  const backendStarsRef = document.querySelector("[data-backend-stars]");

  let frontStarsCount;
  let backStarsCount;

  fetch("https://api.github.com/repos/brocoders/nestjs-boilerplate")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const starsCountNumber = data.stargazers_count;
      if (starsCountNumber) {
        backStarsCount = starsCountNumber + " ON GITHUB";
        backendStarsRef.textContent = backStarsCount;
      }
    })
    .catch((error) => {
      console.error(
        "Error fetching nestjs-boilerplate repository information:",
        error
      );
    });

  fetch("https://api.github.com/repos/brocoders/extensive-react-boilerplate")
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      const starsCountNumber = data.stargazers_count;
      if (starsCountNumber) {
        frontStarsCount = starsCountNumber + " ON GITHUB";
        frontedStarsRef.textContent = frontStarsCount;
      }
    })
    .catch((error) => {
      console.error(
        "Error fetching extensive-react-boilerplate repository information:",
        error
      );
    });
})();
