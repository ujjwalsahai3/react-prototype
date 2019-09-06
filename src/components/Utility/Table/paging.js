import React from 'react'
import PropTypes from 'prop-types'

const Paging = props => {
    const pages= props.pages

    const onPageClick = (event) => {
        event.preventDefault()
        const {id} = event.target
        props.onPageClick(id)
    }

    return (
        <div className="row center-align">
        <ul className="pagination " id='paginationContainer'>
            <li className="waves-effect"><a href="#!" id='prevPage' onClick={() => props.onNextAndForwardClick(-1)}><i className="material-icons">chevron_left</i></a></li>
                {
                    pages.map(page => <li key={page} id={'li'+page} className={page===1?"waves-effect active":"waves-effect"}  ><a href="#!" id={page} onClick={(event) => onPageClick(event)} >{page}</a></li>)
                }
            <li className="waves-effect"><a href="#!" id='nextPage' onClick={() => props.onNextAndForwardClick(1)}><i className="material-icons">chevron_right</i></a></li>
        </ul>
        </div>

    )
}

Paging.propTypes = {
    onNextAndForwardClick: PropTypes.func.isRequired,
    onPageClick: PropTypes.func.isRequired,
    pages: PropTypes.arrayOf(PropTypes.number)
}
export default Paging