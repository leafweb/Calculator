/* Mushroom v1 */
// color transform
function MushroomGetHsl(color) {
   if (color.includes('rgb')) {
      var nums = color.substring(4, color.length - 1).split(",");
      var r = parseInt(nums[0]);
      var g = parseInt(nums[1]);
      var b = parseInt(nums[2]);
      r /= 255;
      g /= 255;
      b /= 255;
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
         h = s = 0;
      } else {
         var d = max - min;
         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
         switch (max) {
            case r:
               h = (g - b) / d + (g < b ? 6 : 0);
               break;
            case g:
               h = (b - r) / d + 2;
               break;
            case b:
               h = (r - g) / d + 4;
               break;
         }
         h /= 6;
      }
      return { 'h': Math.round(h * 360), 's': Math.round(s * 100), 'l': Math.round(l * 100) };
   }
   if (color.includes('#')) {
      if (color.length < 6) {
         color = color.replace(/^#(.)(.)(.)$/, '#$1$1$2$2$3$3');
      }
      var r = parseInt(color.substring(1, 3), 16) / 255;
      var g = parseInt(color.substring(3, 5), 16) / 255;
      var b = parseInt(color.substring(5, 7), 16) / 255;
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
         h = s = 0;
      } else {
         var d = max - min;
         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
         switch (max) {
            case r:
               h = (g - b) / d + (g < b ? 6 : 0);
               break;
            case g:
               h = (b - r) / d + 2;
               break;
            case b:
               h = (r - g) / d + 4;
               break;
         }
         h /= 6;
      }
      return { 'h': Math.round(h * 360), 's': Math.round(s * 100), 'l': Math.round(l * 100) };

   }
   if (!/\d/.test(color) && !color.includes('#')) {
      var css = {
         aliceblue: "#f0f8ff",
         antiquewhite: "#faebd7",
         aqua: "#00ffff",
         aquamarine: "#7fffd4",
         azure: "#f0ffff",
         beige: "#f5f5dc",
         bisque: "#ffe4c4",
         black: "#000000",
         blanchedalmond: "#ffebcd",
         blue: "#0000ff",
         blueviolet: "#8a2be2",
         brown: "#a52a2a",
         burlywood: "#deb887",
         cadetblue: "#5f9ea0",
         chartreuse: "#7fff00",
         chocolate: "#d2691e",
         coral: "#ff7f50",
         cornflowerblue: "#6495ed",
         cornsilk: "#fff8dc",
         crimson: "#dc143c",
         cyan: "#00ffff",
         darkblue: "#00008b",
         darkcyan: "#008b8b",
         darkgoldenrod: "#b8860b",
         darkgray: "#a9a9a9",
         darkgrey: "#a9a9a9",
         darkgreen: "#006400",
         darkkhaki: "#bdb76b",
         darkmagenta: "#8b008b",
         darkolivegreen: "#556b2f",
         darkorange: "#ff8c00",
         darkorchid: "#9932cc",
         darkred: "#8b0000",
         darksalmon: "#e9967a",
         darkseagreen: "#8fbc8f",
         darkslateblue: "#483d8b",
         darkslategray: "#2f4f4f",
         darkslategrey: "#2f4f4f",
         darkturquoise: "#00ced1",
         darkviolet: "#9400d3",
         deeppink: "#ff1493",
         deepskyblue: "#00bfff",
         dimgray: "#696969",
         dimgrey: "#696969",
         dodgerblue: "#1e90ff",
         firebrick: "#b22222",
         floralwhite: "#fffaf0",
         forestgreen: "#228b22",
         fuchsia: "#ff00ff",
         gainsboro: "#dcdcdc",
         ghostwhite: "#f8f8ff",
         gold: "#ffd700",
         goldenrod: "#daa520",
         gray: "#808080",
         grey: "#808080",
         green: "#008000",
         greenyellow: "#adff2f",
         honeydew: "#f0fff0",
         hotpink: "#ff69b4",
         indianred: "#cd5c5c",
         indigo: "#4b0082",
         ivory: "#fffff0",
         khaki: "#f0e68c",
         lavender: "#e6e6fa",
         lavenderblush: "#fff0f5",
         lawngreen: "#7cfc00",
         lemonchiffon: "#fffacd",
         lightblue: "#add8e6",
         lightcoral: "#f08080",
         lightcyan: "#e0ffff",
         lightgoldenrodyellow: "#fafad2",
         lightgray: "#d3d3d3",
         lightgrey: "#d3d3d3",
         lightgreen: "#90ee90",
         lightpink: "#ffb6c1",
         lightsalmon: "#ffa07a",
         lightseagreen: "#20b2aa",
         lightskyblue: "#87cefa",
         lightslategray: "#778899",
         lightslategrey: "#778899",
         lightsteelblue: "#b0c4de",
         lightyellow: "#ffffe0",
         lime: "#00ff00",
         limegreen: "#32cd32",
         linen: "#faf0e6",
         magenta: "#ff00ff",
         maroon: "#800000",
         mediumaquamarine: "#66cdaa",
         mediumblue: "#0000cd",
         mediumorchid: "#ba55d3",
         mediumpurple: "#9370d8",
         mediumseagreen: "#3cb371",
         mediumslateblue: "#7b68ee",
         mediumspringgreen: "#00fa9a",
         mediumturquoise: "#48d1cc",
         mediumvioletred: "#c71585",
         midnightblue: "#191970",
         mintcream: "#f5fffa",
         mistyrose: "#ffe4e1",
         moccasin: "#ffe4b5",
         navajowhite: "#ffdead",
         navy: "#000080",
         oldlace: "#fdf5e6",
         olive: "#808000",
         olivedrab: "#6b8e23",
         orange: "#ffa500",
         orangered: "#ff4500",
         orchid: "#da70d6",
         palegoldenrod: "#eee8aa",
         palegreen: "#98fb98",
         paleturquoise: "#afeeee",
         palevioletred: "#d87093",
         papayawhip: "#ffefd5",
         peachpuff: "#ffdab9",
         peru: "#cd853f",
         pink: "#ffc0cb",
         plum: "#dda0dd",
         powderblue: "#b0e0e6",
         purple: "#800080",
         rebeccapurple: "#663399",
         red: "#ff0000",
         rosybrown: "#bc8f8f",
         royalblue: "#4169e1",
         saddlebrown: "#8b4513",
         salmon: "#fa8072",
         sandybrown: "#f4a460",
         seagreen: "#2e8b57",
         seashell: "#fff5ee",
         sienna: "#a0522d",
         silver: "#c0c0c0",
         skyblue: "#87ceeb",
         slateblue: "#6a5acd",
         slategray: "#708090",
         slategrey: "#708090",
         snow: "#fffafa",
         springgreen: "#00ff7f",
         steelblue: "#4682b4",
         tan: "#d2b48c",
         teal: "#008080",
         thistle: "#d8bfd8",
         tomato: "#ff6347",
         turquoise: "#40e0d0",
         violet: "#ee82ee",
         wheat: "#f5deb3",
         white: "#ffffff",
         whitesmoke: "#f5f5f5",
         yellow: "#ffff00",
         yellowgreen: "#9acd32"
      };
      var hex = css[color.toLowerCase()];
      var r = parseInt(hex.substring(1, 3), 16) / 255;
      var g = parseInt(hex.substring(3, 5), 16) / 255;
      var b = parseInt(hex.substring(5, 7), 16) / 255;
      var max = Math.max(r, g, b);
      var min = Math.min(r, g, b);
      var h, s, l = (max + min) / 2;
      if (max == min) {
         h = s = 0;
      } else {
         var d = max - min;
         s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
         switch (max) {
            case r:
               h = (g - b) / d + (g < b ? 6 : 0);
               break;
            case g:
               h = (b - r) / d + 2;
               break;
            case b:
               h = (r - g) / d + 4;
               break;
         }
         h /= 6;
      }
      return { 'h': Math.round(h * 360), 's': Math.round(s * 100), 'l': Math.round(l * 100) }
   }
   if (color.includes('hsl')) {
      var nums = color.substring(4, color.length - 1).split(",");
      var h = parseInt(nums[0]);
      var s = parseInt(nums[1]);
      var l = parseInt(nums[2]);
      return { 'h': h, 's': s, 'l': l };
   }
}
function MushroomHslToHex(hsl) {
   var nums = hsl.substring(4, hsl.length - 1).split(",");
   var h = parseInt(nums[0]);
   var s = parseInt(nums[1]);
   var l = parseInt(nums[2]);
   h /= 360;
   s /= 100;
   l /= 100;
   let r, g, b;
   if (s === 0) {
      r = g = b = l;
   } else {
      const hue2rgb = (p, q, t) => {
         if (t < 0) t += 1;
         if (t > 1) t -= 1;
         if (t < 1 / 6) return p + (q - p) * 6 * t;
         if (t < 1 / 2) return q;
         if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
         return p;
      };
      const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      const p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
   }
   const toHex = (x) => {
      const hex = Math.round(x * 255).toString(16);
      return hex.length === 1 ? '0' + hex : hex;
   };
   return `#${toHex(r)}${toHex(g)}${toHex(b)}`;

}
// creat theme color object
function MushroomCreatThemeColor(h, s, darkmode) {
   var themeColor;
   if (!darkmode) {
      themeColor = {
         'primary': MushroomHslToHex(`hsl(${h},${s}%,40%)`),
         'on-primary': MushroomHslToHex(`hsl(${h},${s}%,100%)`),
         'primary-container': MushroomHslToHex(`hsl(${h},${s}%,85%)`),
         'on-primary-container': MushroomHslToHex(`hsl(${h},${s}%,10%)`),
         'secondary': MushroomHslToHex(`hsl(${h-40},${s}%,40%)`),
         'on-secondary': MushroomHslToHex(`hsl(${h-40},${s}%,100%)`),
         'secondary-container': MushroomHslToHex(`hsl(${h-40},${s}%,85%)`),
         'on-secondary-container': MushroomHslToHex(`hsl(${h-40},${s}%,10%)`),
         'tertiary': MushroomHslToHex(`hsl(${h+40},${s}%,40%)`),
         'on-tertiary': MushroomHslToHex(`hsl(${h+40},${s}%,100%)`),
         'tertiary-container': MushroomHslToHex(`hsl(${h+40},${s}%,85%)`),
         'on-tertiary-container': MushroomHslToHex(`hsl(${h+40},${s}%,10%)`),
         'error': MushroomHslToHex(`hsl(0,100%,40%)`),
         'on-error': MushroomHslToHex(`hsl(0,100%,100%)`),
         'error-container': MushroomHslToHex(`hsl(0,100%,85%)`),
         'on-error-container': MushroomHslToHex(`hsl(0,100%,10%)`),
         'background': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,100%)`),
         'on-background': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,0%)`),
         'surface': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,90%)`),
         'on-surface': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,10%)`),
         'surface-variant': MushroomHslToHex(`hsl(${h},${Math.round(s/2)}%,80%)`),
         'on-surface-variant': MushroomHslToHex(`hsl(${h},${Math.round(s/2)}%,20%)`),
         'outline': MushroomHslToHex(`hsl(${h},${Math.round(s/3)},60%)`)
      }
   } else {
      themeColor = {
         'primary': MushroomHslToHex(`hsl(${h},${s}%,80%)`),
         'on-primary': MushroomHslToHex(`hsl(${h},${s}%,20%)`),
         'primary-container': MushroomHslToHex(`hsl(${h},${s}%,30%)`),
         'on-primary-container': MushroomHslToHex(`hsl(${h},${s}%,90%)`),
         'secondary': MushroomHslToHex(`hsl(${h-40},${s}%,80%)`),
         'on-secondary': MushroomHslToHex(`hsl(${h-40},${s}%,20%)`),
         'secondary-container': MushroomHslToHex(`hsl(${h-40},${s}%,30%)`),
         'on-secondary-container': MushroomHslToHex(`hsl(${h-40},${s}%,90%)`),
         'tertiary': MushroomHslToHex(`hsl(${h+40},${s}%,80%)`),
         'on-tertiary': MushroomHslToHex(`hsl(${h+40},${s}%,20%)`),
         'tertiary-container': MushroomHslToHex(`hsl(${h+40},${s}%,30%)`),
         'on-tertiary-container': MushroomHslToHex(`hsl(${h+40},${s}%,90%)`),
         'error': MushroomHslToHex(`hsl(0,100%,80%)`),
         'on-error': MushroomHslToHex(`hsl(0,100%,20%)`),
         'error-container': MushroomHslToHex(`hsl(0,100%,30%)`),
         'on-error-container': MushroomHslToHex(`hsl(0,100%,90%)`),
         'background': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,10%)`),
         'on-background': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,90%)`),
         'surface': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,15%)`),
         'on-surface': MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,80%)`),
         'surface-variant': MushroomHslToHex(`hsl(${h},${Math.round(s/2)}%,30%)`),
         'on-surface-variant': MushroomHslToHex(`hsl(${h},${Math.round(s/2)}%,80%)`),
         'outline': MushroomHslToHex(`hsl(${h},${Math.round(s/3)},40%)`)
      }
   }
   return themeColor;
}
// palette
function MushroomPalette(color, lightness) {
   var palette = {
      'primary': {},
      'secondary': {},
      'tertiary': {},
      'error': {},
      'neutral': {},
      'neutral-variant': {}
   }
   var [h, s] = [MushroomGetHsl(color).h, MushroomGetHsl(color).s]
   for (i in lightness) {
      palette.primary['primary-' + lightness[i]] = MushroomHslToHex(`hsl(${h},${s}%,${lightness[i]}%)`);
      palette.secondary['secondary-' + lightness[i]] = MushroomHslToHex(`hsl(${h-40},${s}%,${lightness[i]}%)`);
      palette.tertiary['tertiary-' + lightness[i]] = MushroomHslToHex(`hsl(${h+40},${s}%,${lightness[i]}%)`);
      palette.error['error-' + lightness[i]] = MushroomHslToHex(`hsl(0,100%,${lightness[i]}%)`);
      palette.neutral['neutral-' + lightness[i]] = MushroomHslToHex(`hsl(${h},${Math.round(s/3)}%,${lightness[i]}%)`);
      palette['neutral-variant']['neutral-variant-' + lightness[i]] = MushroomHslToHex(`hsl(${h},${Math.round(s/2)}%,${lightness[i]}%)`);
   }
   return palette;
}
// add style
function MushroomAddStyle(themeColor, style) {
      var keys = Object.keys(themeColor);
      var values = Object.values(themeColor);
      var css = ':root{\n';
      for (i in keys) {
         css += `   --${keys[i]}: ${values[i]};\n`
      }
      css += '}';
      style.innerHTML = css;
      return css;
}
// add palette style
function MushroomAddPaletteStyle(palette, paletteStyle) {
   var p = ':root{\n';
   for (i in palette) {
      for (j in palette[i]) {
         p += `   --${j}: ${palette[i][j]};\n`;
      }
   }
   p += '}';
   paletteStyle.innerHTML = p;
   return p;
}
// mushroom
function Mushroom(color = 'royalblue', darkMode = false) {
   // theme color
   var style = document.querySelector('#MUSHROOM-STYLE');
   var paletteStyle = document.querySelector('#MUSHROOM-PALETTE-STYLE');
   if (!style) {
      var style = document.createElement('style');
      style.id = 'MUSHROOM-STYLE'
      var head = document.querySelector('head');
      head.appendChild(style);
   }
   if (!paletteStyle) {
      var paletteStyle = document.createElement('style');
      paletteStyle.id = 'MUSHROOM-PALETTE-STYLE'
      var head = document.querySelector('head');
      head.appendChild(paletteStyle);
   }
   var hue = MushroomGetHsl(color).h;
   var saturation = MushroomGetHsl(color).s;
   var themeColor = MushroomCreatThemeColor(hue, saturation, darkMode);
   var lightness = [0,5,10,15,20,25,30,35,40,45,50,55,60,65,70,75,80,85,90,95,100];
   var palette = MushroomPalette(color, lightness);
   var mushroomStyle = MushroomAddStyle(themeColor, style);
   var mushroomPaletteStyle = MushroomAddPaletteStyle(palette, paletteStyle);
   return {
      'color': color,
      'darkMode': darkMode,
      'themeColor': themeColor,
      'lightness': lightness,
      'palette': palette,
      'mushroomStyle': mushroomStyle,
      'mushroomPaletteStyle': mushroomPaletteStyle,
      'hue': hue,
      'saturation': saturation,
      'version': '1'
   }
}