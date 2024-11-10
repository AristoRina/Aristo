<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>60-Day Countdown</title>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script>
        // Countdown plugin script
        (function($) {
            "use strict";
            function countdownTimer(element, endDate) {
                let timerInterval;
                function updateTimer() {
                    const now = new Date().getTime();
                    const distance = endDate - now;

                    if (distance <= 0) {
                        clearInterval(timerInterval);
                        $(element).html("Countdown finished!");
                        return;
                    }

                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                    $(element).html(`${days}d ${hours}h ${minutes}m ${seconds}s`);
                }

                timerInterval = setInterval(updateTimer, 1000);
                updateTimer(); // Initial call to display immediately
            }

            $(document).ready(function() {
                const countdownElement = $('#countdown');
                const endDate = new Date();
                endDate.setDate(endDate.getDate() + 60);
                countdownTimer(countdownElement, endDate);
            });
        })(jQuery);
    </script>
</head>
<body>
    <div id="countdown"></div>
</body>
</html>
