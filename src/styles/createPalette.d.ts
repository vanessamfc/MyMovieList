import * as createPalette from '@material-ui/core/styles/createPalette';
declare module '@material-ui/core/styles/createPalette' {
  interface PaletteOptions {
    grayColor?: PaletteColorOptions;
    warning?: PaletteColorOptions;
  }
  export interface Palette {
    common: CommonColors;
    type: PaletteType;
    contrastThreshold: number;
    tonalOffset: number;
    primary: PaletteColor;
    secondary: PaletteColor;
    error: PaletteColor;
    grey: Color;
    text: TypeText;
    divider: TypeDivider;
    action: TypeAction;
    background: TypeBackground;
    getContrastText: (background: string) => string;
    augmentColor: {
      (
        color: ColorPartial,
        mainShade?: number | string,
        lightShade?: number | string,
        darkShade?: number | string
      ): PaletteColor;
      (color: PaletteColorOptions): PaletteColor;
    };
  }
}
