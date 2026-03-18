import { FilterProps } from "@/types";

export async function fetchCars(filters: FilterProps) {
    const { manufacturer, year, model, limit, fuel } = filters;
    const headers = {
     "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RAPID_API_KEY!,
      "X-RapidAPI-Host": "cars-by-api-ninjas.p.rapidapi.com",
      "Content-Type": "application/json",

    }
     const response = await fetch(`https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?make=${manufacturer}&year=${year}&model=${model}&limit=${limit}&fuel_type=${fuel}`, {
        headers:headers,
     });

     if (!response.ok) {
        throw new Error("Failed to fetch cars");
    }
     return response.json();

}