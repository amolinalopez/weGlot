import { useState } from "react";
import "./App.css";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="App">
      <header className="App-header">
        <h1>Bienvenue à la Librairie NextPage</h1>
        <p>Votre guichet unique pour tous vos besoins de lecture.</p>
      </header>
      <main>
        <section className="search-section">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Recherchez des livres, auteurs ou genres"
          />
          <button onClick={() => console.log("Rechercher :", searchQuery)}>
            Rechercher
          </button>
        </section>
        <section className="featured-books">
          <h2>Livres en Vedette</h2>
          {/* Ajoutez ici les composants des livres */}
        </section>
        <section className="about-us">
          <h2>À Propos de Nous</h2>
          <p>
            Nichée au cœur de la ville, la Librairie NextPage propose une
            sélection organisée de livres pour chaque type de lecteur. Des
            meilleures ventes aux trésors indépendants, venez explorer nos
            étagères et découvrez votre prochaine aventure.
          </p>
        </section>
      </main>
      <footer>
        <p>
          Visitez-nous ou commandez en ligne. Nous livrons partout dans le monde
          !
        </p>
      </footer>
    </div>
  );
}

export default App;
