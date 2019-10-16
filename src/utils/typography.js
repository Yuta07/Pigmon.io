import Typography from 'typography';
import githubTheme from 'typography-theme-github';

githubTheme.overrideThemeStyles = () => ({});

delete githubTheme.googleFonts;

const typography = new Typography(githubTheme);

// Hot reload typography in development.
if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles();
}

export const { scale, rhythm, options } = typography;
export default typography;
