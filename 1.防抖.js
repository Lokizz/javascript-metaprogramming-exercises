/*
 * @Author: MacLoki
 * @Date: 2022-06-13 22:46:18
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-13 22:55:58
 * @FilePath: /javascript-metaprogramming-exercises/1.防抖.js
 */

// * 函数防抖 - 在一段连续的回调函数操作中，只执行最后一次
const debounce = (fn, delay) => {
  let timer
  return (...args) => {
    // 除了 fn, delay 之外的参数
    if (timer) {
      clearTimeout(timer)
    }
    timer = setTimeout(() => {
      // ! 用于传参
      fn.apply(this, args)
    }, delay)
  }
}

// 测试
function task() {
  console.log('run task')
}

const debounceTask = debounce(task, 1000)
window.addEventListener('scroll', debounceTask)
