import { useState } from 'react';
import { SyntaxThemeType } from 'react-ipynb-renderer';
import dynamic from 'next/dynamic';
const IpynbRenderer = dynamic(() => import('react-ipynb-renderer').then((mod) => mod.IpynbRenderer), {ssr: false});

// Jupyter theme
import "react-ipynb-renderer/dist/styles/default.css";
// import ipynb file as json
import ipynb from "./test.json";

export default function App () {
  const [theme, setTheme] = useState<SyntaxThemeType>('atomDark');
  return (<>
    <div style={{height: 50}}>
      Syntax theme: <select value={theme} onChange={(e) => setTheme(e.target.value as SyntaxThemeType)}>
      {themes.map((theme) => (
        <option key={theme} value={theme}>{theme}</option>
      ))}
    </select>
    </div>
    <IpynbRenderer ipynb={ipynb} syntaxTheme={theme} />
  </>);
};

const themes: SyntaxThemeType[] = [
  'atomDark',
  'cb',
  'coy',
  'darcula',
  'dark',
  'duotoneDark',
  'duotoneEarth',
  'duotoneForest',
  'duotoneLight',
  'duotoneSea',
  'duotoneSpace',
  'funky',
  'ghcolors',
  'hopscotch',
  'okaidia',
  'pojoaque',
  'prism',
  'solarizedlight',
  'tomorrow',
  'twilight',
  'vscDarkPlus',
  'xonokai',
];
