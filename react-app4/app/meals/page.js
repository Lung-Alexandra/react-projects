import classes from "./page.module.css";
import Link from "next/link";
import MealGrid from "@/components/meal/mealGrid";
import {getMeals} from "@/lib/mealsDataLoad";
import {Suspense} from "react";


export const metadata = {
    title: 'All Meals',
    description: 'Browse all meals shared.',
};

async function Meals(){
    const meals = await getMeals();
    return <MealGrid meals={meals}/>
}

export default async function MealsPage() {
    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicios meals, created {' '}
                    <span className={classes.highlight}>
                        by you
                    </span>
                </h1>
                <p>
                    Choose your favorite recipes for your favorite recipes
                </p>
                <p className={classes.cta}>
                    <Link href="/meals/share">
                        Share your favorite recipes
                    </Link>
                </p>
            </header>
            <main className={classes.main}>
            <Suspense  fallback={<div className={classes.loading}>Loading...</div>}>
                <Meals/>
            </Suspense>
            </main>
        </>
    );
}