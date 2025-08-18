'use client'
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const SearchInput = () => {
    const [search, setSearch] = useState('');
    const pathName = usePathname()
    const router = useRouter()

    useEffect(() => {
        const searchQuery = { search }
        const urlQueryParam = new URLSearchParams(searchQuery)
        const url = `${pathName}?${urlQueryParam}`
        router.push(url)
    }, [search])
    return (
        <div>
            <input onChange={e => setSearch(e.target.value)} type="text" value={search} className="input" />
        </div>
    );
};

export default SearchInput;