import Board from "./Board";
import imgEl from "./imgElement";

// Задаем размер доски
const sizeBoard = 4;

// Создаем объект доски
const board = new Board(sizeBoard);

// Инициализируем доску
board.init();

// Инициализируем переменную для хранения текущей ячейки
let cellEl = null;

// Устанавливаем интервал
setInterval(() => {
  // Инициализируем переменную для новой ячейки
  let newCellEl;

  // Генерируем случайный индекс для выбора новой ячейки
  do {
    newCellEl = board.cells[Math.floor(Math.random() * board.cells.length)];
  } while (newCellEl === cellEl); // Повторяем генерацию, пока не получим новую ячейку

  // Помещаем изображение (imgEl) в новую ячейку
  newCellEl.appendChild(imgEl);

  // Обновляем текущую ячейку
  cellEl = newCellEl;
}, 2000);
