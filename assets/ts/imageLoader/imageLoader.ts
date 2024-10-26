interface Photo {
    url: string;
    thumbnailUrl: string;
    title: string;
}

export async function fetchAndReplaceImages(): Promise<void> {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/photos');
        
        if (!response.ok) {
            throw new Error('Failed to fetch images');
        }

        const photos: Photo[] = await response.json();

        const imageElements: NodeListOf<HTMLImageElement> = document.querySelectorAll('img');
        imageElements.forEach((img: HTMLImageElement, index: number) => {
            const photo = photos[index % photos.length]; 
            img.src = photo.url; 
            img.alt = photo.title; 
        });
    } catch (error) {
        console.error("Error fetching or replacing images:", error);
    }
}