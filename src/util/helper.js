export function html(content) {
  const result = content
    .split(/\n+/)
    .filter((line) => line.length > 0)
    .map((line) => line.trim())
    .join('')
  return result
}

export function $(selector, p = document) {
  return p.querySelector(selector)
}
