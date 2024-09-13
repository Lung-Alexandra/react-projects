'use server'

import {saveMeal} from "@/lib/mealsDataLoad";
import {redirect} from "next/navigation";
import {revalidatePath} from "next/cache";

function isInvalidName(text) {
    return !text || text.trim() === "";
}

export async function shareMeal(prevState,formData) {
    const meal = {
        title: formData.get('title'),
        summary: formData.get('summary'),
        instructions: formData.get('instructions'),
        image: formData.get('image'),
        creator: formData.get('name'),
        creator_email: formData.get('email')
    };

    if (
        isInvalidName(meal.title) ||
        isInvalidName(meal.summary) ||
        isInvalidName(meal.instructions) ||
        isInvalidName(meal.creator) ||
        isInvalidName(meal.creator_email) ||
        !meal.creator_email.includes('@') ||
        !meal.image || meal.image.size === 0
    ) {
        return{
          message: 'Invalid input.'
        };
    }

    await saveMeal(meal);
    // revalidate the cache for a path
    revalidatePath('/meals');
    redirect('/meals');
}