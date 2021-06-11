import { useEffect, useState } from 'react';
import { setToLS, getFromLS } from '../utils/local-storage';
//Loads Theme from local storage using hooks
//Creds to https://css-tricks.com/theming-and-theme-switching-with-react-and-styled-components/
export const useTheme = () => {
    const themes = getFromLS('allThemes');
    const [theme, setTheme] = useState(themes.data.light);
    const [themeLoaded, setThemeLoaded] = useState(false);

    const setMode = mode => {
        setToLS('theme', mode)
        setTheme(mode);
    };

    useEffect(() =>{
        const localTheme = getFromLS('theme');
        localTheme ? setTheme(localTheme) : setTheme(themes.data.light);
        setThemeLoaded(true);
    }, []);

    return { theme, themeLoaded, setMode };
};