<template>
    <div>
        <div id="main">
            <div id="footer">
                <div class="d-flex">
                    <div class="w-50">
                        <div class="footer-1">
                            <div class="footer-logo">
                                <a href="#"><img src="../assets/images/logo.png" alt="" height="120px"></a>
                            </div>
                            <div class="connect">
                                <h2 class="ct-h2">
                                    Connect with us
                                </h2>
                                <div class="icon">
                                    <a href="#"><img src="../assets/images/facebook.png" width="48px" alt=""> </a>
                                    <a href="#"><img src="../assets/images/twitter.png" alt="" width="48px"> </a>
                                    <a href="#"><img src="../assets/images/youtube.png" alt="" width="48px"> </a>
                                    <a href="#"><img src="../assets/images/instagram.png" alt="" width="48px"> </a>
                                </div>
                                <div class="copyrigth">
                                    <p>© Copyright NexTag.All right reserved</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="w-50">
                        <div class="footer-2">
                            <div class="pay">
                                <h2>Payment type</h2>
                            </div>
                            <div class="icon-pay">
                                <a href="#"><img src="../assets/images/money.png" alt=""></a>
                                <a href="#"><img src="../assets/images/atm.png" alt=""></a>
                                <a href="#"><img src="../assets/images/visa.png" alt=""></a>
                            </div>
                            <div class="address">
                                <h2 class="pd-t25">Store address</h2>
                                <div class="detailed-address">
                                    <p>8A, Ton That Thuyet, My Dinh, Tu Liem, Ha Noi.</p>
                                </div>
                                <div class="hotline">
                                    <p>Hotline: <a href="tel:1-212-555-5555">0386169003</a></p>
                                    <p class="pd-t-10">Email: <a href="mailto:#">AptechHN.edu.vn</a> </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script setup>

</script>

<style scoped>
#footer {
    width: auto;
    height: auto;
    background-color: #292929;
}

.ft-w-50 {
    margin-left: 10%;
    padding: 5%;
}

.fx-20 {
    font-size: 20px;
}



p {
    font-size: 18px;
}

.footer-1 {
    margin-top: 5%;
    color: white;
    margin-left: 10%;
    margin-bottom: 10px;

}

.ct-h2 {
    padding-left: 15px;
}

.a-ads {
    color: beige;
    text-decoration: none;
}

.footer-2 {
    margin-top: 5%;
    margin-left: 10%;
    color: white;
    margin-bottom: 5px;
}

.footer-logo {
    padding-left: 60px;
}

.icon {
    padding-left: 25px;
}

.pd-t25 {
    padding-top: 25px
}

.hotline p {
    font-size: 16px;
    margin: 0;
}

.hotline a {
    color: #fff;
    text-decoration: none;
}

.hotline>p>a:hover {
    color: #ff720b;
}

.icon a {
    text-decoration: none;
}
</style>