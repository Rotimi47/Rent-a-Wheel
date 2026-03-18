import { CarProps, FilterProps } from "@/types";

export const calculateCarRent = (city_mpg: number | undefined, year: number) => {
  const basePricePerDay = 50;
  const mileageFactor = 0.1;
  const ageFactor = 0.05;

  // fallback mpg if API does not provide it
  const mpg = city_mpg && !isNaN(city_mpg)
   ? city_mpg
    : 20 + Math.floor(Math.random() * 10); // random 20–29
    
  const mileageRate = mpg * mileageFactor;
  const ageRate = (new Date().getFullYear() - year) * ageFactor;

  const rentalRatePerDay = basePricePerDay + mileageRate + ageRate;

  return rentalRatePerDay.toFixed(0);
};

export const updateSearchParams = (type: string, value: string) => {
  // Get the current URL search params
  const searchParams = new URLSearchParams(window.location.search);

  // Set the specified search parameter to the given value
  searchParams.set(type, value);

  // Set the specified search parameter to the given value
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  // Set the specified search parameter to the given value
  const newSearchParams = new URLSearchParams(window.location.search);

  // Delete the specified search parameter
  newSearchParams.delete(type.toLocaleLowerCase());

  // Construct the updated URL pathname with the deleted search parameter
  const newPathname = `${window.location.pathname}?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchCars(filters: FilterProps) {
  const {
    manufacturer = "toyota",
    year = 2020,
    model = "corolla",
  
    fuel = "gas",
  } = filters;

    const headers = {
      "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
    }


     const url = `https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&fuel_type=${fuel}`;
      console.log("Fetching URL:", url);
     
    const response = await fetch(url, { headers });

     if (!response.ok) {
      const text = await response.text();
      console.error("API response error:", text);
      throw new Error("Failed to fetch cars");
    }
     return response.json();

}

export const generateCarImageUrl = (car: CarProps, angle?: string) => {
  const url = new URL("https://cdn.imagin.studio/getimage");
  const { make, model, year } = car;

  url.searchParams.append('customer', process.env.NEXT_PUBLIC_IMAGIN_API_KEY || '');
  url.searchParams.append('make', make);
  url.searchParams.append('modelFamily', model.split(" ")[0]);
  url.searchParams.append('zoomType', 'fullscreen');
  url.searchParams.append('modelYear', `${year}`);
  // url.searchParams.append('zoomLevel', zoomLevel);
  url.searchParams.append('angle', `${angle}`);

  return `${url}`;
} 

export const mockCars: CarProps[] = [
  { make: "Toyota", model: "Corolla", year: 2020, fuel_type: "Gas", transmission: "Automatic", drive: "FWD", city_mpg: 30 },
  { make: "Honda", model: "Civic", year: 2019, fuel_type: "Gas", transmission: "Manual", drive: "FWD", city_mpg: 32 },
  { make: "Ford", model: "Mustang", year: 2021, fuel_type: "Gas", transmission: "Automatic", drive: "RWD", city_mpg: 22 },
  { make: "Tesla", model: "Model 3", year: 2022, fuel_type: "Electric", transmission: "Automatic", drive: "RWD", city_mpg: 120 },
  { make: "BMW", model: "X5", year: 2018, fuel_type: "Diesel", transmission: "Automatic", drive: "AWD", city_mpg: 25 },
  { make: "Audi", model: "A4", year: 2020, fuel_type: "Gas", transmission: "Automatic", drive: "FWD", city_mpg: 28 },
];
