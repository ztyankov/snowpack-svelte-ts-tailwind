<script lang="typescript">
    import { onMount } from "svelte";

    let count: number = 0;
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
        font-family: Arial, Helvetica, sans-serif;
    }
    div code {
        background: #0002;
        padding: 4px 8px;
        border-radius: 4px;
    }
    div p {
        margin: 0.4rem;
    }

    div header {
        background-color: #f9f6f6;
        color: #333;
        min-height: 100vh;
        font-size: calc(10px + 2vmin);
    }
    div a {
        color: #ff3e00;
    }
    header img {
        height: 36vmin;
        margin-bottom: 3rem;
        animation: App-logo-spin infinite 1.6s ease-in-out alternate;
    }
    @keyframes App-logo-spin {
        from {
            transform: scale(1);
        }
        to {
            transform: scale(1.06);
        }
    }
</style>

<div class="w-64 py-2 px-2 mx-auto bg-white rounded-xl shadow-md my-4">
    <p class="text-center space-y-2">
        Page has been open for
        <code>{count}</code>
        seconds.
    </p>
</div>

<div
    class="grid grid-rows-2 grid-flow-col gap-2 w-80 mx-auto bg-white rounded-xl shadow-md">
    <div class="min-w-full sm:mx-0 sm:flex-shrink-0">
        <img src="https://picsum.photos/id/163/360/200" alt="Eating Location" />
        <p
            class="text-lg text-black font-semibold"
            style="position: absolute; bottom: -20px">
            Erin Lindford
        </p>
    </div>

    <div class="text-left space-y-2 py-4 px-4 sm:text-left">
        <div class="space-y-0.5">
            <p class="text-lg text-black font-semibold">Erin Lindford</p>
            <p class="text-gray-500 font-medium">Product Engineer</p>
        </div>
        <button
            class="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">Message</button>
    </div>
</div>
