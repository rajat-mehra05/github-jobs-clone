import React from 'react'
import {Pagination} from 'react-bootstrap'

export default function JobsPagination({page, setPage, hasNextPage}) {
function adjustPage(amount) {
    setPage( prevPage => prevPage + amount)
}

    return (
        <Pagination>

            {page !== 1 && <Pagination.Prev onClick={() => adjustPage(-1)} />} {/* if page != 1 */}
             {page !== 1 && <Pagination.Item onClick={()=> setPage(1)}> 1 </Pagination.Item>} {/* already have page 1*/}
             {page > 2 && <Pagination.Ellipsis />} 
             {page > 2 && <Pagination.Item onClick={() => adjustPage(-1)}> {page - 1} </Pagination.Item>} 

             <Pagination.Item active> {page} </Pagination.Item>
             {/* checking if next page is there */}
             {hasNextPage && <Pagination.Item onClick={() => adjustPage(1)}> {page + 1}</Pagination.Item>}

             {hasNextPage && <Pagination.Next onClick={() => adjustPage(1)}/>}
        </Pagination>
    )
}
