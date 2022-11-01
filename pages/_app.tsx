import type { AppProps } from "next/app";
import { useState } from "react";
import { GetServerSidePropsContext } from "next";
import "../styles/globals.css";
import { getCookie, setCookie } from "cookies-next";
import {
  MantineProvider,
  ColorScheme,
  ColorSchemeProvider,
} from "@mantine/core";
import { ThemeProvider } from "next-themes";

export default function App(props: AppProps & { colorScheme: ColorScheme }) {
  const { Component, pageProps } = props;
  const [colorScheme, setColorScheme] = useState<ColorScheme>(
    props.colorScheme
  );

  const toggleColorScheme = (value?: ColorScheme) => {
    const nextColorScheme =
      value || (colorScheme === "dark" ? "light" : "dark");
    setColorScheme(nextColorScheme);
    // when color scheme is updated save it to cookie
    setCookie("mantine-color-scheme", nextColorScheme, {
      maxAge: 60 * 60 * 24 * 30,
    });
  };

  return (
    <ColorSchemeProvider
      colorScheme={colorScheme}
      toggleColorScheme={toggleColorScheme}
    >
      <MantineProvider
        theme={{
          colorScheme,
          colors: {
            // override dark colors to change them for all mantine components
            // kinda regretting using it over something like daisyui
            dark: [
              "#8b8585", // select field text color
              "#acaebf",
              "#8c8fa3",
              "#8b8585", // search field text color
              "#4d4f66",
              "#34354a",
              "#4b4343", // #4b4343 this is the background color value of the mantine dark mode
              "#1d1e30",
              "#0c0d21",
              "#01010a",
            ],
          },
        }}
      >
        <ThemeProvider attribute="class">
          <Component {...pageProps} />
        </ThemeProvider>
      </MantineProvider>
    </ColorSchemeProvider>
  );
}

App.getInitialProps = ({ ctx }: { ctx: GetServerSidePropsContext }) => {
  const colorScheme = getCookie("mantine-color-scheme", ctx) || "light";
  return {
    colorScheme,
  };
};
