let n
初始化()

setInterval( ()=>{
	makeLeave(getImage(n))
	  .one('transitionend', (e)=>{
	  	makeEnter($(e.currentTarget))
	  })
	makeCurrent(getImage(n+1))
	n += 1
}, 3000)






//  下面的函数可以不用看

function getImage(n) {
	return $(`.images > img:nth-child(${x(n)}`)
}

function x(n) {
	if ( n > 3) {
		n = n % 3
		if (n === 0) {
			n = 3
		}
	}   
	return n //得到一个循环等于 1 2 3的 n
}

function 初始化() {
	n = 1;
	$(`.images > img:nth-child(${n})`).addClass('current')
	  .siblings().addClass('enter')
}

function makeCurrent($node) {
	$node.removeClass('enter').addClass('current')
	return $node
}

function makeLeave($node) {
	$node.removeClass('current').addClass('leave')
	return $node
}

function makeEnter($node) {
	$node.removeClass('leave').addClass('enter')
	return $node
}
