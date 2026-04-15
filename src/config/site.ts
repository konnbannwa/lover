export const siteConfig = {
	title: '我们的恋爱日记',
	subtitle: '把寻常的日子，安静地收进时间里。',
	description: '一个用来记录两个人日常、纪念日、照片与小文章的温柔小站。',
	startDate: '2024-02-14',
	welcomeTitle: '欢迎来到我们的小站',
	welcomeText:
		'这里用来慢慢收集一起走过的天色、晚饭、散步、照片和心事。它不急着更新，只想把值得记住的每一刻，轻轻放好。',
	aboutText:
		'这是一个属于两个人的小站，用来记录日常与纪念时刻。没有喧闹的表达，也不追求复杂的设计，只想认真地保存那些会在很多年后依旧让人心软的片段。',
	footerNote: '愿每一个平常日子，都因为被认真记录而发光。',
} as const;

export const homeLinks = [
	{
		title: '时间线',
		description: '按日期翻看每一篇日记，适合持续新增和回顾。',
		path: 'timeline/',
	},
	{
		title: '相册',
		description: '先用占位图承载结构，之后替换成你们真实的照片。',
		path: 'album/',
	},
	{
		title: '关于',
		description: '简单说明这个小站为什么存在，也留下将来的注脚。',
		path: 'about/',
	},
] as const;

export const navigation = [
	{ label: '首页', path: '' },
	{ label: '时间线', path: 'timeline/' },
	{ label: '相册', path: 'album/' },
	{ label: '关于', path: 'about/' },
] as const;
