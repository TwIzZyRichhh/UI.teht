'use strict';

const openDialogButton = document.getElementById("open_dialog");
			const closeDialogButton = document.getElementById("close-dialog");
			const dialog = document.querySelector("dialog");

			openDialogButton.addEventListener("click", () => {
				dialog.showModal();
			});

			closeDialogButton.addEventListener("click", () => {
				dialog.close();
			});