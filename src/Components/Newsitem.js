import React from 'react'

const Newsitem = (props) => {
    let { title, description, imgurl, newsurl, author, date, source } = props;
    return (
        <>
            <div className='my-3'>
                <div className="card">
                    <div style={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        position: 'absolute',
                        right: '0',
                        fontSize: '15px',
                    }}>
                        <span className="badge rounded-pill bg-danger">{source}</span>
                    </div>
                    <img src={!imgurl ? "https://cdn.vox-cdn.com/thumbor/K2VhFYDhpBxYRdnvTxwb88hTKZ0=/0x0:3000x2001/1200x628/filters:focal(1500x1001:1501x1002)/cdn.vox-cdn.com/uploads/chorus_asset/file/25315943/DG024_008CH.jpg" : imgurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}...</p>
                        <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
                        <a href={newsurl} target="_blabk" className="btn btn-sm btn-dark">Read mode</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Newsitem
