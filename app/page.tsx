import { CarCard, CustomFilter, Hero, SearchBar } from "@/components";
import { fuels, yearsOfProduction } from "@/constants";
//import { HomeProps } from "@/types";
import { mockCars } from "@/utils";




export default async function Home(/*{ searchParams }: HomeProps*/) {
  //const params = await searchParams;
  
   /*const allCars = await fetchCars({
    manufacturer: params.manufacturer || "toyota",
    year: Number(params.year) || 2020,
    fuel: params.fuel || "gas",
    //limit: Number(params.limit) || 10,
     model: params.model || "corolla",
  });*/

  const allCars = mockCars; 

  const isDataEmpty = !Array.isArray(allCars) || allCars.length <1 || !allCars;
  return (
      <main className="overflow-hidden">
        <Hero/>
        
        <div className="mt-12 padding-x padding-y max-width " id='discover'>
          <div className="home__text-container">
            <h1 className="text-4xl font-extrabold">
              Car catalogue
            </h1>
            <p>Explore cars you might like</p>

          </div>
          <div className="home__filters">
            <SearchBar/>

            <div className="home__filter-container">
              <CustomFilter title= 'fuel' options={fuels}/>
              <CustomFilter title='year' options={yearsOfProduction} />

            </div>

          </div>
          {!isDataEmpty ? (
            <section>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {allCars?.map((car, index) => (  
                   <CarCard key={index} car={car} />
                ))}

              </div>
            </section>
          ):(
            <div className="home__error-container">
              <h2 className="text-[#2B2C35] text-xl font-bold">Oops no results</h2>
              {/* <p>{allCars?.message}</p> */}
            </div>
          )}


        </div>
      </main>
   
  );
}
