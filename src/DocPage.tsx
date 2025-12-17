import ThirdPage from "./ThirdPage.tsx";
import {useState} from "react";

const DocPage = () => {
  const [state, setState] = useState<boolean>(false);

  const onPageChange = (): void => {
    setState(true);
  }

  return (
    <div className="">
      {state ?
        <ThirdPage /> : <img onClick={onPageChange} src="/images/doc-tunduk.png"/>
      }
    </div>
  );
};

export default DocPage;
