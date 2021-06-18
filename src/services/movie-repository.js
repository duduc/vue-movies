export const movieRepository = {
  async get(type) {
    const res = await fetch(`/resources/${type}.json`);
    return res.json();
  }
}
