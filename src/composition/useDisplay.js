export default function (props) {
  function displaySummary(items) {
    const type = props.type === 'series' ? 'série' : 'film';
    return items.length > 0 ?
      `${items.length} ${type}${items.length > 1 ? 's' : ''} au total`
      : `Aucun${props.type === 'series' ? 'e' : '' } ${type} pour le moment`;
  }

  function displayTitle() {
    const type = props.type === 'series' ? 'séries' : 'films';
    return `Les ${type} du moment`;
  }
  return {
    displaySummary,
    displayTitle,
  };
}
