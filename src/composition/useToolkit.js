export default function () {
  function generateUid() {
    return Math.floor((Math.random() + 1) * 0x1000)
      .toString(10);
  }

  return {
    generateUid,
  };
}
