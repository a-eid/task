export const getWidth = () =>
  Math.max(
    document.body.scrollWidth,
    document.documentElement.scrollWidth,
    document.body.offsetWidth,
    document.documentElement.offsetWidth,
    document.documentElement.clientWidth
  )

const sizes = {
  tablet: 500,
  desktop: 900
}

const width = getWidth()

export const windowInfo = {
  width,
  type:
    width > sizes.desktop
      ? "desktop"
      : width > sizes.tablet
        ? "tablet"
        : "mobile"
}
