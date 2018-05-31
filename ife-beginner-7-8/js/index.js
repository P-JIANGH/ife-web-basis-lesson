window.onload = function () {
    (function () {
        const bannerItems = document.querySelectorAll('.banner-item');
        const imgItems = document.querySelectorAll('.banner-image');
        for (let i = 0; i < bannerItems.length; i++) {
            const item = bannerItems[i];
            item.onclick = function () {
                bannerItems.forEach(item => item.setAttribute('class', 'banner-item'));
                this.setAttribute('class', 'banner-item banner-active');
                imgItems.forEach(item => item.setAttribute('class', 'banner-image'));
                imgItems[i].setAttribute('class', 'banner-image banner-image-active');
            }
        }
    })();

    (function () {
        const tabItems = document.querySelectorAll('.tab-item');
        for (let i = 0; i < tabItems.length; i++) {
            const item = tabItems[i];
            item.onclick = function () {
                tabItems.forEach(item => item.setAttribute('class', 'tab-item'));
                this.setAttribute('class', 'tab-item active-tab');
            }
        }
    })();
}