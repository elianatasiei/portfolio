document.querySelectorAll("[data-include]").forEach((element) => {
  const file = element.getAttribute("data-include");
  if (file) {
    fetch(file)
      .then((response) => {
        if (!response.ok) throw new Error(`Failed to fetch ${file}`);
        return response.text();
      })
      .then((data) => {
        element.innerHTML = data;
      })
      .catch((error) => console.error("Error loading component:", error));
  }
});
