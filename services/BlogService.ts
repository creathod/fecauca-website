import Papa from 'papaparse';

export interface BlogPost {
    id: string;
    title: string;
    excerpt: string;
    content: string; // Markdown or HTML
    date: string;
    image: string;
    category: string;
    author: string;
}

// User's Google Sheet URL (Published as CSV)
const DEMO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1b9sJU00lrgra--jg1hL_zNXPFjyLXc_LcEUk78k4KJ0/export?format=csv';

const MOCK_POSTS: BlogPost[] = [
    {
        id: '1',
        title: 'Cómo elegir el calibre de cable correcto',
        excerpt: 'Una guía práctica para evitar sobrecalentamientos y cumplir norma RETIE en instalaciones residenciales.',
        content: 'Elegir el calibre de cable adecuado es fundamental para la seguridad de cualquier instalación eléctrica. Un calibre muy delgado puede provocar sobrecalentamiento e incendios, mientras que uno muy grueso representa un gasto innecesario. En esta guía, explicamos cómo usar la tabla de amperaje según la norma NTC 2050...',
        date: '2023-10-25',
        image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000',
        category: 'Tutoriales',
        author: 'Ing. Carlos Reyes'
    },
    {
        id: '2',
        title: 'Iluminación LED vs. Tradicional: ¿Cuánto ahorras?',
        excerpt: 'Analizamos el retorno de inversión al cambiar tu iluminación a tecnología LED certificada.',
        content: 'La tecnología LED no es solo una moda, es una necesidad económica y ambiental. Un bombillo LED consume hasta un 85% menos energía que uno incandescente y dura 25 veces más. En este artículo desglosamos el ahorro real en la factura de energía de un hogar promedio en Popayán...',
        date: '2023-11-02',
        image: 'https://images.unsplash.com/photo-1565814329452-e1efa11c5b89?auto=format&fit=crop&q=80&w=1000',
        category: 'Ahorro',
        author: 'Equipo FECAUCA'
    },
    {
        id: '3',
        title: 'Mantenimiento preventivo en época de lluvias',
        excerpt: 'Protege tus equipos electrónicos de las tormentas eléctricas comunes en el Cauca.',
        content: 'El Cauca es una zona con alta actividad de tormentas eléctricas. Los picos de voltaje pueden destruir neveras, computadores y televisores en milisegundos. Recomendamos instalar DPS (Dispositivos de Protección contra Sobretensiones) en el tablero principal...',
        date: '2023-11-15',
        image: 'https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&q=80&w=1000',
        category: 'Seguridad',
        author: 'Ing. Carlos Reyes'
    }
];

export const BlogService = {
    getPosts: async (): Promise<BlogPost[]> => {
        try {
            const response = await fetch(DEMO_SHEET_URL);
            if (!response.ok) {
                throw new Error(`Failed to fetch CSV: ${response.statusText}`);
            }
            const csvText = await response.text();
            const posts = parseCSV(csvText);

            // If the sheet is empty or has only headers, return mock posts or empty array
            if (posts.length === 0) {
                console.warn("Sheet is empty, returning mock posts");
                return MOCK_POSTS;
            }

            return posts;
        } catch (error) {
            console.error("Error fetching posts:", error);
            return MOCK_POSTS; // Fallback to mock data on error
        }
    },

    getPostById: async (id: string): Promise<BlogPost | undefined> => {
        const posts = await BlogService.getPosts();
        return posts.find(post => post.id === id);
    }
};

// Helper to parse CSV
const parseCSV = (csvText: string): BlogPost[] => {
    const { data } = Papa.parse(csvText, {
        header: true,
        skipEmptyLines: true,
        transformHeader: (h) => h.trim().toLowerCase() // Normalize headers
    });
    return data as BlogPost[];
};
