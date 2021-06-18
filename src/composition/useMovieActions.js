import useToolkit from "./useToolkit";

export default function (filterValue) {
  function onDelete(movie, allMovies) {
    const index = allMovies.findIndex(el => el === movie);
    if (index !== undefined) {
      allMovies.splice(index, 1);
    }
  }

  function onEdit(movie) {
    movie.previousName = movie.name;
    movie.previousDesc = movie.description;
    movie.editing = true;
    movie.selected = false;
  }

  function onUpdate(movie) {
    if (movie.name === '') {
      // do a popup !
    } else {
      movie.editing = false;
    }
  }

  function onCancel(movie, allMovies) {
    if ((movie.name === '' && movie.description === '') || (movie.previousName === '' && movie.previousDesc === '')) {
      onDelete(movie, allMovies);
    } else {
      movie.name = movie.previousName;
      movie.description = movie.previousDesc;
    }
    movie.editing = false;
  }

  function onSelect(movie, allMovies) {
    movie.selected = !movie.selected;
    if (movie.selected) {
      allMovies
        .filter(el => el !== movie)
        .forEach(el => el.selected = false);
    }
  }

  function addMovie(allMovies) {
    filterValue.value = '';
    allMovies.forEach(el => el.selected = false);
    allMovies.push(
      {
        id: useToolkit().generateUid(),
        description: '',
        name: '',
        previousName: '',
        previousDesc: '',
        editing: true,
        selected: false,
      },
    );
  }

  return {
    onDelete,
    onEdit,
    onUpdate,
    onCancel,
    onSelect,
    addMovie,
  };
}
