function showForm(formId) {
    document.querySelectorAll(".from-box").forEach(form => form.classList.remove("active"));
    document.getElementById(formId).classList.add("active");
}