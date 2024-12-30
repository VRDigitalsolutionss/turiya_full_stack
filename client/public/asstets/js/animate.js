// document.addEventListener('DOMContentLoaded', () => {
//     const sectionsToAnimate = document.querySelectorAll('.check_box');

//     const observer = new IntersectionObserver((entries, observer) => {
//         entries.forEach(entry => {
//             if (entry.isIntersecting) {
//                 entry.target.classList.add('animate__flash');
//                 observer.unobserve(entry.target); // To ensure the animation only happens once
//             }
//         });
//     }, { threshold: 0.5 });

//     for (let i = 0; i < sectionsToAnimate.length; i++) {
//         observer.observe(sectionsToAnimate[i]);
//     }
// });