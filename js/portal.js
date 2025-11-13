/* 검색어 팝업 */
$(".search_wrap input").on("focus", function () {
	$('.select_active').addClass('select').removeClass('select_active');

	setTimeout(function () {
		$(".search_wrap").addClass('active');
		$(".search_list").show();
	}, 300);
});

$('.wrap').click(function () {
	setTimeout(function () {
		$(".search_wrap").removeClass('active');
		$(".search_list").hide();
	}, 300);
});

/* 클릭 이벤트 전파 방지 */
$('.select, .setting_modal, .box .more_btn, .site_wrap .more_btn, .site_wrap .more_pop, .search_wrap, .search_list').click(function (e) {
	e.stopPropagation();
});

/* 외부 클릭 닫기 */
$('.wrap').click(function () {
	$('.select_active').addClass('select').removeClass('select_active');
	$('.setting_modal, .box .more_btn, .site_wrap .more_btn, .site_wrap .more_pop').removeClass('active');
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

/* 메뉴바 더보기 모달 */
$('.box .more_btn').click(function () {
	$(this).toggleClass('active');
	$('.setting_modal').toggleClass('active');
});

/* 메뉴바 설정 모달 */
$('.box .setting_btn').click(function () {
	$('.modal_wrap3').css('display', 'flex');
});

/* 더보기 버튼(수정/삭제 ) */
$('.site_wrap .more_btn').click(function () {
	let isActive = $(this).hasClass('active');

	$('.site_wrap .more_btn, .site_wrap .more_pop').removeClass('active');

	if (!isActive) {
		$(this).addClass('active');
		$(this).siblings('.more_pop').addClass('active');
	}
});

/* 즐겨찾기 추가 */
$('.go').click(function () {
	$('.modal_wrap1').css('display', 'flex');
});

/* 즐겨찾기 수정 */
$('.more_pop .modify_btn').click(function () {
	$('.modal_wrap2').css('display', 'flex');
	$('.more_btn, .more_pop').removeClass('active');
});

/* 모달 닫기 */
$('.modal_wrap .close_btn, .modal_wrap .cancle_btn').click(function () {
	$('.modal_wrap').css('display', 'none');
});

/* 여러 개 탭 */
$('.tab_wrap').each(function () {
	const $tabWrap = $(this);

	$tabWrap.find('button').click(function () {
		$tabWrap.find('button').removeClass('active');
		$(this).addClass('active');
	});

	$tabWrap.find('button').eq(0).trigger('click');
});


$('.pop3 .tab_wrap button').click(function () {
	$('.tabcontent').hide();
	$('.tabcontent').eq($(this).index()).show();
});

$('.pop3 .tab_wrap button').eq(0).trigger("click");

/*슬라이드 */
const swiper1 = new Swiper('.swiper1.swiper', {
	slidesPerView: 'auto',
	loop: true,
	navigation: {
		nextEl: '.swiper-button-next',
		prevEl: '.swiper-button-prev',
	},
	pagination: {
		el: ".swiper-pagination",
		type: "fraction",
	},
});