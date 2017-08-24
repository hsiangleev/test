
	$(function () {

		/***********个人数据添加接口**********/
		var aSpan=$(".right .right-page1 .right-welcome span");
		var arr=["小涛","1956940","8","0"];
		for (var i = 0; i < arr.length; i++) {
			aSpan.eq(i).text(arr[i])
		}
		/***********个人数据添加接口**********/
		var json=[
			{
				"id": "BT10000000",
				"name": "爱五格兰猫头鹰3d立体浮雕卡背叛套装",
				"num": 1,
				"price": "3170积分",
				"time": "2015-02-05",
				"exchangeStatus": "代发货",
				"orderStatus": "去支付"
			},
			{
				"id": "BT10000000",
				"name": "爱五格兰猫头鹰3d立体浮雕卡背叛套装",
				"num": 1,
				"price": "3170积分",
				"time": "2015-02-05",
				"exchangeStatus": "代发货",
				"orderStatus": "已支付"
			},
			{
				"id": "BT10000000",
				"name": "爱五格兰猫头鹰3d立体浮雕卡背叛套装",
				"num": 1,
				"price": "3170积分",
				"time": "2015-02-05",
				"exchangeStatus": "代发货",
				"orderStatus": "已支付"
			},
			{
				"id": "BT10000000",
				"name": "爱五格兰猫头鹰3d立体浮雕卡背叛套装",
				"num": 1,
				"price": "3170积分",
				"time": "2015-02-05",
				"exchangeStatus": "代发货",
				"orderStatus": "已支付"
			}
		];
		/**************添加表格到table1****************/
		
		var oTable=$(".right .right-order table");
		var str="";
		for (var i = 0; i < json.length; i++) {
			if(json[i].orderStatus=="去支付"){
				str+=`<tr>
					<td>`+json[i].id+`</td>
					<td>`+json[i].name+`</td>
					<td>`+json[i].num+`</td>
					<td>`+json[i].price+`</td>
					<td>`+json[i].time+`</td>
					<td>`+json[i].exchangeStatus+`</td>
					<td><a href="javascript:;"><button>`+json[i].orderStatus+`</button></a></td>
					<td><a href="info.html">查看详情</a></td>
				</tr>`;
			}else{
				str+=`<tr>
					<td>`+json[i].id+`</td>
					<td>`+json[i].name+`</td>
					<td>`+json[i].num+`</td>
					<td>`+json[i].price+`</td>
					<td>`+json[i].time+`</td>
					<td>`+json[i].exchangeStatus+`</td>
					<td>`+json[i].orderStatus+`</td>
					<td><a href="info.html">查看详情</a></td>
				</tr>`;
			}
		}
		oTable.append(str);

		
		/**************添加表格到table1****************/

		/****************点击切换页面显示*************/
		var oA=$(".left .nav a");
		var page=$(".right>div");
		oA.on("click",function () {
			$(this).parent("li").addClass("current").siblings("li").removeClass("current");
			page.eq($(this).parent("li").index()).slideDown(300).siblings("div").hide();

		})


		/****************点击切换页面显示*************/

		/**************添加表格到table3 积分详情****************/
	
		var json2=[
			{
				"time": "2013-11-15 05:42",
				"id": "10000000000",
				"describe": "每日签到每日签到",
				"income": "100.0",
				"expenditure": "50.0",
				"remark": ""
			},
			{
				"time": "2013-11-15 05:42",
				"id": "10000000000",
				"describe": "每日签到每日签到",
				"income": "100.0",
				"expenditure": "50.0",
				"remark": ""
			},
			{
				"time": "2013-11-15 05:42",
				"id": "10000000000",
				"describe": "每日签到每日签到",
				"income": "100.0",
				"expenditure": "50.0",
				"remark": ""
			},
			{
				"time": "2013-11-15 05:42",
				"id": "10000000000",
				"describe": "每日签到每日签到",
				"income": "100.0",
				"expenditure": "50.0",
				"remark": ""
			}
		]
		
		var oTable2=$(".right .right-page3 table");
		var str2="";
		for (var i = 0; i < json2.length; i++) {
			str2+=`<tr>
				<td>`+json2[i].time+`</td>
				<td>`+json2[i].id+`</td>
				<td>`+json2[i].describe+`</td>
				<td>`+json2[i].income+`</td>
				<td>`+json2[i].expenditure+`</td>
				<td>`+json2[i].remark+`</td>
			</tr>`;
		}
		oTable2.append(str2);
		
		$(".right .right-page3 h4 span").text(arr[1]);
		/**************添加表格到table3  积分详情****************/
	})

