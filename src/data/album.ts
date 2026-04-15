export const albumItems = [
	{
		title: '春天的散步',
		date: '2025-03-16',
		description: '把那天的风、路灯和走走停停的片段放在同一个相册里，会比单张照片更完整。',
		note: '以后可以继续往这个分组里补同一天的照片。',
		photos: [
			{ image: '/images/album/placeholder-1.svg', alt: '春天散步占位图一' },
			{ image: '/images/album/placeholder-2.svg', alt: '春天散步占位图二' },
			{ image: '/images/album/placeholder-1.svg', alt: '春天散步占位图三' },
		],
	},
	{
		title: '安静的晚餐',
		date: '2025-05-02',
		description: '一顿晚饭可以有很多细碎瞬间，比如餐桌、夜色、合照或者回家的路。',
		note: '适合按“一次晚餐”整理成一个小小的相册组。',
		photos: [
			{ image: '/images/album/placeholder-2.svg', alt: '晚餐占位图一' },
			{ image: '/images/album/placeholder-3.svg', alt: '晚餐占位图二' },
			{ image: '/images/album/placeholder-2.svg', alt: '晚餐占位图三' },
			{ image: '/images/album/placeholder-1.svg', alt: '晚餐占位图四' },
		],
	},
	{
		title: '一次值得纪念的小旅行',
		date: '2025-08-24',
		description: '旅行更适合按一次出发来收纳，这样翻看时会更像重新走了一遍那天的路线。',
		note: '以后可以把同一次旅行的多张照片都放进这个分组。',
		photos: [
			{ image: '/images/album/placeholder-3.svg', alt: '旅行占位图一' },
			{ image: '/images/album/placeholder-1.svg', alt: '旅行占位图二' },
			{ image: '/images/album/placeholder-3.svg', alt: '旅行占位图三' },
			{ image: '/images/album/placeholder-2.svg', alt: '旅行占位图四' },
		],
	},
] as const;
