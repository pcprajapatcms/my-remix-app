import { Form } from "@remix-run/react";
import styles from "~/routes/components/NewNotes.css?url";

export default function NewNotes() {
    return (
        <Form method="post" id="note-form">
            <p>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" name="title" required />
            </p>
            <p>
                <label htmlFor="content">Content</label>
                <textarea id="content" name="content" rows="5" required />
            </p>
            <div className="form-actions">
                <button>Add Note</button>
            </div>
        </Form>
    );
}

export function links() {
    return [{ rel: "stylesheet", href: styles }];
}
