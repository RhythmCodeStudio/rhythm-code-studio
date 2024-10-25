import fs from 'fs';
import path from 'path';

interface UrlConfig {
  changeFrequency: string;
  priority: number;
}

interface Url {
  url: string;
  lastModified: Date;
  changeFrequency: string;
  priority: number;
}

const urlConfig: { [key: string]: UrlConfig } = {
  '': { changeFrequency: 'yearly', priority: 1.0 },
  // '/blog': { changeFrequency: 'monthly', priority: 1.0 },
};

// Function to get the last modified date of a file
function getLastModified(filePath: string): Date {
  const stats = fs.statSync(filePath);
  return stats.mtime;
}

// Function to generate URLs from filenames
function generateUrls(directory: string, baseUrl: string = ''): Url[] {
  const files = fs.readdirSync(directory);
  let urls: Url[] = [];

  files.forEach(file => {
    const filePath = path.join(directory, file);
    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively include files in subdirectories
      urls = urls.concat(generateUrls(filePath, `${baseUrl}/${file}`));
    } else if (file.endsWith('page.tsx')) {
      // Include only files that end with 'page.js'
      const urlPath = file === 'page.tsx' ? baseUrl : `${baseUrl}/${file.replace('/page.tsx', '')}`;
      const config = urlConfig[urlPath] || { changeFrequency: 'yearly', priority: 0.8 }; // Default values
      urls.push({
        url: `https://www.rhythmcodestudio.tech${urlPath}`,
        lastModified: getLastModified(filePath),
        changeFrequency: config.changeFrequency,
        priority: config.priority,
      });
    }
  });

  return urls;
}

export default function sitemap(): Url[] {
  const appDirectory = path.join(process.cwd(), 'app');
  // Generate URLs from the app directory
  let urls = generateUrls(appDirectory);

  return urls;
}