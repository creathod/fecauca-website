import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const DEMO_SHEET_URL = 'https://docs.google.com/spreadsheets/d/1b9sJU00lrgra--jg1hL_zNXPFjyLXc_LcEUk78k4KJ0/export?format=csv';

// Fallback mock posts just in case fetch fails heavily during build
const MOCK_POSTS = [
    {
        id: '1',
        title: 'Cómo elegir el calibre de cable correcto',
        excerpt: 'Una guía práctica para evitar sobrecalentamientos y cumplir norma RETIE en instalaciones residenciales.',
        image: 'https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?auto=format&fit=crop&q=80&w=1000',
    },
    {
        id: 'finlandia-transmision-energia-inalambrica-larga-distancia',
        title: 'El fin de los cables: Finlandia estremece al mundo con la transmisión inalámbrica',
        excerpt: 'Ingenieros de la Universidad de Aalto logran un 80% de eficiencia energética transmitiendo electricidad a través del aire mediante superconductores.',
        image: 'https://fecauca.com/images/default-blog.jpg', // Placeholder for now
    }
];

// Extremely basic CSV parser for the exact structure needed
function parseCSV(csv) {
    const lines = csv.split('\n');
    if (lines.length < 2) return [];

    // Parse headers
    const headers = lines[0].split(',').map(h => h.trim().toLowerCase());
    const idIdx = headers.indexOf('id');
    const titleIdx = headers.indexOf('title');
    const excerptIdx = headers.indexOf('excerpt');
    const imageIdx = headers.indexOf('image');

    const posts = [];
    for (let i = 1; i < lines.length; i++) {
        // Handle basic quoted CSV just enough for SEO data without a massive library
        // Real parsing is handled by PapaParse on frontend, here we just need raw string matches or simple split
        // A full robust CSV regex for matching fields considering quotes:
        const matches = lines[i].match(/(".*?"|[^",\s]+)(?=\s*,|\s*$)/g);
        if (!matches) continue;

        // Clean quotes from parsed array manually if needed, but since users use Google Sheets mostly straightforwardly:
        // Actually, just using a simple split for now if it doesn't have complex internal commas for the ID, Title, Excerpt, Image
        // Given we just need the IDs to exist, let's fetch it, and if it fails to parse perfectly, we still generate the route.
    }
    return posts;
}

async function generateStaticSEO() {
    console.log('🔄 Starting Static SEO Pre-rendering for blog posts...');

    // 1. Fetch posts from the CSV
    let posts = MOCK_POSTS;
    try {
        const response = await fetch(DEMO_SHEET_URL);
        if (response.ok) {
            const csvText = await response.text();

            // Because writing a perfect edge-case CSV parser in raw JS is messy, 
            // since we only need ID, TITLE, EXCERPT, IMAGE, let's just use the simplest approach: Let's extract them manually or use MOCK if the CSV format is too complex for simple split.
            // Actually, we can just let Node dynamically load PapaParse since it's in node_modules!
            const Papa = (await import('papaparse')).default;
            const { data } = Papa.parse(csvText, {
                header: true,
                skipEmptyLines: true,
                transformHeader: (h) => h.trim().toLowerCase()
            });
            if (data && data.length > 0) {
                posts = data;
                console.log(`✅ Loaded ${posts.length} posts from CSV`);
            }
        }
    } catch (error) {
        console.warn('⚠️ Could not fetch or parse CSV during build, falling back to mock posts:', error.message);
    }

    // 2. Read the built index.html
    const distPath = path.resolve(__dirname, '../dist');
    const indexPath = path.join(distPath, 'index.html');

    if (!fs.existsSync(indexPath)) {
        console.error('❌ dist/index.html not found! Run vite build first.');
        process.exit(1);
    }

    const baseHtml = fs.readFileSync(indexPath, 'utf-8');

    // 3. Create the /blog/ static directories and inject HTML
    let generatedCount = 0;

    for (const post of posts) {
        if (!post.id || !post.title) continue;

        const postDir = path.join(distPath, 'blog', post.id);

        // Create directory string
        fs.mkdirSync(postDir, { recursive: true });

        // Ensure image is absolute url
        const imageUrl = post.image || '';
        const absoluteImage = imageUrl.startsWith('http')
            ? imageUrl
            : `https://fecauca.com${imageUrl.startsWith('/') ? '' : '/'}${imageUrl}`;

        // Replace Meta Tags
        // Base tags in index.html are:
        // <meta property="og:title" content="Materiales Eléctricos Popayán - Envío Gratis | FECAUCA" />
        // <meta property="og:description" content="..." />
        // <meta property="og:image" content="..." />
        // <title>...</title>

        const pageTitle = `${post.title} | FECAUCA Blog`;
        const postExcerpt = post.excerpt ? post.excerpt.replace(/"/g, '&quot;') : '';

        let newHtml = baseHtml
            .replace(/<title>.*?<\/title>/, `<title>${pageTitle}</title>`)
            .replace(/<meta name="description" content=".*?"/, `<meta name="description" content="${postExcerpt}"`)
            .replace(/<meta property="og:title" content=".*?"/, `<meta property="og:title" content="${pageTitle}"`)
            .replace(/<meta property="og:description" content=".*?"/, `<meta property="og:description" content="${postExcerpt}"`)
            .replace(/<meta property="og:image" content=".*?"/, `<meta property="og:image" content="${absoluteImage}"`)
            .replace(/<meta property="og:url" content=".*?"/, `<meta property="og:url" content="https://fecauca.com/blog/${post.id}"`);

        // Also change twitter meta tags if they exist (they don't yet in base, let's inject them)
        const twitterTags = `
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:title" content="${pageTitle}" />
  <meta name="twitter:description" content="${postExcerpt}" />
  <meta name="twitter:image" content="${absoluteImage}" />
`;
        newHtml = newHtml.replace('<!-- Open Graph / Facebook / WhatsApp -->', `<!-- Open Graph / Facebook / WhatsApp -->\n${twitterTags}`);

        fs.writeFileSync(path.join(postDir, 'index.html'), newHtml);
        generatedCount++;
    }

    console.log(`🚀 Successfully pre-rendered ${generatedCount} blog post pages for SEO!`);
}

generateStaticSEO();
