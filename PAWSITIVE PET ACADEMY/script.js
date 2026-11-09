const courses = [
    {
        id: "canine-obedience",
        title: "Canine Obedience Training",
        description: "Learn how to build calm, confident obedience habits using reward-based training and practical dog handling techniques.",
        price: 1500,
        duration: "6 months",
        category: "Professional Development",
        contents: [
            "Basic commands",
            "Leash handling",
            "Behaviour correction",
            "Positive reinforcement",
            "Socialisation methods"
        ]
    },
    {
        id: "pet-grooming",
        title: "Pet Grooming",
        description: "Develop practical grooming skills for domestic pets with a strong focus on safety, comfort, and coat care.",
        price: 1500,
        duration: "6 months",
        category: "Professional Development",
        contents: [
            "Coat care",
            "Bathing techniques",
            "Nail trimming",
            "Ear and eye cleaning",
            "Equipment handling"
        ]
    },
    {
        id: "animal-behaviour",
        title: "Animal Behaviour",
        description: "Understand how animals think, react, and communicate so you can improve their wellbeing and behaviour.",
        price: 1500,
        duration: "6 months",
        category: "Professional Development",
        contents: [
            "Reading body language",
            "Stress management",
            "Behaviour change",
            "Enrichment activities",
            "Handling techniques"
        ]
    },
    {
        id: "pet-business",
        title: "Pet Business Management",
        description: "Prepare for a successful pet services business with skills in planning, marketing, and customer handling.",
        price: 1500,
        duration: "6 months",
        category: "Professional Development",
        contents: [
            "Customer service",
            "Business planning",
            "Marketing basics",
            "Financial management",
            "Service delivery"
        ]
    },
    {
        id: "puppy-care",
        title: "Puppy Care",
        description: "A short, practical course to help new owners care for a puppy from the first weeks home.",
        price: 750,
        duration: "6 weeks",
        category: "Short Course",
        contents: [
            "Feeding and nutrition",
            "Vaccination basics",
            "Toilet training",
            "Exercise and rest",
            "Socialisation"
        ]
    },
    {
        id: "pet-first-aid",
        title: "Pet First Aid",
        description: "Build essential emergency response skills for common pet health situations.",
        price: 750,
        duration: "6 weeks",
        category: "Short Course",
        contents: [
            "Minor injuries",
            "CPR basics",
            "Poison awareness",
            "Heatstroke response",
            "Safe transport"
        ]
    },
    {
        id: "dog-walking",
        title: "Basic Dog Walking",
        description: "Learn how to walk dogs safely and responsibly while maintaining control and confidence.",
        price: 750,
        duration: "6 weeks",
        category: "Short Course",
        contents: [
            "Walking equipment",
            "Handling multiple dogs",
            "Safety procedures",
            "Exercise routines",
            "Client communication"
        ]
    }
];

function renderCourseCards() {
    const container = document.getElementById("course-container");
    if (!container) return;

    container.innerHTML = courses.map(course => `
        <article class="course-card">
            <h3><a href="programme-detail.html?course=${course.id}">${course.title}</a></h3>
            <p class="price">Fee: R${course.price}</p>
            <p><strong>Duration:</strong> ${course.duration}</p>
            <p>${course.description}</p>
        </article>
    `).join("");
}

function renderProgrammeDetail() {
    const detailSection = document.getElementById("programme-detail");
    if (!detailSection) return;

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("course");
    const course = courses.find(item => item.id === courseId);

    if (!course) {
        detailSection.innerHTML = `
            <h2>Course Not Found</h2>
            <p>Please return to the services page and select a valid programme.</p>
            <a href="services.html" class="btn btn-primary">Back to Services</a>
        `;
        return;
    }

    detailSection.innerHTML = `
        <h2>${course.title}</h2>
        <p class="price">Fee: R${course.price}</p>
        <p><strong>Duration:</strong> ${course.duration}</p>
        <p><strong>Category:</strong> ${course.category}</p>
        <p>${course.description}</p>
        <h3>Course Contents</h3>
        <ul class="feature-list">
            ${course.contents.map(item => `<li>${item}</li>`).join("")}
        </ul>
        <a href="services.html" class="btn btn-primary">Back to Services</a>
    `;
}

function getErrorBox(field) {
    let errorBox = field.parentElement.querySelector(".error-message");

    if (!errorBox) {
        errorBox = document.createElement("small");
        errorBox.className = "error-message";
        field.parentElement.appendChild(errorBox);
    }

    return errorBox;
}

function setError(field, message) {
    field.classList.add("input-error");
    const errorBox = getErrorBox(field);
    errorBox.textContent = message;
    errorBox.style.display = "block";
}

function clearError(field) {
    field.classList.remove("input-error");
    const errorBox = field.parentElement.querySelector(".error-message");
    if (errorBox) {
        errorBox.textContent = "";
        errorBox.style.display = "none";
    }
}

function validateField(field) {
    const value = field.value.trim();

    if (field.required && !value) {
        setError(field, "This field is required.");
        return false;
    }

    if (field.type === "email" && value) {
        const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
        if (!validEmail) {
            setError(field, "Please enter a valid email address.");
            return false;
        }
    }

    clearError(field);
    return true;
}

function setupFormValidation(form) {
    const fields = form.querySelectorAll("input, textarea, select");
    const feedback = form.querySelector(".form-feedback");

    const showFeedback = (message, type) => {
        if (!feedback) return;
        feedback.textContent = message;
        feedback.classList.remove("success", "error");
        feedback.classList.add(type);
        feedback.hidden = false;
        feedback.style.display = "block";
    };

    fields.forEach(field => {
        field.addEventListener("input", () => validateField(field));
        field.addEventListener("blur", () => validateField(field));
    });

    form.addEventListener("submit", async (event) => {
        event.preventDefault();

        let firstInvalid = null;
        let allValid = true;

        fields.forEach(field => {
            const valid = validateField(field);

            if (!valid && !firstInvalid) {
                firstInvalid = field;
                allValid = false;
            }
        });

        if (!allValid && firstInvalid) {
            firstInvalid.focus();
            firstInvalid.scrollIntoView({ behavior: "smooth", block: "center" });
            showFeedback("Please fix the highlighted fields.", "error");
            return;
        }

        const formData = Object.fromEntries(new FormData(form).entries());

        try {
            showFeedback("Submitting...", "success");

            const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    ...formData,
                    submittedAt: new Date().toISOString()
                })
            });

            if (!response.ok) {
                throw new Error("Submission failed");
            }

            if (form.id === "enquiryForm") {
                const fullname = document.getElementById("fullname").value.trim();
                const email = document.getElementById("email").value.trim();
                const phone = document.getElementById("phone").value.trim();
                const category = document.getElementById("user-category").value;
                const selected = [...document.querySelectorAll(".course-check:checked")];

                const courseNames = selected.map(item => item.value);
                const subtotal = selected.reduce((sum, item) => sum + Number(item.dataset.price), 0);

                let discount = 0;
                if (selected.length === 2) discount = subtotal * 0.05;
                if (selected.length === 3) discount = subtotal * 0.10;
                if (selected.length >= 4) discount = subtotal * 0.15;

                const total = subtotal - discount;

                document.getElementById("summaryName").textContent = fullname;
                document.getElementById("summaryEmail").textContent = email;
                document.getElementById("summaryPhone").textContent = phone;
                document.getElementById("summaryCategory").textContent = category;
                document.getElementById("summaryCourses").textContent = courseNames.length ? courseNames.join(", ") : "None selected";
                document.getElementById("summarySubtotal").textContent = subtotal;
                document.getElementById("summaryDiscount").textContent = discount.toFixed(2);
                document.getElementById("summaryTotal").textContent = total.toFixed(2);

                const summaryBox = document.getElementById("quoteSummary");
                summaryBox.hidden = false;
                summaryBox.scrollIntoView({ behavior: "smooth", block: "center" });

                showFeedback("Your enquiry was submitted successfully.", "success");
            }

            if (form.id === "contactForm") {
                showFeedback("Your message was sent successfully.", "success");
            }

            form.reset();
        } catch (error) {
            showFeedback("There was a problem submitting the form. Please try again.", "error");
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    renderCourseCards();
    renderProgrammeDetail();

    document.querySelectorAll("form").forEach(form => {
        setupFormValidation(form);
    });
});