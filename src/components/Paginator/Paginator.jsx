export default function Paginator({page, setPage, maxPage}) {
    return (
        <>
            {page > 1 && <button onClick={() => setPage(page - 1)}>-</button>}
            <div>{page}</div>
            {page < maxPage && <button onClick={() => setPage(page + 1)}>+</button>}
        </>
    )
}