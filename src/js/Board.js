export default class Board {
  // Конструктор класса, принимающий размер доски
  constructor(size) {
    // Устанавливаем размер доски
    this.size = size;

    // Получаем элемент доски из DOM по атрибуту data-id
    this.boardEl = document.querySelector("[data-id=board]");
  }

  // Метод инициализации доски
  init() {
    // Создаем ячейки доски в количестве, равном квадрату размера доски
    for (let i = 0; i < Math.pow(this.size, 2); i += 1) {
      // Создаем элемент ячейки
      const cellEl = document.createElement("div");

      // Добавляем класс "cell" к элементу ячейки
      cellEl.classList.add("cell");

      // Добавляем созданную ячейку к элементу доски
      this.boardEl.appendChild(cellEl);
    }

    // Преобразуем коллекцию элементов доски в массив и сохраняем его в свойстве cells
    this.cells = Array.from(this.boardEl.children);
  }
}
