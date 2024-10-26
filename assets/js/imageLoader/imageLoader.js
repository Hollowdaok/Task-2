export async function fetchAndReplaceImages() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }
        const photos = await response.json();
        const imageElements = document.querySelectorAll('img');
        imageElements.forEach((img, index) => {
            const photo = photos[index % photos.length];
            img.src = photo.url;
            img.alt = photo.title;
        });
    }
    catch (error) {
        console.error("Error fetching or replacing images:", error);
    }
}
