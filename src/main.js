const div = dom.find('#test>.blue')[0] // 获取对应的元素
dom.style(div, 'color', 'red') // 设置 div.style.color

const divList = dom.find('.blue') // 获取多个 div.blue 元素
dom.each(divList, (n)=> console.log(n)) // 遍历 divList 里的所有元素