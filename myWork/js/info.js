
	$(function () {
		/*******************获取添加数据****************/
		var json=[
			{
				"src": "images/cup.jpg",
				"name": "爱五格兰猫头鹰3d立体浮雕卡背叛套装",
				"price": "￥148.00",
				"brand": "爱五格兰",
				"model": "-",
				"code": "S07102",
				"stock": "993",
				"integral": "3170积分",
				"num": "6"
			}
		]
		$(".content-left .bigImg img").attr("src",json[0].src);
		$(".content-left .smallImg img").attr("src",json[0].src);
		var aSpan=$(".content-right span");
		$(".content-right h2").text(json[0].name);
		aSpan.eq(0).text(json[0].price);
		aSpan.eq(1).text(json[0].brand);
		aSpan.eq(2).text(json[0].model);
		aSpan.eq(3).text(json[0].code);
		aSpan.eq(4).text(json[0].stock);
		aSpan.eq(5).text(json[0].integral);
		aSpan.eq(6).text(json[0].num);
		/***************获取添加数据***********************/
	})