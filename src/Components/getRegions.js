

export default function getRegion({ keyword = "europa" } = {}) {
  const apiUrl = `https://restcountries.eu/rest/v2/region/${keyword}`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((resp) => {
      console.log(typeof resp.length)
      if (resp.length !== undefined) {
        const flags = resp.map(({ name, population, region, capital, numericCode, flag }) => {
          return { name, population, region, capital, numericCode, flag }
        })

        return flags;
      }
    }).catch(error => console.log(error))
}
