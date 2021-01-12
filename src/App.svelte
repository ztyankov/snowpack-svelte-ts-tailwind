<script lang="typescript">
    import { onMount } from "svelte";

    let count: number = 0;
    const data = [
        {
            id: 1,
            name: "Plain Pasta",
            cuisine: "Italian",
            ingredients: [
                "spaghetti",
                "tomato sauce",
                "tomato sauce",
                "tomato sauce",
            ],
            spices: ["oregano", "salt", "hot sauce"],
            type: ["Brunch", "Lunch", "Dinner"],
            cookingTime: {
                min: 25,
                max: 30,
            },
            tags: ["quick", "easy", "pasta"],
        },
    ];
    const meal = data[0];

    onMount(() => {
        const interval = setInterval(() => count++, 1000);
        return () => {
            clearInterval(interval);
        };
    });
</script>

<style>
    :global(body) {
        margin: 0;
        /* font-family: Arial, Helvetica, sans-serif; */
    }

    .card-label {
        @apply text-lg text-blue-800 font-semibold;
    }
</style>

<svelte:head>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,600,700" />
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css?family=Roboto+Mono" />
</svelte:head>

<div class="w-64 py-2 px-2 mx-auto bg-white rounded-xl shadow-md my-4">
    <p class="text-center space-y-2">
        Page has been open for
        <code class="bg-gray-200 px-2">{count}</code>
        seconds.
    </p>
</div>

<div
    class="grid grid-rows-2 grid-flow-col gap-2 w-80 mx-auto bg-white rounded-xl shadow-md">
    <div class="relative min-w-full sm:mx-0 sm:flex-shrink-0 shadow-md">
        <img src="https://picsum.photos/id/163/360/200" alt="Eating Location" />
        <div class="absolute bottom-1 left-1 bg-black bg-opacity-40 px-2 py-1">
            <p class="text-lg text-white font-semibold">{meal.name}</p>
            <p class="text-md text-white font-thin italic">{meal.cuisine}</p>
        </div>
    </div>

    <div class="relative text-left space-y-2 py-4 px-4 sm:text-left">
        <div class="space-y-1">
            <p class="text-black">
                <span class="card-label">Prep time</span>:
                {meal.cookingTime.min}
                -
                {meal.cookingTime.max}
                min
            </p>
            <p>
                <span class="card-label">Ingerdients</span>:
                {meal.ingredients.join(', ')}
            </p>
        </div>
        <button
            class="absolute left-2 bottom-2 px-4 pt-1.5 pb-1 text-md text-svelte-800 font-md rounded-lg hover:text-white hover:bg-svelte-200 hover:border-transparent focus:outline-none focus:bg-svelte-400 focus:text-white uppercase">Select</button>
    </div>
</div>
