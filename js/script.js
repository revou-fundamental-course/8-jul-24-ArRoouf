document.addEventListener("DOMContentLoaded", function () {
  const container = document.getElementById("container");
  const resultBtn = document.getElementById("resultBtn");
  const inputBtn = document.getElementById("inputBtn");
  const bmiForm = document.getElementById("bmiForm");
  const recalculateBtn = document.getElementById("recalculateBtn");

  resultBtn.addEventListener("click", () => {
    container.classList.add("active");
  });

  inputBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  bmiForm.addEventListener("submit", function (e) {
    e.preventDefault();
    calculateBMI();
  });

  recalculateBtn.addEventListener("click", () => {
    container.classList.remove("active");
  });

  function calculateBMI() {
    const gender = document.getElementById("gender").value;
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
      alert("Mohon masukkan berat dan tinggi badan yang valid.");
      return;
    }

    const heightInMeter = height / 100;
    const bmi = weight / (heightInMeter * heightInMeter);

    let category;
    if (bmi < 18.5) {
      category = "Kekurangan berat badan";
    } else if (bmi >= 18.5 && bmi < 25.0) {
      category = "Normal (ideal)";
    } else if (bmi >= 25.0 && bmi < 30.0) {
      category = "Kelebihan berat badan";
    } else {
      category = "Kegemukan (Obesitas)";
    }

    document.getElementById("bmiValue").textContent = `BMI Anda: ${bmi.toFixed(
      1
    )}`;
    document.getElementById(
      "bmiCategory"
    ).textContent = `Kategori: ${category}`;
    document.getElementById(
      "bmiExplanation"
    ).textContent = `BMI (Body Mass Index) adalah ukuran yang digunakan untuk menentukan kategori berat badan ideal. Nilai BMI Anda menunjukkan bahwa Anda berada dalam kategori ${category.toLowerCase()}.`;

    container.classList.add("active");
  }
});
