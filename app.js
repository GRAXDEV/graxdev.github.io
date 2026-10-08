// Native Script Interface Framework Engine 

document.addEventListener('DOMContentLoaded', () => {
    const cursor = document.querySelector('.custom-cursor');
    
    // Smooth frame-bound logic positioning custom mouse-coordinate tracker
    document.addEventListener('mousemove', (e) => {
        if(cursor) {
            cursor.style.left = `${e.clientX}px`;
            cursor.style.top = `${e.clientY}px`;
        }
    });

    // Capture user interface hover vectors for component depth accent scaling
    const dynamicInteractables = document.querySelectorAll('a, button, .project-card, .skills-category');
    
    dynamicInteractables.forEach(targetItem => {
        targetItem.addEventListener('mouseenter', () => {
            if(cursor) cursor.classList.add('hovered');
        });
        targetItem.addEventListener('mouseleave', () => {
            if(cursor) cursor.classList.remove('hovered');
        });
    });

    // Native Observer blueprint for asynchronous scroll-reveal events
    const entryObserverOptions = {
        root: null,
        threshold: 0.05,
        rootMargin: "0px 0px -20px 0px"
    };

    const intersectionManager = new IntersectionObserver((monitoredEntries, selfObserver) => {
        monitoredEntries.forEach(visibleEntry => {
            if (visibleEntry.isIntersecting) {
                visibleEntry.target.style.opacity = "1";
                visibleEntry.target.style.transform = "translateY(0)";
                selfObserver.unobserve(visibleEntry.target);
            }
        });
    }, entryObserverOptions);

    // Initialize layout targets with zero shift for fade animations
    const targetLayoutCards = document.querySelectorAll('.project-card, .skills-category, .contact-card');
    targetLayoutCards.forEach(cardNode => {
        cardNode.style.opacity = "0";
        cardNode.style.transform = "translateY(16px)";
        cardNode.style.transition = "transform 0.7s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1)";
        intersectionManager.observe(cardNode);
    });
});
