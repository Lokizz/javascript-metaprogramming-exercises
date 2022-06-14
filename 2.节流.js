/*
 * @Author: MacLoki
 * @Date: 2022-06-13 22:56:38
 * @LastEditors: MacLoki
 * @LastEditTime: 2022-06-13 23:04:37
 * @FilePath: /javascript-metaprogramming-exercises/2.节流.js
 */

// * 函数节流 - 在固定的时间间隔执行，一段连续的回调函数操作
const throttle = (fn, delay) => {
  let last = 0
  return (...args) => {
    // 剩余给回调函数的传参
    const now = Date.now()
    if (now - last > delay) {
      last = now
      fn.apply(this, args)
    }
  }
}

// ? 测试
function task() {
  console.log('run task')
}

const throttleTask = throttle(task, 1000)
window.addEventListener('scroll', throttleTask)
