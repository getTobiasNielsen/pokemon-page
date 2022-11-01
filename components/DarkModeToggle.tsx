import { Switch } from "@mantine/core";
import { useMantineColorScheme, createStyles } from "@mantine/core";
import { useTheme } from "next-themes";

const useStyles = createStyles((theme) => {
  const isDarkMode = theme.colorScheme === "dark" ? true : false;
  return {
    thumb: {
      backgroundColor: isDarkMode ? "#ffffff" : "#9abcd5",
    },
    track: {
      backgroundColor: isDarkMode ? "#8f9ba5" : "#ffffff",
      border: isDarkMode ? "2px solid #335e7f" : "2px solid #9abcd5",
      width: 25,
    },
  };
});

export default function DarkModeToggle() {
  const { classes } = useStyles();
  const { toggleColorScheme } = useMantineColorScheme();
  const { theme, setTheme } = useTheme();
  const darkModeIsEnabled = theme === "dark" ? true : false;

  const toggleDarkMode = () => {
    toggleColorScheme();
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div className="h-16 text-sm flex">
      <div className="pt-3 pr-2 dark:text-gray-400">Light Mode</div>
      <Switch
        size="xs"
        classNames={{
          thumb: classes.thumb,
          track: classes.track,
        }}
        color="lightgray"
        checked={darkModeIsEnabled}
        onClick={() => toggleDarkMode()}
      />
      <div className="pt-3 pl-2 text-gray-400 dark:text-white">Dark Mode</div>
    </div>
  );
}
