const onClick = ($event, el, callback) => {
  if (!el.contains($event.target)) {
    console.log('123', callback)
    callback()
  }
}

export default {
  mounted (el, binding) {
    document.addEventListener('click', ($event) => onClick($event, el, binding.value))
  },
  beforeUnmount (el, binding) {
    document.removeEventListener('click', ($event) => onClick($event, el, binding.value))
  }
}
