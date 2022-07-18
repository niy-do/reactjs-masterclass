import {
  DragDropContext,
  Droppable,
  Draggable,
  DropResult,
} from "react-beautiful-dnd";
import { useRecoilState } from "recoil";
import styled from "styled-components";
import { toDoState } from "./atoms";
import Board from "./Board";
import DragabbleCard from "./DragabbleCard";

const Wrapper = styled.div`
  display: flex;
  max-width: 680px;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const Boards = styled.div`
  display: grid;
  width: 100%;
  gap: 10px;
  grid-template-columns: repeat(3, 1fr);
`;

function App() {
  const [allBoards, setAllBoards] = useRecoilState(toDoState);

  const onDragEnd = ({ destination, source, draggableId }: DropResult) => {
    if (!destination) return;

    if (source.droppableId === destination.droppableId) {
      setAllBoards((allBoards) => {
        const boardCopy = [...allBoards[destination.droppableId]];
        const taskObj = boardCopy.splice(source.index, 1);
        boardCopy.splice(destination.index, 0, taskObj[0]);

        return {
          ...allBoards,
          [destination.droppableId]: boardCopy,
        };
      });
    } else {
      setAllBoards((allBoards) => {
        const sourceCopy = [...allBoards[source.droppableId]];
        const destinationCopy = [...allBoards[destination.droppableId]];
        const taskObj = sourceCopy.splice(source.index, 1);
        destinationCopy.splice(destination.index, 0, taskObj[0]);

        return {
          ...allBoards,
          [source.droppableId]: sourceCopy,
          [destination.droppableId]: destinationCopy,
        };
      });
    }
  };
  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <Wrapper>
        <Boards>
          {Object.keys(allBoards).map((boardId) => (
            <Board key={boardId} toDos={allBoards[boardId]} boardId={boardId} />
          ))}
        </Boards>
      </Wrapper>
    </DragDropContext>
  );
}
export default App;
