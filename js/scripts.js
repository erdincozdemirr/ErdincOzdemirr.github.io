/*!
* Start Bootstrap - Personal v1.0.1 (https://startbootstrap.com/template-overviews/personal)
* Copyright 2013-2023 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-personal/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project

document.addEventListener('DOMContentLoaded', function () {
    const contributionGraph = document.getElementById('contribution-graph');

    if (contributionGraph) {
        // Store the original source to avoid accumulating query parameters
        const originalSrc = contributionGraph.src.split('?')[0];

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // Force reload the image with a unique timestamp to restart the SVG animation
                    // This bypasses browser cache for the animation state
                    contributionGraph.src = `${originalSrc}?t=${new Date().getTime()}`;
                }
            });
        }, {
            threshold: 0.1 // Trigger when 10% of the image is visible
        });

        observer.observe(contributionGraph);
    }
});