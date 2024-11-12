let currentSlide = 0;
        const totalSlides = 6;

        function showSlide(index) {
            // Hide all slides
            document.querySelectorAll('.slide').forEach(slide => {
                slide.classList.remove('active');
            });
            
            // Show current slide
            document.getElementById(`slide-${index}`).classList.add('active');
            
            // Update dots
            document.querySelectorAll('.dot').forEach((dot, i) => {
                dot.classList.toggle('active', i === index);
            });
            
            // Update button states
            const prevButton = document.querySelectorAll('.nav-button')[index * 2];
            const nextButton = document.querySelectorAll('.nav-button')[index * 2 + 1];
            
            prevButton.disabled = index === 0;
            nextButton.disabled = index === totalSlides - 1;
        }

        function nextSlide() {
            if (currentSlide < totalSlides - 1) {
                currentSlide++;
                showSlide(currentSlide);
            }
        }

        function prevSlide() {
            if (currentSlide > 0) {
                currentSlide--;
                showSlide(currentSlide);
            }
        }

        function goToSlide(index) {
            currentSlide = index;
            showSlide(currentSlide);
        }

        // Keyboard navigation
        document.addEventListener('keydown', (e) => {
            if (e.key === 'ArrowRight' || e.key === 'Space') {
                nextSlide();
            } else if (e.key === 'ArrowLeft') {
                prevSlide();
            }
        });