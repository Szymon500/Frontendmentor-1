const data = [
	{
		day: 'mon',
		amount: 17.45,
	},
	{
		day: 'tue',
		amount: 34.91,
	},
	{
		day: 'wed',
		amount: 52.36,
	},
	{
		day: 'thu',
		amount: 31.07,
	},
	{
		day: 'fri',
		amount: 23.39,
	},
	{
		day: 'sat',
		amount: 43.28,
	},
	{
		day: 'sun',
		amount: 25.48,
	},
]
const bars = document.querySelectorAll('.box__body-graph-col-item')
const moneysBox = document.querySelectorAll('.box__body-graph-money-item')
const body = document.querySelector('.body')

for (let i = 0; i < bars.length; i++) {
	const height = data[i].amount * 2.5
	const value = data[i].amount;
	moneysBox[i].innerText = `$${value}`
	bars[i].style.height = `${height}px`
	bars[i].addEventListener('mouseover',()=>{
		bars[i].classList.add('mouseover')
		moneysBox[i].classList.add('active')
})
	bars[i].addEventListener('mouseout',()=>{
		bars[i].classList.remove('mouseover')
		moneysBox[i].classList.remove('active')
	})
}

const resizeHandle = () =>{
	if(window.innerWidth >= 768 && window.innerWidth < 1100){
		for (let i = 0; i < bars.length; i++){
			const height = data[i].amount * 3
			bars[i].style.height = `${height}px`
		}
	}else if(window.innerWidth > 1100){
		for (let i = 0; i < bars.length; i++){
			const height = data[i].amount * 3.5
			bars[i].style.height = `${height}px`
		}
	}
}
window.onresize = resizeHandle