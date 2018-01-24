var express = require('express');
var app = express();
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
app.post('/api/auth/createuuid', function (req, res) {
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

app.post('/api/auth/createsession', function (req, res) {
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

app.post('/api/member/me', function (req, res) {
  res.send({
	data: {
		name: "taro",
		birthday: "1994/05/10",
		gender: "M/F",
		address: "your address will show here",
		mail: "hoge@gmail.com",
		tel: "080000000000"
	}
});
});

app.post('/api/member/me/edit', function (req, res) {
  res.send({
	data: {
		message: "ok"
	}
});
});

app.post('/api/hotel/me', function (req, res) {
  res.send({
	data: {
		name: "HOTEL SHE, KYOTO",
		eyecatch_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png",
		hashtag: "hotelsheosaka",
		twitter: "アカウントid",
		address: "〒552-0012 大阪府大阪市港区市岡１丁目２−５",
		location: "座標"
	}
});
});

app.post('/api/hotel/price', function (req, res) {
  res.send({
	data: {
		prices: [
			{
				date: "2018-01-22",
				min_price: "12260"
			},
			{
				date: "2018-01-23",
				min_price: "12260"
			},
			{
				date: "2018-01-24",
				min_price: "12260"
			},
			{
				date: "2018-01-25",
				min_price: "12260"
			},
			{
				date: "2018-01-26",
				min_price: "12260"
			},
			{
				date: "2018-01-27",
				min_price: "12260"
			},
			{
				date: "2018-01-28",
				min_price: "12260"
			}
		]
	}
});
});

app.post('/api/hotel/day', function (req, res) {
  res.send({
	data: {
		unable_date: [
			"2018-01-20",
			"2018-01-25"
		]
	}
});
});

app.post('/api/hotel/plan', function (req, res) {
  res.send({
	data: {
		plans: [
			{
				plan_id: 1,
				name: "朝食付きプラン",
				summary: "夕食はなく、朝食のみ付いているコースです",
				price: 10000,
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png"
			},
			{
				plan_id: 1,
				name: "朝食付きプラン",
				summary: "夕食はなく、朝食のみ付いているコースです",
				price: 10000,
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png"
			},
			{
				plan_id: 1,
				name: "朝食付きプラン",
				summary: "夕食はなく、朝食のみ付いているコースです",
				price: 10000,
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png"
			},
			{
				plan_id: 1,
				name: "朝食付きプラン",
				summary: "夕食はなく、朝食のみ付いているコースです",
				price: 10000,
				image_url: "https://demo.a-blogcms.jp/archives/001/201605/a1e0f003ecb29b57d6392a532d17da6d.png"
			}
		]
	}
});
});

app.post('/api/hotel/plan/detail', function (req, res) {
  res.send({
	data: {
		name: "朝食付きプラン",
		summary: "夕食はなく、朝食のみ付いているコースです",
		detail: "詳細説明(HTMLタグ使えるようにする？)",
		price: 10000,
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
		]
	}
});
});

app.post('/api/hotel/reservation', function (req, res) {
  res.send({
	data: {
		reservation_num: 111111
	}
});
});

app.listen(3000, function () {
  console.log('dev server listening on port 3000!');
});