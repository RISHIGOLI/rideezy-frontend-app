import React, { useEffect, useState } from 'react'
import ReactPaginate from 'react-paginate'
import wheeler from "../assets/images/wheeler.jpg";

const Paginate3wheel = () => {
    const [items, setItems] = useState([])
    const [pageCount, setPageCount] = useState(0);

    let limit = 10;
    useEffect(() => {
        const getComments = async () => {
            const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page=1&_limit=${limit}`);
            const data = await res.json();
            const total = res.headers.get("x-total-count");
            setPageCount(Math.ceil(total / limit));
            setItems(data);
        }
        getComments();

    }, [limit]);

    const fetchComments = async (currentPage) => {
        const res = await fetch(`https://jsonplaceholder.typicode.com/photos?_page= ${currentPage}&_limit=${limit}`);
        const data = await res.json();
        return data;
    }

    const handlePageClick = async (data) => {
        let currentPage = data.selected + 1;
        const commentsFormServer = await fetchComments(currentPage);
        setItems(commentsFormServer);
    }
    return (
        <div>
            <div className="container">
                <div className="row m-2">
                    {items.map((item) => {
                        return (
                            <div key={item.id} className='col-sm-6 col-md-4  v my-2'>
                                <div className="card shodow-sw w-100" style={{ minHeight: 225 }}>
                                    <div className="card-body">

                                        <h5 className="card-title">Id:{item.id}</h5>
                                        <img src={wheeler} className="card-img-top" alt="..." />
                                        {/* <h6 className='card-subtitle mb-2 text-muted text-center'>{item.}</h6> */}
                                        <p className="card-text">{item.title}</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                                </div>
                            </div>
                        )
                    })}

                </div>
            </div>
            <ReactPaginate
                previousLabel={"Previous"}
                nextLabel={"Next"}
                breakLabel={"...."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
        </div>
    )
}

export default Paginate3wheel
