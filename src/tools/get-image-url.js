const BASE_URL = 'https://photos.enjoei.com.br'
const DEFAULT_SLUG = 'public'

export const IMAGE_PRESETS = {
  product: {
    card: '200x200'
  }
}

export function getImageUrl(imageId, preset, slug) {
  return `${BASE_URL}/${slug ? slug : DEFAULT_SLUG}/${preset}/${imageId}`
}
