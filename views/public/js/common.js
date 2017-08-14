
	// NProgress.start();

	// NProgress.done();

	$('.navs ul').prev('a').on('click', function () {
		$(this).next().slideToggle();
	});

	if(!$.cookie('PHPSESSID')&&location.pathname!='/login'){
			window.location.href = '/login';
	}


	
	

	// // 判断   因为login页面是没有侧边栏和顶部的   因此需要排队掉首页面
	// if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
	// 		var html = template('tpl_profile',JSON.parse($.cookie('tcInfo')));
	// 		$('.profile').html(html);
	// }

	// define(['jquery','cookie','template'],function($,ck,template){
	// 	if(!$.cookie('PHPSESSID')&&location.pathname!='/login'){
	// 		window.location.href = '/login';
	// }

	// 判断   因为login页面是没有侧边栏和顶部的   因此需要排队掉首页面
	if(location.pathname!='/login'&&location.pathname!='/dashboard/login'&&location.pathname!='/views/dashboard/login'){
			var html = template('tpl_aside',JSON.parse($.cookie('cinfoSt')));
			$('.aside>.profile').html(html);
	}
	// })


