export async function getHeroes() {
  const res = await fetch('http://homologacao3.azapfy.com.br/api/ps/metahumans')
  const data = await res.json()

  return data
}
