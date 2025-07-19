const isNative = Boolean(process.env.NATIVEWIND_OS);

export const {
  hairlineWidth,
  platformSelect,
  pixelScaleSelect,
  fontScaleSelect,
  pixelScale,
  fontScale,
  roundToNearestPixel,
  platformColor,
  getPixelSizeForLayoutSize,
} = isNative
  ? require("@alula/react-native-css-interop/css-to-rn/functions")
  : require("@alula/react-native-css-interop/css-to-rn/functions-web");
