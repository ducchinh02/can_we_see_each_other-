const btnActions = document.querySelectorAll(".button-actions .button-item");
const preloader = document.querySelector(".preloader");
const mainContent = document.querySelector(".main-content");
const overlay = document.querySelector(".overlay");

const createNewPosition = (el, posX, posY) => {
	let newPosY, newPosX;
	do {
		newPosY = Math.floor(Math.random() * window.innerHeight);
		newPosX = Math.floor(Math.random() * window.innerWidth);
	} while (newPosY === posY || newPosX === posX);
	el.style.position = "absolute";
	el.style.top = newPosY + "px";
	el.style.left = newPosX + "px";
};

btnActions.forEach((btn) => {
	btn.addEventListener("mouseover", (e) => {
		if (btn.classList.contains("btn-no")) {
			createNewPosition(btn, e.pageX, e.pageY);
		}
	});
	btn.addEventListener("click", (e) => {
		if (btn.classList.contains("btn-no")) {
			btn.style.opacity = 0;
		} else {
			const lovelyAlert = document.querySelector(".lovely-alert");
			const overlay = document.querySelector(".overlay");
			lovelyAlert.classList.add("active");
			overlay.classList.add("active");
			setTimeout(() => {
				window.location.href = "https://www.instagram.com/phan.shy/";
			}, 1000);
		}
	});
});

window.addEventListener("DOMContentLoaded", () => {
	setTimeout(() => {
		preloader.classList.add("d-none");
		mainContent.classList.remove("d-none");
		window.scrollBy({ top: 0 });
	}, 1000);
});
