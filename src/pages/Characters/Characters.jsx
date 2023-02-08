import axios from "axios"
import { useEffect, useState } from "react";
import Gallery from "../../components/Gallery/Gallery";
import Paginator from "../../components/Paginator/Paginator";

export default function CharactersPage() {

    const [page, setPage] = useState(1)
    const [maxPage, setMaxPage] = useState(1)
    const [characters, setCharacters] = useState([])

    const getCharacters = async (page) => {
        const res = await axios.get(`https://api.disneyapi.dev/characters?page=${page}`);
        console.log(res);
        setMaxPage(res.data.totalPages)
        setCharacters(res.data.data);
    }
    useEffect(() => {
        getCharacters(page)
    }, [page])

    return (
        <>
            <Paginator page={page} setPage={setPage} maxPage={maxPage}/>
            <Gallery characters={characters} />
            <Paginator page={page} setPage={setPage} maxPage={maxPage}/>
        </>
    ) 
}