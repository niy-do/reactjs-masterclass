import { useRecoilState } from "recoil";
import { IRecoilState, recoilState } from "./atoms/atoms";
import RecoilSlave from "./RecoilSlave";

const RecoilMaster = () => {
  const [recoilValue, setRecoilValue] =
    useRecoilState<IRecoilState>(recoilState);

  const onClickMasterClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = event;

    const newValue: IRecoilState = {
      master: value,
      slave: recoilValue.slave,
    };

    setRecoilValue(newValue);
  };

  const onClickSlaveClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const {
      currentTarget: { value },
    } = event;

    const newValue: IRecoilState = {
      master: recoilValue.master,
      slave: value,
    };

    setRecoilValue(newValue);
  };

  const onClickMasterSlaveClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    const {
      currentTarget: { value },
    } = event;

    const newValue: IRecoilState = {
      master: value,
      slave: value,
    };

    setRecoilValue(newValue);
  };

  return (
    <>
      <button value="master change only" onClick={onClickMasterClick}>
        Master state change
      </button>
      &nbsp;
      <button value="slave change only" onClick={onClickSlaveClick}>
        Slave state change
      </button>
      &nbsp;
      <button value="master/slave change" onClick={onClickMasterSlaveClick}>
        Master/Slave state change
      </button>
      <hr />
      <div>
        <h1>RecoilMaster Recoil state : {recoilValue.master}</h1>
      </div>
      <RecoilSlave />
    </>
  );
};

export default RecoilMaster;
