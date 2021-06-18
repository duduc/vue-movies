export default function () {
  function freeSearch(input, items) {
    if (input === '') {
      return items;
    } else {
      return items.filter(el => {
        return [
          'id',
          'name',
          'description',
        ].some(field => el[field].toLowerCase().includes(input.toLowerCase()));
      });
    }
  }

  return {
    freeSearch,
  };
}
