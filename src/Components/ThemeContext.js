import { createContext } from "react";

// コンテキストの準備
const ThemeContext = createContext({
  // 現在のモード
  mode: 'light',
  // モードを切り替えるためのハンドラー
  toggleMode: () => {}
});

export default ThemeContext;
