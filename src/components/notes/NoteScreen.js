import { NotesAppBar } from "./NotesAppBar"

export const NoteScreen = () => {
    return (
        <div className="notes__main-content">
            <NotesAppBar />

            <div className="notes__content">
                <input
                    type="text"
                    placeholder="Some title"
                    className="notes__title-input"
                />
                <textarea
                    placeholder="What happened today?"
                    className="notes__textarea"
                ></textarea>

                <div className="notes__image">
                    <img

                        src="https://cdnb.artstation.com/p/assets/images/images/035/896/315/large/vladimir-ishelin-ruins-fin.jpg?1616177582" alt="imagen" />
                </div>
            </div>
        </div>
    )
}
