type Platform = 'Steam' | 'PS4' | 'Nintendo Switch' | string

export function getPlatformLogo(platform: Platform): string {
  const platformLogos: Record<Platform, string> = {
    Steam: '/Steam_logo_black.png',
    PS4: '/PlayStation_black_logo.png',
    'Nintendo Switch': '/Nintendo-Switch-Logo.png',
  }

  const defaultLogo = '/default_logo.png'

  return platformLogos[platform] || defaultLogo
}
