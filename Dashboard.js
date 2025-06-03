
        // Navigation functionality
        const navLinks = document.querySelectorAll('.nav-link');
        const pages = document.querySelectorAll('.page');

        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();

                // Remove active class from all links and pages
                navLinks.forEach(l => l.classList.remove('active'));
                pages.forEach(p => p.classList.remove('active'));

                // Add active class to clicked link
                link.classList.add('active');

                // Show corresponding page
                const pageId = link.getAttribute('data-page');
                const targetPage = document.getElementById(pageId);
                if (targetPage) {
                    targetPage.classList.add('active');
                    targetPage.classList.add('fade-in');
                }

                // Update header title
                const headerTitle = document.querySelector('.header h1');
                const linkText = link.querySelector('span') ? link.querySelector('span').textContent : 'Dashboard';
                headerTitle.textContent = linkText;
            });
        });

        // Chart.js initialization
        document.addEventListener('DOMContentLoaded', function () {
            const ctx = document.getElementById('performanceChart');
            if (ctx) {
                new Chart(ctx, {
                    type: 'bar',
                    data: {
                        labels: ['OCT', 'NOV', 'DEC', 'JAN', 'FEB', 'MAR', 'APR'],
                        datasets: [{
                            data: [65, 85, 45, 95, 75, 85, 90],
                            backgroundColor: '#3b82f6',
                            borderRadius: 4,
                            borderSkipped: false,
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: {
                                display: false
                            }
                        },
                        scales: {
                            y: {
                                display: false,
                                beginAtZero: true
                            },
                            x: {
                                display: true,
                                grid: {
                                    display: false
                                },
                                ticks: {
                                    color: '#64748b',
                                    font: {
                                        size: 11
                                    }
                                }
                            }
                        },
                        elements: {
                            bar: {
                                borderRadius: 2
                            }
                        }
                    }
                });
            }
        });

        // Toggle switches functionality
        document.querySelectorAll('.toggle-switch').forEach(toggle => {
            toggle.addEventListener('click', function () {
                this.classList.toggle('active');
                showNotification('Sozlama o\'zgartirildi!', 'success');
            });
        });

        // Notification system
        function showNotification(message, type = 'info') {
            const notification = document.createElement('div');
            notification.style.cssText = `
                position: fixed;
                top: 20px;
                right: 20px;
                background: ${type === 'success' ? '#10b981' : '#3b82f6'};
                color: white;
                padding: 12px 20px;
                border-radius: 8px;
                box-shadow: 0 4px 12px rgba(0,0,0,0.15);
                z-index: 1000;
                font-size: 14px;
                animation: slideIn 0.3s ease;
                max-width: 300px;
            `;
            notification.textContent = message;

            document.body.appendChild(notification);

            setTimeout(() => {
                notification.style.animation = 'slideIn 0.3s ease reverse';
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }

        // Show notifications
        function showNotifications() {
            const notifications = [
                'Ertaga matematika imtihoni',
                'Yangi xabar: Johnson Sarah',
                'Uy ishi muddati tugaydi'
            ];

            notifications.forEach((msg, index) => {
                setTimeout(() => {
                    showNotification(msg, 'info');
                }, index * 500);
            });
        }

        // User menu toggle
        function toggleUserMenu() {
            showNotification('Profil menyusi tez orada!', 'info');
        }

        // Event listeners for interactive elements
        document.addEventListener('DOMContentLoaded', function () {
            // Add click animations to cards
            document.querySelectorAll('.content-card, .widget-card').forEach(card => {
                card.addEventListener('click', function () {
                    this.style.transform = 'scale(0.98)';
                    setTimeout(() => {
                        this.style.transform = '';
                    }, 100);
                });
            });

            // Chat items click
            document.querySelectorAll('.chat-item').forEach(chat => {
                chat.addEventListener('click', function () {
                    showNotification('Chat ochilmoqda...', 'info');
                });
            });

            // Teacher contact click
            document.querySelectorAll('.teacher-contact').forEach(contact => {
                contact.addEventListener('click', function (e) {
                    e.stopPropagation();
                    showNotification('Email mijoz ochilmoqda...', 'info');
                });
            });

            // Book status click
            document.querySelectorAll('.book-status').forEach(status => {
                status.addEventListener('click', function (e) {
                    e.stopPropagation();
                    showNotification('Kitob muddati uzaytirildi!', 'success');
                });
            });

            // Event cards hover effect
            document.querySelectorAll('.event-card').forEach(event => {
                event.addEventListener('mouseenter', function () {
                    this.style.transform = 'translateY(-2px)';
                });

                event.addEventListener('mouseleave', function () {
                    this.style.transform = '';
                });
            });

            // See all buttons
            document.querySelectorAll('.see-all-btn').forEach(btn => {
                btn.addEventListener('click', function (e) {
                    e.preventDefault();
                    showNotification('Barcha tadbirlar ko\'rsatilmoqda...', 'info');
                });
            });

            // Welcome message
            setTimeout(() => {
                showNotification('Xush kelibsiz, Alilo Grig!', 'success');
            }, 1000);
        });

        // Real-time updates simulation
        setInterval(() => {
            const attendanceText = document.querySelector('.attendance-text');
            const attendanceCircle = document.querySelector('.circle-fill');

            if (attendanceText && Math.random() > 0.8) {
                let currentPercentage = parseInt(attendanceText.textContent);
                if (currentPercentage < 100) {
                    currentPercentage += 1;
                    attendanceText.textContent = currentPercentage + '%';

                    const dashOffset = 314 - (314 * currentPercentage / 100);
                    attendanceCircle.style.strokeDashoffset = dashOffset;
                }
            }
        }, 5000);