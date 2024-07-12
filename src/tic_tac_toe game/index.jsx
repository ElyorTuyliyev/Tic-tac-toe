import { useLocation } from "react-router-dom";
import Cell from "./components/box";
import "./style.css";
function Game() {
  const { pathname } = useLocation();
  const cell = [
    {
      id: "1",
    },
    {
      id: "2",
    },
    {
      id: "3",
    },
    {
      id: "4",
    },
    {
      id: "5",
    },
    {
      id: "6",
    },
    {
      id: "7",
    },
    {
      id: "8",
    },
    {
      id: "9",
    },
  ];
  {
    console.log(cell[1].id);
  }
  return (
    <>
      <div className="game__wrapper">
        {cell.map((item) => (
          <Cell key={item.id} />
        ))}
      </div>
    </>
  );
}

export default Game;
