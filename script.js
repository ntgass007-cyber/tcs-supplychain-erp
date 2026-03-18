// Smooth Scrolling
$(document).ready(function() {
    $('a.smooth-scroll').on('click', function() {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top
            }, 1000);
        }
    });
});

// Hamburger Menu
$(document).ready(function() {
    $('.hamburger').click(function() {
        $(this).toggleClass('is-active');
        $('.nav-menu').toggleClass('is-active');
    });
});

// Navigation Highlighting
$(document).ready(function() {
    var navLinks = $('.nav-menu a');
    $(window).on('scroll', function() {
        var scrollPos = $(document).scrollTop();
        navLinks.each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
                navLinks.removeClass('active');
                currLink.addClass('active');
            } else {
                currLink.removeClass('active');
            }
        });
    });
});

// Form Handling
$(document).ready(function() {
    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#name').val();
        var email = $('#email').val();
        var message = $('#message').val();

        // Simple validation
        if(!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Make AJAX call to send form data
        $.ajax({
            type: 'POST',
            url: '/submit',
            data: {name, email, message},
            success: function(response) {
                alert('Message sent successfully!');
                $('#contact-form')[0].reset();
            },
            error: function(error) {
                alert('Error sending message.');
            }
        });
    });
});

// Dashboard Animations
$(document).ready(function() {
    $('.dashboard-item').each(function() {
        $(this).hover(function() {
            $(this).animate({
                opacity: 0.8
            }, 200);
        }, function() {
            $(this).animate({
                opacity: 1
            }, 200);
        });
    });
});

// Canvas Chart Rendering
function renderChart() {
    var ctx = document.getElementById('myChart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
            datasets: [{
                label: '# of Votes',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: ['rgba(255, 99, 132, 0.2)', 'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)', 'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)', 'rgba(255, 159, 64, 0.2)'],
                borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)', 'rgba(255, 159, 64, 1)'],
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
// Call renderChart on window load
window.onload = renderChart;
