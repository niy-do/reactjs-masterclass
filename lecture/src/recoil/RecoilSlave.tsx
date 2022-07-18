import { useRecoilValue } from "recoil";
import { recoilState } from "./atoms/atoms";

const RecoilSlave = () => {
  const { slave } = useRecoilValue(recoilState);
  return <div>slave state : {slave}</div>;
};

export default RecoilSlave;
