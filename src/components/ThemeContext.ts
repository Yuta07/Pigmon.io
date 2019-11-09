import { createContext } from 'react';

type ThemeType = 'light' | 'dark';

const Theme: ThemeType = 'light';

export const ThemeContext = createContext<ThemeType>(Theme); // theme context
