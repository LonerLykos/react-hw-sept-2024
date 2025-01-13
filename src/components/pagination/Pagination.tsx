import {useSearchParams} from "react-router-dom";
import "./Pagination.css"

export const Pagination = () => {
    const [query, setQuery] = useSearchParams({page:'1'});

    return (
        <div className='buttons'>
            <button onClick={() => {
                const pg = query.get('page')
                if (pg) {
                    let currentPage = +pg;
                    if (currentPage > 1) {
                        setQuery({page: (--currentPage).toString()})
                    }

                }

            }}>prev
            </button>
            <button onClick={() => {
                const pg = query.get('page')
                if (pg) {
                    let currentPage = +pg;
                    if (currentPage < 20) {
                        setQuery({page: (++currentPage).toString()})
                    }

                }

            }}>next
            </button>
        </div>

    );
};
