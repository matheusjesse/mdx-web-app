import { createThemes } from 'tw-colors';
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    createThemes({
       light: { 
        'primary': '#236A4B',
        'surfaceTint': '#236A4B',
        'onPrimary': '#FFFFFF',
        'primaryContainer': '#AAF2CB',
        'onPrimaryContainer': '#002113',
        'secondary': '#206487',
        'onSecondary': '#FFFFFF',
        'secondaryContainer': '#C6E7FF',
        'onSecondaryContainer': '#001E2D',
        'tertiary': '#6A548D',
        'onTertiary': '#FFFFFF',
        'tertiaryContainer': '#ECDCFF',
        'onTertiaryContainer': '#240E45',
        'error': '#BA1A1A',
        'onError': '#FFFFFF',
        'errorContainer': '#FFDAD6',
        'onErrorContainer': '#410002',
        'background': '#F5FBF4',
        'onBackground': '#171D19',
        'surface': '#F5FBF4',
        'onSurface': '#171D19',
        'surfaceVariant': '#DCE5DD',
        'onSurfaceVariant': '#404943',
        'outline': '#707973',
        'outlineVariant': '#C0C9C1',
        'shadow': '#000000',
        'scrim': '#000000',
        'inverseSurface': '#2C322E',
        'inverseOnSurface': '#EDF2EC',
        'inversePrimary': '#8FD5AF',
        'primaryFixed': '#AAF2CB',
        'onPrimaryFixed': '#002113',
        'primaryFixedDim': '#8FD5AF',
        'onPrimaryFixedVariant': '#005235',
        'secondaryFixed': '#C6E7FF',
        'onSecondaryFixed': '#001E2D',
        'secondaryFixedDim': '#91CEF5',
        'onSecondaryFixedVariant': '#004C6B',
        'tertiaryFixed': '#ECDCFF',
        'onTertiaryFixed': '#240E45',
        'tertiaryFixedDim': '#D5BBFC',
        'onTertiaryFixedVariant': '#513C73',
        'surfaceDim': '#D6DBD5',
        'surfaceBright': '#F5FBF4',
        'surfaceContainerLowest': '#FFFFFF',
        'surfaceContainerLow': '#F0F5EF',
        'surfaceContainer': '#EAEFE9',
        'surfaceContainerHigh': '#E4EAE3',
        'surfaceContainerHighest': '#DEE4DE'
       },
       dark: { 
        'primary': '#8FD5AF',
        'surfaceTint': '#8FD5AF',
        'onPrimary': '#003824',
        'primaryContainer': '#005235',
        'onPrimaryContainer': '#AAF2CB',
        'secondary': '#91CEF5',
        'onSecondary': '#00344B',
        'secondaryContainer': '#004C6B',
        'onSecondaryContainer': '#C6E7FF',
        'tertiary': '#D5BBFC',
        'onTertiary': '#3A255B',
        'tertiaryContainer': '#513C73',
        'onTertiaryContainer': '#ECDCFF',
        'error': '#FFB4AB',
        'onError': '#690005',
        'errorContainer': '#93000A',
        'onErrorContainer': '#FFDAD6',
        'background': '#0F1511',
        'onBackground': '#DEE4DE',
        'surface': '#0F1511',
        'onSurface': '#DEE4DE',
        'surfaceVariant': '#404943',
        'onSurfaceVariant': '#C0C9C1',
        'outline': '#8A938C',
        'outlineVariant': '#404943',
        'shadow': '#000000',
        'scrim': '#000000',
        'inverseSurface': '#DEE4DE',
        'inverseOnSurface': '#2C322E',
        'inversePrimary': '#236A4B',
        'primaryFixed': '#AAF2CB',
        'onPrimaryFixed': '#002113',
        'primaryFixedDim': '#8FD5AF',
        'onPrimaryFixedVariant': '#005235',
        'secondaryFixed': '#C6E7FF',
        'onSecondaryFixed': '#001E2D',
        'secondaryFixedDim': '#91CEF5',
        'onSecondaryFixedVariant': '#004C6B',
        'tertiaryFixed': '#ECDCFF',
        'onTertiaryFixed': '#240E45',
        'tertiaryFixedDim': '#D5BBFC',
        'onTertiaryFixedVariant': '#513C73',
        'surfaceDim': '#0F1511',
        'surfaceBright': '#353B36',
        'surfaceContainerLowest': '#0A0F0C',
        'surfaceContainerLow': '#171D19',
        'surfaceContainer': '#1B211D',
        'surfaceContainerHigh': '#262B27',
        'surfaceContainerHighest': '#303632'
       }       
    })
 ],
}
