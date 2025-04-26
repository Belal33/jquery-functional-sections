$(document).ready(() => {
	let secBtns = $(".sec-btn");
	let allSecs = $("section");
	let activeIndex = 0;
	const imgDir = "assets";
	const imgSrcs = [
		"1.jpg",
		"2.jpg",
		"3.jpg",
		"4.jpg",
		"5.jpg",
		"6.jpg",
		"7.jpg",
		"8.jpg",
	];
	let currentImgIndex = 0;
	secBtns.click(function () {
		const currentBtn = $(this);
		allSecs.css("display", "none");
		activeIndex = currentBtn.index();
		$(`section:eq(${activeIndex})`).css("display", "block");
		const servicesList = $(".services-list");
		if (activeIndex === 2) {
			// services section
			// handle services btn
			servicesList.slideToggle("slow");
		} else {
			servicesList.slideUp("slow");
		}
	});

	//  gallary section
	$("#left-btn").click(() => {
		if (currentImgIndex > 0) {
			currentImgIndex--;
		} else {
			currentImgIndex = imgSrcs.length - 1;
		}
		$("#gallary-img").attr("src", `${imgDir}/${imgSrcs[currentImgIndex]}`);
	});
	$("#right-btn").click(() => {
		console.log("dd");
		if (currentImgIndex < imgSrcs.length - 1) {
			currentImgIndex++;
		} else {
			currentImgIndex = 0;
		}
		$("#gallary-img").attr("src", `${imgDir}/${imgSrcs[currentImgIndex]}`);
	});
	// complain
	const complainData = {
		name: "",
		email: "",
		phone: "",
		complain: "",
	};
	$("#submit-btn").click(() => {
		complainData.name = $("#name").val();
		complainData.email = $("#email").val();
		complainData.phone = $("#phone").val();
		complainData.complain = $("#complain").val();
		isValidComplain =
			complainData.name &&
			complainData.email &&
			complainData.phone &&
			complainData.complain;
		if (isValidComplain) {
			const complainForm = $(".complain-form");
			const complainBoxData = $(".complain-data");
			complainBoxData.show();
			complainForm.hide();

			complainBoxData.prepend(
				$("<div></div>")
					.text(`Your phone is `)
					.append($("<b style='font-size:18px'></b>").text(complainData.phone))
			);

			complainBoxData.prepend(
				$("<div></div>")
					.text(`Your email is `)
					.append($("<b style='font-size:18px'></b>").text(complainData.email))
			);

			complainBoxData.prepend(
				$("<div></div>")
					.text(`Your name is `)
					.append($("<b style='font-size:18px'></b>").text(complainData.name))
			);
			complainBoxData.prepend(
				$("<div></div>")
					.text(`Your complain is `)
					.append(
						$("<b style='font-size:18px'></b>").text(complainData.complain)
					)
			);
		}
		console.log(complainData);
	});
	$("#backtoedit-btn").click(() => {
		const complainForm = $(".complain-form");
		const complainBoxDataFields = $(".complain-data div:not(.btn-div)");
		const complainBoxData = $(".complain-data");
		console.log(complainBoxDataFields);
		complainBoxDataFields.remove();
		complainBoxData.hide();
		complainForm.show();
	});
});
