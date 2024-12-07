if (localStorage.getItem("reviewCount")) {
  localStorage.setItem(
    "reviewCount",
    parseInt(localStorage.getItem("reviewCount")) + 1
  );
} else {
  localStorage.setItem("reviewCount", 1);
}
console.log(
  "Number of reviews submitted: " + localStorage.getItem("reviewCount")
);
