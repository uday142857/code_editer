// import {extendTheme} from "@chakra-ui/theme-utils"

// const theme = extendTheme({
//   config: {
//     initialColorMode: "dark",
//     useSystemColorMode: false,
//   },
// });
// export default theme;


import { extendTheme } from "@chakra-ui/theme-utils";

const config = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

const theme = extendTheme({ config });

export default theme;