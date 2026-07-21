document.addEventListener("DOMContentLoaded", () => {

    console.log("School Management Website Loaded Successfully");

    const button = document.querySelector(".btn");

    button.addEventListener("click", function(e) {

        e.preventDefault();

        alert("Admission Form Coming Soon!");

    });

});
