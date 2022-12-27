export const theme = {
  colors: {
    primary: '#FCC33A',
    secondary: '#78A9FF',
    secondaryDark: '#285AB3',
    text: '#28282C',
    textInverse: '#F0F0F0',
    background: '#FDFDFD',
    backgroundDark: '#36373B'
  },
  // sizes in rem
  fontSizes: {
    sm: 0.8,
    md: 1,
    lg: 1.6,
    xl: 2.2
  },
  textVariants: {
    h1: {
      size: 'xl',
      lineHeight: 1.4
    },
    h2: {
      size: 'lg',
      lineHeight: 1.2
    },
    h3: {
      size: 'lg',
      lineHeight: 1.2
    },
    p: {
      size: 'md',
      lineHeight: 1
    },
    h4: {
      size: 'lg',
      lineHeight: 1.2
    },
    h5: {
      size: 'lg',
      lineHeight: 1.2
    },
    h6: {
      size: 'lg',
      lineHeight: 1.2
    },
    span: {
      size: 'md',
      lineHeight: 1
    }
  },
  radii: [4, 8, 12]
}

export type AppTheme = typeof theme

export type ThemeColor = keyof AppTheme['colors']

export type FontSize = keyof AppTheme['fontSizes']

declare module '@emotion/react' {
  export interface Theme extends AppTheme {}
}
