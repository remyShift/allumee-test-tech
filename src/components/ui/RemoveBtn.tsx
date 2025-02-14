export const RemoveBtn = ({ onClick }: { onClick: () => void }) => {
    return (
        <button
            onClick={onClick}
        className="p-2 text-red-500 hover:text-red-600 transition-colors"
        >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 6h18M19 6v14a2 2 0 01-2 2H7a2 2 0 01-2-2V6m3 0V4a2 2 0 012-2h4a2 2 0 012 2v2" />
            </svg>
        </button>
    )
}
