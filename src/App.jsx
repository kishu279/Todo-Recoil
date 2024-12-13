import { RecoilRoot } from "recoil";
import Todos from "./component/Todos.jsx";

export default function () {
  return (
    <>
      <RecoilRoot>
        <div className="display flex justify-center font-bold text-3xl mt-10">
          Hey
        </div>

        <div className="display flex justify-center">
          <Todos/>
        </div>
      </RecoilRoot>
    </>
  );
}
