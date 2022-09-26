import './App.css';
import Curso from "./components/courses";
import Location from "./components/locations";
import Recipie from "./components/bestRecipies";
import Review from './components/reviews';
import Header from "./components/header";
import Footer from "./components/footer"


function App() {
   return (
      <div className="App">

         
         <Header/>




         {/* ---------------COURSES---------------- */}



         <section className="course">
            <h1>Our New Courses</h1>
            <p>
               Now we have culinary courses for you to become the cook you´ve always
               wanted to be!
            </p>
            <div className="row">
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

         <section className="locations">
            <h1>Our Locations</h1>
            <p>come to visit us</p>


            <div className="row">

               <Location
                  locationImage="1"
                  location="SIDNEY, AUSTRALIA"
               />

               <Location
                  locationImage="2"
                  location="BARÚ, COLOMBIA"
               />
               <Location
                  locationImage="3"
                  location="ROME, ITALY"
               />

            </div>
         </section>





         {/* -------------------------BEST RECIPIES--------------------------- */}


         <section className="recipies">
            <h1>Our best recipies</h1>
            <p>you must try them!</p>


            <div className="row">
               <Recipie
                  recipeImage="1"
                  name="GRILLED LOBSTER"
               />

               <Recipie
                  recipeImage="2"
                  name="SALMON ROLL"
               />

               <Recipie
                  recipeImage="3"
                  name="BAKED SHRIMP"
               />

            </div>
         </section>




         {/* ----------------------REVIEWS------------------------- */}

         <section className="reviews">
            <h1>What Our Clients Says</h1>
            <div className="row">

               <Review
                  reviewImage="1"
                  name="BENEDICT"
                  lastName="CUMBERATCH"
                  reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus necessitatibus laudantium harum ducimus doloribus?
                  Veniam, quo cumque ex"
               />

               <Review
                  reviewImage="2"
                  name="ANGELINA"
                  lastName="JOLIE"
                  reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus necessitatibus laudantium harum ducimus doloribus?
                  Veniam, quo cumque ex
                </p>"
               />

               <Review
                  reviewImage="3"
                  name="CATE"
                  lastName="BLANCHETT"
                  reviewText="Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Voluptatibus necessitatibus laudantium harum ducimus doloribus?
                  Veniam, quo cumque ex"
               />



            </div>
         </section>


         <Footer/>

      </div>
   );
}

export default App;
