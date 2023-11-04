//Context API를 사용하기 위해 react에서 제공하는 createContext를 import 해와야 한다.
import { createContext } from "react";

// MediaQueryContext라는 이름으로 Context를 만들어준다. 초기값은 null로 설정해주며 해당 값은 App.js에서 넣어준다.
export const MediaQueryContext = createContext(null);
