import md5 from 'md5'

export const createDatasetColor = (tokenId: string): string => {
  const hash = md5(tokenId)
  return `#${hash.slice(0, 6)}`
}

export const formatUnixDate = (date: number): string => {
  return new Date(date).toLocaleDateString()
}
