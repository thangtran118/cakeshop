<!doctype html>
<html lang="en">
<?php
require "./partials/head.php"
?>
<body id="home" page="index">
<?php
require "./partials/header.php";
require "./partials/banner.php";
?>
<!--Start about-->
<section class="about">
    <div class="about__title text-center mt-5 mb-3">
        <h2 class="section-title">About Us</h2>
    </div>
    <div class="container">
        <div class="row px-5">
            <div class="col-6">
                <h3 class="clr-primary mb-4">
                    Cake Shop - Fresh cakes for every day
                </h3>
                <p>
                    The Cake Shop's mission is to make people happy. Making delicious cakes, having relaxing chairs in a
                    smoking free environment and keeping our prices reasonable are all different ways to achieve this
                    goal.
                </p>
            </div>
            <div class="col-6">
                <img
                        class="lazyload"
                        alt="about image"
                        src="./assets/images/products/15.jpeg"
                        data-src="./assets/images/products/15.jpeg"
                >
            </div>
        </div>
    </div>
</section>
<!--End about-->
</body>

<!-- Vendor JS -->
<script src="./js/vendors/jquery-3.6.0.min.js"></script>
<script src="./js/vendors/parallax.min.js"></script>

<script src="js/main.js"></script>
</html>