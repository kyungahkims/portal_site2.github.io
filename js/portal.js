/* 최근검색어 */
$(".search_wrap input").on("focus", function () {
	setTimeout(function () {
		$(".search_wrap").addClass('active');
		$(".search_list").show();
	}, 300);
});

$(".search_wrap input").on("blur", function () {
	setTimeout(function () {
		$(".search_wrap").removeClass('active');
		$(".search_list").hide();
	}, 300);
});

/* 포털 사이트 이벤트 전파 방지 */
$('.select').click(function (e) {
	e.stopPropagation();
});

/* 포털 사이트 외부 클릭 닫기 */
$('.wrap').click(function () {
	$('.select_active').addClass('select').removeClass('select_active');
});

/* 포털 사이트 선택 변경 */
$(".select button").click(function () {
	const isOpen = $(this).parent().hasClass("select_active");

	if (isOpen) {
		$(this).parent().removeClass("select_active").addClass("select");
	} else {
		$(this).parent().removeClass("select").addClass("select_active");
	}

	$(this).parent().find("button").removeClass("select_btn");
	$(this).addClass("select_btn").prependTo($(this).parent());

	const btnClasses = $(this).attr("class").split(" ");
	const targetClass = btnClasses.filter(c => c !== 'select_btn')[0];

	$(".wrap").removeClass("google naver daum").addClass(targetClass);
});