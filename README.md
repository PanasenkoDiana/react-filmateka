# Filmateka Frontend  

Фронтенд створений для взаємодії користувачів із сайтом **Filmateka** — онлайн-платформи для перегляду фільмів.  
Користувачі можуть реєструватися, переглядати фільми, додавати їх до власної колекції та залишати рецензії.

# Зміст
#### [Учасники команди](#title1)
#### [Переваги](#title2)
#### [Технології](#title3)
#### [Використання](#title4)
#### [Структура](#title5)
#### [Основні Функції](#title6)
#### [Висновок](#title7)

## <a id="title1" style='color: black'>Учасники команди</a>
- Панасенко Діана / Panasenko Diana - Team lead 
>- [Github](https://github.com/PanasenkoDiana "Github")

- Фатуев Михайло / Fatuiev Mykhailo
>- [Github](https://github.com/silopho "Github")

- Зозуля Назар / Nazar Zozulya
>- [Github](https://github.com/Nazar-Zozulya "Github")

- Кошнарьов Данило / Koshnarev Danil
>- [Github](https://github.com/DanilKoshnarev "Github")

## <a id="title2" style='color: black'> Переваги проєкту </a>
1. Висока продуктивність  
2. Адаптивний дизайн  
3. Зручний UI/UX  
4. Легка інтеграція з бекендом  

## <a id="title3" style='color: black'>Технології
- **TypeScript**
- **Github**
- **JavaScript**
- **React**
- **HTML**
- **CSS**

## <a id="title4" style='color: black'> Як запустити проєкт </a>  

#### 1. Встановити додатки  
Node.js використовується у проєкті як середовище виконання JavaScript. Завантажте Node.js за посиланням:  
[https://nodejs.org/en/download](https://nodejs.org/en/download)  

Також рекомендовано завантажити редактор коду VSCode:  
[https://code.visualstudio.com/](https://code.visualstudio.com/)  

Після встановлення відкрийте консоль у редакторі коду та перевірте встановлення Node.js командою:  
> **```node -v```**  

Для перевірки встановлення менеджера пакетів npm використайте команду:  
> **```npm -v```**  

#### 2. Запуск проєкту (локально)  
Клонуємо проєкт з GitHub за допомогою команди:  
> **```git clone https://github.com/PanasenkoDiana/react-filmateka.git```**  

Переходимо до папки з проєктом:  
> **```cd react-filmateka```**  

Встановлюємо всі залежності:  
> **```npm i```**  

Запускаємо проєкт локально:  
> **```npm start```**  

#### 3. Запуск проєкту (віддалено)  
Копіюємо посилання на репозиторій з GitHub і в консолі пишемо:  
> **```git clone https://github.com/PanasenkoDiana/react-filmateka.git```**  

Створюємо віртуальне середовище для Node.js (опціонально, наприклад, за допомогою nvm):  
> **```nvm install 18```**  
> **```nvm use 18```**  

Далі переходимо до папки з проєктом:  
> **```cd react-filmateka```**  

У файлі `.env` вказуємо всі необхідні змінні середовища.  

Збираємо проєкт перед розгортанням:  
> **```npm run build```**  

На хостингу вказуємо шлях до папки `build` як кореневий каталог для сервера.  

Після цього проєкт буде доступний за віддаленим посиланням, яке надає хостинг-платформа.  

## <a id="title5" style='color: black'> Структура проєкту </a>  
### Файлова структура проєкту

```
react-filmateka/
├── public/                        # Статичні файли
├── src/                           # Основний вихідний код застосунку
│   ├── context/                   # Контексти React
│   │   ├── RecentlyViewedContext.tsx # Контекст для нещодавно переглянутих фільмів
│   │
│   ├── hooks/                     # Кастомні React-хуки
│   │   ├── useGenres.tsx          # Хук для жанрів
│   │   ├── useMovieById.tsx       # Хук для отримання фільму за ID
│   │   ├── useMovies.tsx          # Хук для списку фільмів
│   │   ├── usePersonById.tsx      # Хук для отримання особи за ID
│   │   ├── usePersons.tsx         # Хук для списку персон
│   │   ├── useUsers.tsx           # Хук для списку користувачів
│   │
│   ├── pages/                     # Сторінки застосунку
│   │   ├── AdminPage/             # Адмін-панель
│   │   │   ├── AdminPageComponents/  # Компоненти для адмін-сторінки
│   │   │   │   ├── Genres/           # Управління жанрами
│   │   │   │   │   ├── Genres.tsx    
│   │   │   │   │   ├── Genres.css    
│   │   │   │   │   ├── GenresModal.css  
│   │   │   │   ├── Movies/           # Управління фільмами
│   │   │   │   │   ├── Movies.tsx    
│   │   │   │   │   ├── Movies.css    
│   │   │   │   │   ├── MoviesModal.css  
│   │   │   │   ├── Users/            # Управління користувачами
│   │   │   │   │   ├── Users.tsx    
│   │   │   │   │   ├── Users.css    
│   │   │   ├── AdminPage.tsx       # Головний файл сторінки адмін-панелі
│   │   │   ├── AdminPage.css       
│   │   │
│   │   ├── Auth/                   # Сторінка авторизації
│   │   │   ├── Auth.tsx            
│   │   │   ├── Auth.css            
│   │   │
│   │   ├── Main/                   # Головна сторінка
│   │   │   ├── Main.tsx            
│   │   │   ├── Main.css            
│   │   │
│   │   ├── MoviePage/              # Сторінка фільму
│   │   │   ├── MoviePageComponents/  # Компоненти сторінки фільму
│   │   │   ├── MoviePage.tsx       
│   │   │   ├── MoviePage.css       
│   │   │
│   │   ├── MoviesPage/             # Сторінка списку фільмів
│   │   │   ├── MoviesPage.tsx      
│   │   │   ├── MoviesPage.css      
│   │   │
│   ├── types/                      # Глобальні типи TypeScript
│   │   ├── types.tsx               
│   │
│   ├── App.tsx                     # Головний компонент React
│   ├── index.tsx                   # Точка входу у застосунок
│
├── .gitignore                       # Файли та директорії, які ігнорує Git
├── package.json                     # Файл керування залежностями
├── tsconfig.json                     # Налаштування TypeScript
└── README.md                        # Документація проєкту
```
## <a id="title6" style='color: black'>Основні Функції</a>

## App.tsx

```tsx
// 📌 Імпорт основних модулів для маршрутизації
import { BrowserRouter, Routes, Route } from "react-router-dom";
// BrowserRouter - головний компонент, який обгортає весь застосунок для підтримки маршрутизації
// Routes - компонент, що містить список маршрутів
// Route - визначає окремий маршрут і його відповідний компонент

// 📌 Імпорт головного макету (загальні компоненти, такі як Header, Footer)
import { Layout } from './shared/Layout/Layout';

// 📌 Імпорт сторінок застосунку
import { Main } from './pages/Main/Main'; // Головна сторінка
import { MoviesPage } from './pages/MoviesPage/MoviesPage'; // Сторінка списку фільмів
import { MoviePage } from "./pages/MoviePage/MoviePage"; // Сторінка конкретного фільму

// 📌 Імпорт контексту для збереження переглянутих фільмів
import { RecentlyViewedProvider } from "./context/RecentlyViewedContext"; 

// 📌 Імпорт сторінок для окремих осіб (акторів)
import { PersonPage } from "./pages/PersonPage/PersonPage";

// 📌 Імпорт сторінок аутентифікації
import { Auth } from "./pages/Auth/Auth"; // Сторінка входу
import { Register } from "./pages/Register/Register"; // Сторінка реєстрації

// 📌 Імпорт адміністративної сторінки
import { AdminPage } from "./pages/AdminPage/AdminPage"; // Панель адміністратора

// 📌 Головний компонент застосунку
export function App() {
    return (
        // 🔹 Обгортаємо застосунок у провайдер контексту, щоб зберігати переглянуті фільми
        <RecentlyViewedProvider>  
            <BrowserRouter> {/* Головний компонент маршрутизації */}
                <Routes> {/* Визначаємо список маршрутів */}
                    <Route element={<Layout />}> {/* Використовуємо Layout як головний шаблон */}
                        
                        {/* 🔹 Головні маршрути */}
                        <Route path='/' element={<Main />} /> {/* Головна сторінка */}
                        <Route path='/login' element={<Auth />} /> {/* Сторінка входу */}
                        <Route path='/register' element={<Register />} /> {/* Сторінка реєстрації */}

                        {/* 🔹 Маршрути для фільмів */}
                        <Route path='/movies' element={<MoviesPage />} /> {/* Список фільмів */}
                        <Route path='/movie/:id' element={<MoviePage />} /> {/* Сторінка конкретного фільму */}

                        {/* 🔹 Маршрут для сторінки актора */}
                        <Route path='/person/:id' element={<PersonPage />} /> {/* Інформація про актора */}

                        {/* 🔹 Адміністративна панель */}
                        <Route path='/admin' element={<AdminPage />} /> {/* Доступ для адміністратора */}
                    </Route>
                </Routes>
            </BrowserRouter>
        </RecentlyViewedProvider>
    );
}


```

### `Main.tsx`

**Головна сторінка застосунку**

Файл Main.tsx є основною сторінкою застосунку Filmateka. Він відображає головний екран із ключовими секціями: нові фільми, топові фільми, рекомендації та нещодавно переглянуті.

#### **Основні імпорти:**
```tsx
import { Link } from 'react-router-dom';
import { useRecentlyViewed } from '../../context/RecentlyViewedContext';
import { useMovies } from '../../hooks/useMovies';
import { MovieCard } from '../../shared/MovieCard/MovieCard';
import './Main.css';
```
#### **RecentlyViewedContext** 

Контекст для зберігання нещодавно переглянутих фільмів, що зберігаються в `localStorage` (максимум 5 останніх).

- **`RecentlyViewedProvider`**: Компонент-постачальник, що зберігає список нещодавно переглянутих фільмів у стані `recentlyViewed` та синхронізує його з `localStorage`.
- **`addToRecentlyViewed`**: Додає фільм до списку нещодавно переглянутих, видаляючи дублікати та зберігаючи лише останні 5 фільмів.
- **`useRecentlyViewed`**: Кастомний хук для доступу до контексту, який надає список фільмів і функцію для додавання нових до списку.

 #### **useMovies** 

Кастомний хук для отримання списку фільмів через API.

- **`movies`**: Стан для збереження отриманих фільмів.
- **`isLoading`**: Стан для відображення процесу завантаження даних.
- **`error`**: Стан для збереження повідомлень про помилки, якщо вони виникають під час запиту.
- **`getMovies`**: Функція для отримання фільмів з API, обробляє успішні відповіді та помилки.
- **`useEffect`**: Викликає `getMovies` при першому рендері компонента для завантаження фільмів.
- **`refetch`**: Функція для повторного запиту фільмів.

Застосовується для завантаження та управління списком фільмів з API.

 `MovieCard` — компонент для відображення картки фільму.


#### **Обробка даних:**
```tsx
const { movies } = useMovies();
const { recentlyViewed } = useRecentlyViewed();

const moviesArray = Array.isArray(movies) ? movies : [];

const sortedMoviesByYear = [...moviesArray].sort((a, b) => b.releaseYear - a.releaseYear);
const lastFiveMovies = sortedMoviesByYear.slice(0, 5);

const sortedMoviesByRating = [...moviesArray]
  .filter(movie => typeof movie.rating === "number")
  .sort((a, b) => (b.rating ?? 0) - (a.rating ?? 0));
const topFiveMovies = sortedMoviesByRating.slice(0, 5);
```
- Відбирає останні 5 фільмів за роком випуску.
- Відбирає топ-5 фільмів за рейтингом.

#### **Головний інтерфейс:**
```tsx
return (
  <div className="main-container">
    <main>
      <section className="hero-section">
        <div className="hero-content">
          <h1>Filmateka</h1>
          <p>Місце, де кіно оживає не лише на екрані, а й у твоїх спогадах, відгуках та вподобаннях.</p>
          <Link to="/movies" className="start-button">Почнемо зараз!</Link>
        </div>
      </section>
```
- Головний заголовок та кнопка переходу до списку фільмів.

#### **Секції з фільмами:**
```tsx
<section className="movies-section">
  <div className="section-header">
    <h2>Новинки</h2>
    <Link to="/movies" className="see-all">{'>'}</Link>
  </div>
  <div className="movies-grid">
    {lastFiveMovies.map(movie => (
      <MovieCard key={movie.id} {...movie} />
    ))}
  </div>
</section>
```
- Відображення нових, топових та рекомендованих фільмів.
- Відображення нещодавно переглянутих фільмів.

#### **Стилізація:**
Файл `Main.css` містить стилі для головної сторінки, включаючи секції, сітку фільмів та кнопку переходу.



## Genres.tsx (Для сторінки адміністратора)

```tsx
// 📌 Імпорт необхідних хуків React
import { useState } from "react"; 

// 📌 Використання кастомного хука для отримання жанрів
import { useGenres } from "../../../../hooks/useGenres";

// 📌 Імпорт файлів стилів
import "./Genres.css";
import "./GenresModal.css";

// 📌 Головний компонент Genres для керування жанрами
export function Genres() {
    // Отримуємо дані про жанри через кастомний хук
    const { genres, isLoading, error, refetch } = useGenres();

    // Локальний стан для модального вікна
    const [isModalOpen, setIsModalOpen] = useState(false);
    
    // Локальний стан для збереження введених даних
    const [genreName, setGenreName] = useState("");
    const [genreDescription, setGenreDescription] = useState("");

    // Локальний стан для редагування жанру (null, якщо не редагуємо)
    const [editingGenreId, setEditingGenreId] = useState<number | null>(null);

    // 📌 Видалення жанру за ID
    const handleDeleteGenre = async (id: number) => {
        try {
            const response = await fetch(`http://localhost:8000/api/genres/${id}`, {
                method: "DELETE",
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch(); // Оновлення списку жанрів після видалення
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error deleting genre:", error);
            alert("Не вдалося видалити жанр");
        }
    };

    // 📌 Створення нового жанру
    const handleCreateGenre = async () => {
        if (!genreName) {
            alert("Будь ласка, заповніть назву жанру");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/api/genres", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: genreName,
                    description: genreDescription || "",
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch(); // Оновлення списку жанрів після додавання нового
                setIsModalOpen(false); // Закриваємо модальне вікно
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error creating genre:", error);
            alert("Не вдалося створити жанр");
        }
    };

    // 📌 Оновлення жанру
    const handleUpdateGenre = async () => {
        if (!genreName || !editingGenreId) {
            alert("Будь ласка, заповніть назву жанру");
            return;
        }

        try {
            const response = await fetch(`http://localhost:8000/api/genres/${editingGenreId}`, {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: genreName,
                    description: genreDescription || "",
                }),
            });

            const data = await response.json();

            if (data.status === "success") {
                refetch(); // Оновлення списку жанрів після редагування
                setIsModalOpen(false);
                setEditingGenreId(null); // Скидаємо ID редагованого жанру
            } else {
                alert("Помилка: " + data.message);
            }
        } catch (error) {
            console.error("Error updating genre:", error);
            alert("Не вдалося змінити жанр");
        }
    };

    // 📌 Обробка натискання на кнопку редагування жанру
    const handleEditClick = (genre: any) => {
        setGenreName(genre.name);
        setGenreDescription(genre.description || "");
        setEditingGenreId(genre.id);
        setIsModalOpen(true); // Відкриваємо модальне вікно
    };

    return (
        <div className="genresDiv">
            {/* Кнопка для відкриття модального вікна створення жанру */}
            <div className="createGenre">
                <button onClick={() => setIsModalOpen(true)}>Додати новий жанр</button>
            </div>

            {/* Відображення списку жанрів */}
            {isLoading === false ? (
                !error ? (
                    <div className="allGenres">
                        {genres.map((genre) => (
                            <div className="genreCard" key={genre.id}>
                                <div className="GenreInfo">
                                    <p>{genre.name}</p>
                                </div>
                                <div className="genreCardButtons">
                                    <button onClick={() => handleEditClick(genre)}>Змінити</button>
                                    <button onClick={() => handleDeleteGenre(genre.id)}>Видалити</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div>{error}</div>
                )
            ) : (
                <div>Завантаження...</div>
            )}

            {/* Модальне вікно для створення/редагування жанру */}
            {isModalOpen && (
                <div className="modalOverlay" onClick={() => setIsModalOpen(false)}>
                    <div className="modalContent" onClick={(e) => e.stopPropagation()}>
                        <button className="closeButton" onClick={() => setIsModalOpen(false)}>✖</button>
                        <h2>{editingGenreId ? "Змінити Жанр" : "Створити Жанр"}</h2>
                        <input
                            type="text"
                            placeholder="Назва жанру"
                            value={genreName}
                            onChange={(e) => setGenreName(e.target.value)}
                        />
                        <textarea
                            placeholder="Опис (Не обов'язково)"
                            value={genreDescription}
                            onChange={(e) => setGenreDescription(e.target.value)}
                        />
                        <button
                            className="createButton"
                            onClick={editingGenreId ? handleUpdateGenre : handleCreateGenre}
                        >
                            {editingGenreId ? "Змінити" : "Створити"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

```

## <a id="title7" style='color: black'>Висновок</a>  

Фронтенд для проєкту Filmateka був створений для зручного та інтуїтивно зрозумілого інтерфейсу користувача онлайн-платформи для перегляду фільмів. Це дозволяє користувачам ефективно взаємодіяти з контентом: переглядати фільми, отримувати рекомендації. Використання **React**, **TypeScript**, **Context API** та **Custom Hooks** дозволило створити динамічний та ефективний користувацький інтерфейс.

Розробка фронтенда допомогла нам значно покращити навички роботи з компонентною архітектурою React, а також вдосконалити роботу з асинхронними запитами, управлінням станом та інтеграцією з бекенд-сервісами. Проєкт Filmateka став важливим етапом у нашій кар'єрі, надаючи можливість застосувати нові технології та підходи в розробці веб-додатків, а також зрозуміти важливість безперервного вдосконалення користувацького досвіду.
