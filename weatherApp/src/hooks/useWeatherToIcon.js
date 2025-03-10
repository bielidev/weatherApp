export const useWeatherToIcon = () => {
    return {
        getIcon: (weather) => `
    <div class="p-2 border-2 bg-white dark:bg-gray-600 w-fit rounded shadow-xl">
        <h2 class="text-xl">${weather.name}</h2>
        <div class="flex flex-col justify-center items-start">
            <p class="text-lg truncate">${weather.main.temp}º C</p>
        </div>
    </div>
    `
    }
}