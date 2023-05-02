function closePopup(popupParentRef: any, close: () => void) {
  let parent = popupParentRef.current
  let func = (e: Event) => {
    let current = e.target;
    if (!parent.contains(current)) {
      close()
    }
  }
  document.addEventListener('click', func)
  return () => {
    document.removeEventListener("click", func)
  }
}

export default closePopup