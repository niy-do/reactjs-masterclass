# 프로젝트 개요

Nomad Coder의 강의 React마스터 클래스 강의 실습 프로젝트

## 프로젝트 설치 모듈

1. styled-components  
   `npm i styled-components`  
   `npm i --save-dev @types/styled-components`

2. Dragable UI 모듈 설치  
   `npm i --save react-beautiful-dnd`  
   `npm i --save @types/react-beautiful-dnd`

   - react-beautiful-dnd 모듈은 react 18버전은 아직 지원하지 않음.

3. Recoil  
   `npm i recoil`

   - https://recoiljs.org/ko/

### Dragable 사용하기.(react-beautiful-dnd)

1. Dragable 사용하기 위해서는 그래그 가능한 영역을 <DragDropContext>로 감싸줘야함.
2. 그 안에 <Droppable> 태그로 만든 영역들이 드래그가 가능함.

   - <Droppable> 필드는 아래와 같은 props를 하위 컴포넌트에 전달해줌.
     - provided {
       innerRef,
       droppableProps,
       dragHandleProps
       }

3. ex)

```javascript
<DragDropContext onDragEnd={onDragEnd}>
  <div>
    <Droppable droppableId="one">
      {(magic) => (
        <ul ref={magic.innerRef} {...magic.droppableProps}>
          <Draggable draggableId="first" index={0}>
            {(magic) => (
              <li
                ref={magic.innerRef}
                {...magic.dragHandleProps}
                {...magic.draggableProps}
              >
                🔥 One
              </li>
            )}
          </Draggable>
          <Draggable draggableId="second" index={1}>
            {(magic) => (
              <li
                ref={magic.innerRef}
                {...magic.dragHandleProps}
                {...magic.draggableProps}
              >
                🔥 Two
              </li>
            )}
          </Draggable>
        </ul>
      )}
    </Droppable>
  </div>
</DragDropContext>
```
