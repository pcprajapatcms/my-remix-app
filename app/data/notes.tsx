import fs from 'fs/promises';
interface Note {
    [key: string]: any; // Index signature allowing any field name with any value
}

interface ApiResponse {
    notes: Note[];
}

export async function getStoredNotes() {
    const rawFileContent = await fs.readFile('notes.json', { encoding: 'utf-8' });
    const data: ApiResponse = JSON.parse(rawFileContent);
    const storedNotes = data.notes ?? [];
    return storedNotes;
}

export function storeNotes(notes: Note[]) {
    return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}