function removeKFromList(l, k) {
  let current = l;
  let next = current.next;
  let index = 0;

  while (current.next) {
    if (index === 0 && current.value === 3) {
      l = current.next;
      index--;
    }

    while (next.value === 3) {
      if (next.next) {
        next = next.next;
        current.next = next;
      } else {
        current.next = null;
        return l;
      }
    }

    current = current.next;
    current
      ? next = current.next
      : next = null;
    index++;
  }
  return l;
}

module.exports = {
  removeKFromList
};