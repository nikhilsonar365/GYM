function calculateBMI() {
    const weight = parseFloat(document.getElementById("weight").value);
    const height = parseFloat(document.getElementById("height").value);
    const age = parseInt(document.getElementById("age").value);
    const gender = document.getElementById("gender").value;

    if (!weight || !height || !age) {
        document.getElementById("result").innerText = "Please fill in all fields.";
        return;
    }

    // BMI Calculation
    const heightInMeters = height / 100;
    const bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Feedback based on BMI
    let feedback = "";
    if (bmi < 18.5) {
        feedback = "Underweight";
    } else if (bmi >= 18.5 && bmi <= 24.9) {
        feedback = "Normal weight";
    } else if (bmi >= 25 && bmi <= 29.9) {
        feedback = "Overweight";
    } else {
        feedback = "Obesity";
    }

    let additionalInfo = ` You are a ${age}-year-old ${gender}.`;

    document.getElementById("result").innerText = `Your BMI is ${bmi}. ${feedback}.${additionalInfo}`;
}

const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');

hamburger.addEventListener('click', () => {
    mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        mobileMenu.style.display = 'none';
    }
});