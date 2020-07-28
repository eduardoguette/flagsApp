

export default function getGif({ keyword = "spain" } = {}) {
  const apiUrl = `https://restcountries.eu/rest/v2/name/${keyword}?fullText=true`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((resp) => {
     
      if (resp.length !== undefined) {
        const flags = resp.map(({ name, population, region, capital, numericCode, flag, currencies,languages,topLevelDomain,subregion,borders }) => {
          return { name, population, region, capital, numericCode, flag , currencies,languages,topLevelDomain,subregion,borders}
        })

        return flags;
      }
    }).catch(error => console.log(error))
}
