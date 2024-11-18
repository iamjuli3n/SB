// =============== LOADER JS ===============
window.addEventListener('load', function () {
    document.querySelector('.web_loader').classList.remove('loader_display');

});


// =============== LIGHT & DARK FAV-ICON ===============
function isDarkModeEnabled() {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
}
function updateFavicon() {
    const favicon = document.getElementById('favicon');
    const headerLogo = document.getElementById('header-logo');
    const footerLogo = document.getElementById('footer-logo');
    if (isDarkModeEnabled()) {
        favicon.href = './assets/image/light-fav-icon.png';
        headerLogo.src = 'assets/image/light-logo.png';
        footerLogo.src = 'assets/image/dark-logo.png';
    } else {
        favicon.href = './assets/image/dark-fav-icon.png';
        headerLogo.src = 'assets/image/dark-logo.png';
        footerLogo.src = 'assets/image/light-logo.png';
    }
}
updateFavicon();
window.matchMedia('(prefers-color-scheme: dark)').addListener(updateFavicon);


// =============== NAVBAR ===============
const header = document.querySelector('header');

function handleScroll() {
    if (window.innerWidth > 991) {
        if (window.pageYOffset > 0) {
            header.classList.add('nav_scroll');
        } else {
            header.classList.remove('nav_scroll');
        }
    }
}

function onScroll(event) {
    var scrollPos = jQuery(document).scrollTop();
    jQuery("header ul li a").each(function () {
        var currLink = jQuery(this);
        var refElement = jQuery(currLink.attr("href"));
        if (refElement.length &&
            refElement.offset().top - 100 <= scrollPos &&
            refElement.offset().top + refElement.height() > scrollPos
        ) {
            jQuery("header ul li a").removeClass("active");
            currLink.addClass("active");
        } else {
            currLink.removeClass("active");
        }
    });
}

window.addEventListener('scroll', handleScroll);
window.addEventListener('resize', handleScroll);

jQuery("header ul li a").each(function () {
    jQuery(this).on("click", function (event) {
        event.preventDefault();
        var currentId = jQuery(this).attr("href");
        setTimeout(() => {
            var targetElement = jQuery(currentId);
            if (targetElement.length) {
                jQuery("html, body").animate(
                    {
                        scrollTop: targetElement.offset().top - 0
                    },
                    100 // Adjust scroll speed here
                );
            }
        }, 0);
    });
});

jQuery(window).on("scroll", onScroll);


// =============== DISABLE INSPECT & SAVE CODE ===============
// document.addEventListener('contextmenu', function (event) {
//     event.preventDefault();
// });
// document.addEventListener('keydown', function (event) {
//     const forbiddenKeys = ['F12', 'U', 'u', 's', 'S', 'M', 'm', 'I', 'i'];
//     if (forbiddenKeys.includes(event.key) && (event.ctrlKey || event.metaKey)) {
//         event.preventDefault();
//     }
//     if ((event.key === 'F12' && event.code === 'F12') ||
//         (event.key === 'F12' && event.keyCode === 123) ||
//         (event.key === 'F12' && event.code === 'F12' && event.keyIdentifier === 'F12')
//     ) {
//         window.close();
//     }
//     if ((event.key === 'F12' && event.code === 'F12' && event.fnKey) ||
//         (event.key === 'F12' && event.keyCode === 123 && event.fnKey)
//     ) {
//         window.close();
//     }
// });
