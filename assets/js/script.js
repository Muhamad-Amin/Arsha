const nav = document.querySelectorAll("nav")[0];

window.addEventListener("scroll", () => {
    if (window.scrollY > 1) {
        nav.classList.replace('bg-tranparent', 'nav-active')
    } else if (window.scrollY <= 0) {
        nav.classList.replace('nav-active', 'bg-tranparent')
    }
});

// Portfolio Start
const tombolSemuaProduk = $('#tombolSemuaProduk');
const tombolProdukDigital = $('#tombolProdukDigital');
const tombolProdukMewah = $('#tombolProdukMewah');

const semuaProduk = $('#semuaProduk');
const produkDigital = $('#produkDigital');
const produkMewah = $('#produkMewah');

produkDigital.hide();
produkMewah.hide();
tombolSemuaProduk.addClass('active');

function tampilkanSemuaProduk() {
    tombolSemuaProduk.addClass('active');
    tombolProdukDigital.removeClass('active');
    tombolProdukMewah.removeClass('active');

    produkDigital.hide(1000);
    produkMewah.hide(1000);
    semuaProduk.show(1000);
}

function tampilkanProdukDigital() {
    tombolProdukDigital.addClass('active');
    tombolSemuaProduk.removeClass('active');
    tombolProdukMewah.removeClass('active');

    produkMewah.hide(1000);
    semuaProduk.hide(1000);
    produkDigital.show(1000);
}

function tampilkanProdukMewah() {
    tombolProdukMewah.addClass('active');
    tombolProdukDigital.removeClass('active');
    tombolSemuaProduk.removeClass('active');

    semuaProduk.hide(1000);
    produkDigital.hide(1000);
    produkMewah.show(1000);
}

