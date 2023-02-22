async function fetcher<T> (url: string): Promise<T | undefined> {
  const res = await fetch(url)

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data')
  }

  return await res.json()
}

export default fetcher
