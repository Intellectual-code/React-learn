// Импортируем хук useState из библиотеки React
// useState позволяет компоненту иметь собственное состояние (данные), 
// которое сохраняется между перерисовками компонента
import { useState } from "react";

// Подключаем файл стилей CSS для этого компонента
import "./App.css"

// Импортируем локальные изображения
// Сборщик (Webpack/Vite) автоматически обработает эти пути и создаст URL для картинок
import one from "./1.png"
import two from "./2.png"
import menu from "./menu.png"
import omenu from "./omenu.png"

// Объявляем функциональный компонент App
function App() {
  
  // ========== СОСТОЯНИЯ (STATE) ==========
  
  // Состояние для счетчика
  // count - текущее значение (начальное: 0)
  // setCount - функция для изменения значения
  const [count, setCount] = useState(0)
  
  // Состояние для имени студента
  // Изначально "Ivan" (строка, которая в логическом контексте = true)
  const [name, setName] = useState("Ivan")
  
  // Состояние для названия автомобиля
  // Изначально "Mers" (строка, которая в логическом контексте = true)
  const [car, setCar] = useState("Mers")
  
  // Состояние для хранения имени CSS-класса
  // Изначально "block_red"
  const [class1, setClass1] = useState("block_red")
  
  // Состояние для хранения ссылки на изображение
  // Изначально импортированная картинка one
  const [image, setImage] = useState(one)
  
  // Состояние для ширины картинки (в процентах)
  const [size, setSize] = useState(5)
  
  // Состояние для скругления углов картинки (border-radius)
  const [krug, setKrug] = useState(20)
  
  // Состояние для прозрачности картинки (opacity)
  // Начальное значение undefined (не указано)
  const [hide, setHide] = useState()
  
  // Булево состояние для управления видимостью выпадающего списка
  // false = список скрыт, true = список показан
  const [ListBlock, setListBlock] = useState(false)

  // ========== РАЗМЕТКА КОМПОНЕНТА (JSX) ==========
  
  return (
    // Корневой div с классом "App"
    // В React вместо HTML-атрибута "class" используется "className"
    <div className="App">
      
      {/* Заголовок */}
      <h2>Хук UseState</h2>
      
      {/* Блок счетчика */}
      <p>
        Счетчик: 
        {/* Кнопка увеличения счетчика */}
        {/* onClick - обработчик клика, вызывает стрелочную функцию */}
        {/* setCount(count+1) - увеличивает значение count на 1 */}
        <button onClick={()=> setCount(count+1)}>+</button> 
        
        {/* Выводим текущее значение счетчика */}
        {/* Фигурные скобки {} позволяют вставить JavaScript-выражение в JSX */}
        {count} 
        
        {/* Кнопка уменьшения счетчика */}
        <button onClick={()=> setCount(count-1)}>-</button>
      </p>
      
      {/* Блок имени студента */}
      {/* Используем тернарный оператор: условие ? значение1 : значение2 */}
      {/* Если name истинно (true или непустая строка), показываем "Osman", иначе "Ivan" */}
      <h2>
        Имя студента:{name ? "Osman" : "Ivan"}
        {/* Кнопка переключения имени */}
        {/* !name - логическое НЕ, инвертирует значение */}
        {/* Строка "Ivan" (true) -> false, false -> true */}
        <button onClick={()=> setName(!name)}>изменить</button> 
      </h2>
      
      {/* Блок автомобиля */}
      {/* Работает аналогично блоку имени */}
      <h2>
        Имя Автомобиля:{car ? "Mers" : "Bmw"}
        <button onClick={()=> setCar(!car)}>изменить</button> 
      </h2>
      
      {/* Текст-пояснение */}
      Изменяем стили через UseState
      
      {/* Div с динамическим классом */}
      {/* className={class1} - подставляет значение из состояния */}
      {/* Изначально это будет className="block_red" */}
      <div className={class1}>
      </div>
      
      {/* Кнопка для изменения класса */}
      {/* setClass1 переключает между "block_red" и "block_black" */}
      <h2>
        <button onClick={()=> setClass1(class1 ? "block_red" : "block_black")}>
          изменить класс
        </button> 
      </h2>
      
      {/* Картинка с динамическими стилями */}
      {/* src={image} - ссылка на картинку из состояния */}
      {/* style={{...}} - inline-стили в React */}
      {/* Внешние {} - вставка JavaScript, внутренние {} - сам объект стилей */}
      {/* width: size - ширина картинки */}
      {/* borderRadius: krug - скругление углов */}
      {/* opacity: hide - прозрачность (от 0 до 1) */}
      <img src={image} style={{width: size, borderRadius: krug, opacity: hide}}/>
      
      {/* Кнопка смены картинки на two */}
      <button onClick={()=> setImage(two)}>изменить картинку</button>
      
      {/* Кнопки для изменения ширины картинки */}
      {/* Каждая кнопка устанавливает фиксированное значение для size */}
      <button onClick={()=> setSize(10)}>10%</button>
      <button onClick={()=> setSize(20)}>20%</button>
      <button onClick={()=> setSize(30)}>30%</button>
      <button onClick={()=> setSize(40)}>40%</button>
      <button onClick={()=> setSize(50)}>50%</button>
      <button onClick={()=> setSize(60)}>60%</button>
      <button onClick={()=> setSize(70)}>70%</button>
      <button onClick={()=> setSize(80)}>80%</button>
      <button onClick={()=> setSize(90)}>90%</button>
      <button onClick={()=> setSize(100)}>100%</button>
      
      {/* Кнопка для скругления углов (делает картинку круглой) */}
      <button onClick={()=> setKrug(100)}>krug</button>
      
      {/* Кнопки управления прозрачностью */}
      {/* setHide(0) - полностью прозрачная (скрыта) */}
      {/* setHide(100) - в CSS opacity должен быть от 0 до 1, не до 100 */}
      <button onClick={()=> setHide(0)}>show</button>
      <button onClick={()=> setHide(100)}>hide</button>
      
      {/* Пустой div (можно удалить) */}
      <div>
      </div>
      
      {/* Заголовок-кнопка для выпадающего списка */}
      {/* onClick переключает ListBlock между true и false */}
      <h2 onClick={()=> setListBlock(!ListBlock)}>
        Выпадающий список 
        {/* Картинка-стрелочка меняется в зависимости от состояния списка */}
        {/* Если ListBlock=true (открыт), показываем menu */}
        {/* Если ListBlock=false (закрыт), показываем omenu */}
        <img src={ListBlock ? menu : omenu} style={{width: 30}}/>
      </h2>
      
      {/* Условный рендеринг списка */}
      {/* Если ListBlock=true, показываем div со списком */}
      {/* Если ListBlock=false, показываем пустую строку (ничего не рендерится) */}
      {ListBlock ? (
        <div className="list_block">
          <a href="#">ананас</a>
          <br></br>
          <a href="#">яблоко</a>
          <br></br>
          <a href="#">апельсин</a>
          <br></br>
          <a href="#">мандарин</a>
          <br></br>
          <a href="#">арбуз</a>
          <br></br>
          <a href="#">вишня</a>
          <br></br>
          <a href="#">слива</a>
          <br></br>
          <a href="#">персик</a>
          <br></br>
          <a href="#">абрикос</a>
        </div>
      ) : ( "")}

    </div>
  );
}

// Экспортируем компонент по умолчанию
// Это позволяет импортировать его в других файлах (например, в index.js)
export default App;