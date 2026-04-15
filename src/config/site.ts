export const siteConfig = {
	title: '我们的恋爱日记',
	subtitle: '喵喵宝宝抱抱',
	description: '一个用来记录两个人日常、纪念日、照片与小文章的小站。',
	startDate: '2026-04-11',
	welcomeTitle: '哦咦，欢迎来到我们的恋爱日记！',
	welcomeText:
		'这里慢慢收集我们的小故事啦，一起走过的风景，有些烦恼，有些开心，都值的记录！',
	aboutText:
		'宝宝，这是我们两个的小站噜，我们不用去98盖楼啦，偷偷存在这里嘻嘻，有没有一种偷感呢~ 娇羞ing',
	aboutParagraphs: [
		'这就是程序员的恋爱么，也很甜甜嘛！哪里有网上说的那么无聊哼哼',
		'我把仓库设置成private啦，虽然可能还是会被翻倒，但是，那又怎样！让他们羡慕去吧！',
		'想说的想写的，宝宝害羞不敢说的，就偷偷写在这里吧！可以不用写字啦，当然姐姐喜欢我还可以写很多字的！',
		'重要的事情再说一遍，抱抱姐姐！',
	],
	heroQuote: '当时只道是寻常，其实不是的！我们在一起的每一天都独一无二！',
	footerNote: '愿每一个日子都有你！',
	footerText: '喵唔，爱你哦！',
} as const;

export const homeLinks = [
	{
		title: '时间线',
		description: '咳咳，日记本',
		path: 'timeline/',
	},
	{
		title: '相册',
		description: '我们的照片！',
		path: 'album/',
	},
	{
		title: '关于',
		description: '一点温柔的注脚',
		path: 'about/',
	},
] as const;

export const anniversaries = [
	{
		title: '初识',
		date: '2024-9-28',
		description: '在海底捞，我们见面啦，虽然我们两个有两个唐唐的',
	},
	{
		title: '表白',
		date: '2026-04-04',
		description: '唔，你说可以哎',
	},
	{
		title: '官宣噜',
		date: '2026-04-11',
		description: '终于轮到我们甜甜甜甜！',
	},
] as const;

export const navigation = [
	{ label: '首页', path: '' },
	{ label: '时间线', path: 'timeline/' },
	{ label: '相册', path: 'album/' },
	{ label: '关于', path: 'about/' },
] as const;
