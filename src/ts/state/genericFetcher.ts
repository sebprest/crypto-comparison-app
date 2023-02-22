interface Options {
  queryParams?: Record<string, string>
}

async function fetcher<T> (url: string, options: Options): Promise<T | undefined> {
  const searchParams = new URLSearchParams(options.queryParams)
  const res = await fetch(`${url}?${searchParams.toString()}`)

  if (!res.ok) {
    throw new Error('An error occurred while fetching the data')
  }

  return await res.json()
}

export default fetcher
