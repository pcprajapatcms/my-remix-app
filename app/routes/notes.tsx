import { getStoredNotes, storeNotes } from "~/data/notes";
import NewNotes, { links as newNotesStyle } from "./components/NewNotes";
import { ActionFunctionArgs, redirect } from "@remix-run/node";

export default function NotesPage() {
    return (
        <main>
            <NewNotes />
        </main>
    )
}

export function links() {
    return [...newNotesStyle()];
}

export async function action({ request }: ActionFunctionArgs) {
    const formData = await request.formData();
    const noteData = Object.fromEntries(formData);

    const existingNotes = await getStoredNotes();
    noteData.id = new Date().toISOString();
    const updatedNotes = existingNotes.concat(noteData);
    await storeNotes(updatedNotes);
    return redirect("/notes");
}