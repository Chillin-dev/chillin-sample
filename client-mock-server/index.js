var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/cms/auth/createaccount', function (req, res) {
  res.send({
	data: {
		uuid: "fdsafdsafdlskajfldskajfldskahfhiue4928uidal28yehi1jkfdsafdsa",
		session: "e3ec1525aa784fe9601d75f64f256a99491acd56",
		session_expire: 1334323322323,
		regist_time: 123443322434,
		firstlogin_status: 0,
		salt: "is1sS39d"
	}
});
});

app.post('/cms/auth/signin', function (req, res) {
  res.send({
	data: {
		session: "e3ec1525aa784fe9601d75f64f256a99491acd56",
		session_expire: 1334323322323,
		regist_time: 123443322434,
		firstlogin_status: 0,
		salt: "is1sS39d"
	}
});
});

app.post('/cms/price/registration', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/price', function (req, res) {
  res.send({
	data: {
		prices: [
			{
				price_id: 1,
				price: 20000,
				color: "#111111"
			},
			{
				price_id: 1,
				price: 20000,
				color: "#111111"
			},
			{
				price_id: 1,
				price: 20000,
				color: "#111111"
			}
		]
	}
});
});

app.post('/cms/carender', function (req, res) {
  res.send({
	data: {
		date: [
			{
				day: 1,
				price_id: 1
			},
			{
				day: 2,
				price_id: 1
			},
			{
				day: 3,
				price_id: 1
			},
			{
				day: 4,
				price_id: 1
			},
			{
				day: 5,
				price_id: 1
			},
			{
				day: 6,
				price_id: 1
			},
			{
				day: 7,
				price_id: 1
			}
		]
	}
});
});

app.post('/cms/carender/register', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/image/upload', function (req, res) {
  res.send({
	data: {
		image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png"
	}
});
});

app.post('/cms/image', function (req, res) {
  res.send({
	data: {
		images: [
			{
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
				image_id: 1
			},
			{
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
				image_id: 1
			},
			{
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
				image_id: 1
			}
		]
	}
});
});

app.post('/cms/plan/add', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/plan/detail', function (req, res) {
  res.send({
	data: {
		name: "朝食付きプラン",
		summary: "夕食はなく、朝食のみ付いているコースです",
		detail: "詳細説明(HTMLタグ使えるようにする？)",
		price_type: "solid / dynamic",
		price: 10000,
		period_type: "limited / always",
		start_dt: "2018-01-20",
		end_dt: "20180-01-25",
		eyecatch_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
		image_urls: [
			{
				url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
				description: "アメニティ"
			},
			{
				url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
				description: "アメニティ"
			},
			{
				url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
				description: "アメニティ"
			}
		],
		room_ids: [
			1,
			2,
			3,
			4,
			5
		]
	}
});
});

app.post('/cms/plan', function (req, res) {
  res.send({
	data: {
		plan_id: 1,
		name: "素泊まりプラン",
		price_type: "solid / dynamic",
		price: 10000,
		period_type: "limited / always",
		start_dt: "2018-01-20",
		end_dt: "20180-01-25"
	}
});
});

app.post('/cms/rooms', function (req, res) {
  res.send({
	data: {
		rooms: [
			{
				id: 1,
				name: "ダブルルーム",
				max_people_num: 3,
				room_sum: 5
			},
			{
				id: 1,
				name: "ダブルルーム",
				max_people_num: 3,
				room_sum: 5
			},
			{
				id: 1,
				name: "ダブルルーム",
				max_people_num: 3,
				room_sum: 5
			}
		]
	}
});
});

app.post('/cms/rooms/add', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/amenity', function (req, res) {
  res.send({
	data: {
		amenity: [
			{
				name: "歯ブラシ",
				id: 1
			},
			{
				name: "歯ブラシ",
				id: 1
			},
			{
				name: "歯ブラシ",
				id: 1
			},
			{
				name: "歯ブラシ",
				id: 1
			}
		]
	}
});
});

app.post('/cms/amenity/add', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/hotel/registry', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/hotel/edit', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/cms/hotel', function (req, res) {
  res.send({
	data: {
		name: "HOTEL SHE, KYOTO",
		company_name: "chillin株式会社",
		eyecatch_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
		hashtag: "hotelsheosaka",
		twitter: "アカウントid",
		address: "〒552-0012 大阪府大阪市港区市岡１丁目２−５",
		location: "座標"
	}
});
});

app.post('/cms/registry', function (req, res) {
  res.send({
	data: {
		reg_data: [
			{
				status: "予約中",
				name: "永田諒",
				checkin_dt: "2018-02-11",
				checkout_dt: "2018-02-11",
				price_sum: 19000,
				reg_dt: "2018-01-18",
				room_id: 1,
				room_name: "シングルルーム",
				people_num: 2,
				plan_id: 2,
				plan_name: "素泊まりプラン",
				tel: "08000000000",
				address: "渋谷区松濤1-17-3",
				mail: "hoge@gmail.com",
				comment: "hoge"
			},
			{
				status: "予約中",
				name: "永田諒",
				checkin_dt: "2018-02-11",
				checkout_dt: "2018-02-11",
				price_sum: 19000,
				reg_dt: "2018-01-18",
				room_id: 1,
				room_name: "シングルルーム",
				people_num: 2,
				plan_id: 2,
				plan_name: "素泊まりプラン",
				tel: "08000000000",
				address: "渋谷区松濤1-17-3",
				mail: "hoge@gmail.com",
				comment: "hoge"
			},
			{
				status: "予約中",
				name: "永田諒",
				checkin_dt: "2018-02-11",
				checkout_dt: "2018-02-11",
				price_sum: 19000,
				reg_dt: "2018-01-18",
				room_id: 1,
				room_name: "シングルルーム",
				people_num: 2,
				plan_id: 2,
				plan_name: "素泊まりプラン",
				tel: "08000000000",
				address: "渋谷区松濤1-17-3",
				mail: "hoge@gmail.com",
				comment: "hoge"
			}
		]
	}
});
});

app.listen(3000, function () {
  console.log('dev server listening on port 3000!');
});