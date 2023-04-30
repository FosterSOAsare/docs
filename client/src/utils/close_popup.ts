function closePopup(popupParentRef: any, close: () => void) {
  let parent = popupParentRef.current
  document.addEventListener('click', (e: Event) => {
    let current = e.target;
    if (!parent.contains(current)) {
      close()
    }
  })
}

export default closePopup