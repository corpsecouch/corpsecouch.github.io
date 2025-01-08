import fs from 'fs/promises';
import path from 'path';


const getFiles = async (dir) => {
    let files = [];
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
        const fullPath = path.join(dir, item.name);
        if (item.isDirectory()) {
            files = files.concat(await getFiles(fullPath)); // Recurse into subdirectory
        } else {
            files.push(fullPath); // Add file to list
        }
    }

    return files;
}


const importFiles = async (files, baseDir='') => {
    const combinedData = []
    for (const file of files) {
        const filepath = path.resolve(baseDir, file);
        const module = await import(filepath);
        combinedData.push(module.default); // Assuming the default export contains the data
    }
    return combinedData
}


const loadModules = async (ext, dir) => {
    try {
        // Read the directory
        // const files = await fs.readdir(dir);
        const files = await getFiles(dir)

        // Filter only .mjs files
        const mjsFiles = files.filter(file => file.endsWith(ext));

        // Import each .mjs file
        return await importFiles(mjsFiles)
    } catch (err) {
        console.error('Error loading modules:', err);
    }
}


export default function Pages(ext='.mjs', baseDir='./') {
    return loadModules(ext, baseDir)
}