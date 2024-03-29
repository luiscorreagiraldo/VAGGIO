import "./App.css";
import Curso from "./components/courses";
import Location from "./components/locations";
import RecipieSlider from "./components/recipieSlider";
import Header from "./components/header";
import Footer from "./components/footer";
import Banner from "./components/banner";
import ReviewSlider from "./components/ReviewSlider";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />

      {/* ---------------COURSES---------------- */}

      <section className="course" id="courses">
        <h1>Our New Courses</h1>
        <p>
          Now we have culinary courses for you to become the cook you´ve always
          wanted to be!
        </p>
        <div className="row-custom">
          <Curso
            name="DESSERT MAKING"
            description="learn how to make coral reef inspired desserts"
          />

          <Curso
            name="SEAFOOD COURSE"
            description="  get the confidence and competence to take full advantage of all the
                  unique qualities of fish, shellfish and sea greens have to offer."
          />

          <Curso
            name="PLANT-BASED COOKING"
            description=" Discover flavor-packed vegan meals from around the world that will
                  leave your family and friends in awe"
          />
        </div>
      </section>

      {/*---------LOCATIONS---------> */}

      <section className="locations" id="locations">
        <h1>Our Locations</h1>
        <p>come to visit us</p>

        <div className="row-custom">
          <Location locationImage="1" location="SIDNEY, AUSTRALIA" />

          <Location locationImage="2" location="BARÚ, COLOMBIA" />
          <Location locationImage="3" location="ROME, ITALY" />
        </div>
      </section>

      {/* -------------------------BEST RECIPIES--------------------------- */}

      <section className="recipies" id="recipies">
        <h1>Our best recipies</h1>
        <p>you must try them!</p>

        <RecipieSlider></RecipieSlider>
      </section>

      {/* ----------------------REVIEWS------------------------- */}

      <h1>What Our Clients Says</h1>

      <section className="reviews" id="reviews">
        <ReviewSlider></ReviewSlider>
      </section>

      <Footer />
    </div>
  );
}

export default App;
