// function showLoading() {
//     setTimeout(() => hideLoading(), 2000);
// }

window.onload = () => {
    hideLoading();
}

const hideLoading = () => {
    const ploader = document.querySelector('.preloader');
    ploader.style.display = 'none';
}


