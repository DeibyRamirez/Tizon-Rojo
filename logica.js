tailwind.config = {
      theme: {
        extend: {
          colors: {
            primary: '#9F1D22',
            secondary: '#E8B87B',
            dark: '#2D2424',
            light: '#FFF5EB',
          },
          fontFamily: {
            display: ['Playfair Display', 'serif'],
            body: ['Montserrat', 'sans-serif'],
          },
          animation: {
            'pulse-slow': 'pulse 6s infinite',
            'float': 'float 6s ease-in-out infinite',
          },
          keyframes: {
            float: {
              '0%, 100%': { transform: 'translateY(0)' },
              '50%': { transform: 'translateY(-10px)' },
            }
          }
        }
      }
    }


// Animaciones al hacer scroll
    document.addEventListener('DOMContentLoaded', function() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate__animated', 'animate__fadeInUp');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.dish-card, .text-center, .flex.items-start').forEach(el => {
        observer.observe(el);
      });

      // Filtrado de categorías
      const categoryBtns = document.querySelectorAll('.category-btn');
      categoryBtns.forEach(btn => {
        btn.addEventListener('click', function() {
          categoryBtns.forEach(b => b.classList.remove('bg-primary', 'text-white'));
          categoryBtns.forEach(b => b.classList.add('bg-gray-200', 'hover:bg-primary', 'hover:text-white'));
          this.classList.remove('bg-gray-200', 'hover:bg-primary', 'hover:text-white');
          this.classList.add('bg-primary', 'text-white');
          // Aquí iría la lógica para filtrar los platos
        });
      });

      // Efecto hover para las tarjetas de platos
      const dishCards = document.querySelectorAll('.dish-card');
      dishCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
          this.querySelector('.dish-img').classList.add('transform', 'scale-110');
        });
        card.addEventListener('mouseleave', function() {
          this.querySelector('.dish-img').classList.remove('transform', 'scale-110');
        });
      });
    });