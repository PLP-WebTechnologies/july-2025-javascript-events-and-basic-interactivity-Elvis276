// Part 1: Event Handling - Theme Toggle
const themeToggle = document.getElementById("themeToggle")
themeToggle.addEventListener("click", () => {
  document.body.classList.toggle("dark")
  themeToggle.textContent = document.body.classList.contains("dark") ? "☀️ Light Mode" : "🌙 Dark Mode"
})

// Part 2: Interactive Elements - Counter
let count = 0
const countDisplay = document.getElementById("count")
document.getElementById("increment").addEventListener("click", () => {
  countDisplay.textContent = ++count
})
document.getElementById("decrement").addEventListener("click", () => {
  countDisplay.textContent = --count
})
document.getElementById("reset").addEventListener("click", () => {
  count = 0
  countDisplay.textContent = count
})

// Interactive Elements - Collapsible FAQ
document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", () => {
    const answer = question.nextElementSibling
    answer.classList.toggle("show")
    question.textContent = answer.classList.contains("show")
      ? question.textContent.replace("▼", "▲")
      : question.textContent.replace("▲", "▼")
  })
})

// Part 3: Form Validation
const form = document.getElementById("contactForm")
form.addEventListener("submit", (e) => {
  e.preventDefault()

  const name = document.getElementById("name").value
  const email = document.getElementById("email").value
  const password = document.getElementById("password").value

  let isValid = true

  // Name validation
  if (name.length < 2) {
    showError("nameError", "Name must be at least 2 characters")
    isValid = false
  } else {
    clearError("nameError")
  }

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    showError("emailError", "Please enter a valid email")
    isValid = false
  } else {
    clearError("emailError")
  }

  // Password validation
  if (password.length < 6) {
    showError("passwordError", "Password must be at least 6 characters")
    isValid = false
  } else {
    clearError("passwordError")
  }

  if (isValid) {
    document.getElementById("successMessage").textContent = "Form submitted successfully!"
    form.reset()
  }
})

function showError(elementId, message) {
  document.getElementById(elementId).textContent = message
}

function clearError(elementId) {
  document.getElementById(elementId).textContent = ""
}
