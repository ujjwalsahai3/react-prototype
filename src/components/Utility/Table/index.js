import React, {useState, useEffect} from 'react'
import Paging from './paging'
import {Link} from 'react-router-dom'
import Preloader from '../Loader'
import PropTypes from 'prop-types'
const Table = props => {
    const [state, setState] = useState({})
    const [isloading,setIsLoading] = useState(true)

    useEffect(()=>{
        if(isloading){
            if(props.tablebody.length > 0 ){
                const pageNumber= 1
                const recordsToDisplay=5
                const initialIndex = (pageNumber - 1) * recordsToDisplay
                setState({
                    pageNumber: pageNumber,
                    numberOfRecords: recordsToDisplay,
                    originalData:props.tablebody,
                    totalPages: Math.ceil(props.tablebody.length/recordsToDisplay),
                    data: props.tablebody.slice(initialIndex, recordsToDisplay)
                })
                setIsLoading(false)
            }
        }
    },[props.tablebody,isloading])

    const addAndRemoveActiveClass = (page) =>{
        let paginationContainer = document.querySelector('#paginationContainer')
        for (var i=0; i<paginationContainer.children.length; i++) {
            paginationContainer.children[i].classList.remove('active')
            
            if(paginationContainer.children[i].id === ('li'+page))
                paginationContainer.children[i].classList.add('active')
        } 
    }

    const onPageClick =(page) => {
        addAndRemoveActiveClass(page)
        setState({
            ...state,
            pageNumber: page,
            data: state.originalData.slice((page - 1) * state.numberOfRecords, (page - 1) * state.numberOfRecords+state.numberOfRecords)
        })
    }
    
    const onNextAndPreview = value => {
        let pageNumber = state.pageNumber + value
        pageNumber = pageNumber === 0 ? state.totalPages : (pageNumber > state.totalPages ? 1 : pageNumber)
        onPageClick(Number(pageNumber))
    }

    let pageArr =[]
    for (let index = 1; index <= state.totalPages; index++) {
       pageArr.push(index)
    }

    const dynamicContent = isloading ? (<Preloader />) :
     (
        <>
        <div className='row'>
            <div className='col s4 offset-s4 orange lighten-4 center-align' style={{padding:10}}>
                Viewing Page: {state.pageNumber}/{state.totalPages}
            </div>
        </div>
        <table className='table responsive-table striped'>
            <thead>
                <tr>
                    {props.tableheader.map(head => <th key={head.title}>{head.title}</th>)}
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                { state.data.map(elem => {
                    let keys= Object.keys(elem)
                        return (
                            <tr key={elem.uniqueKey} className='orange-text text-darken-2'>
                                {keys.map(key => 
                                    (key!=='uniqueKey') &&
                                        <td key={key}>{elem[key]}</td>
                                )}
                                <td><Link to={props.redirectToRoute+elem.uniqueKey} id={elem.uniqueKey}>View</Link></td>
                            </tr>
                        )
                    }   
                )}
            </tbody>
        </table>
        <Paging pages={pageArr} onPageClick={onPageClick} onNextAndForwardClick={onNextAndPreview} />
        </>
    )

    return dynamicContent
}

Table.propTypes = {
    tablebody: PropTypes.array.isRequired,
    tableheader: PropTypes.array.isRequired,
    redirectToRoute:PropTypes.string.isRequired,

}
export default Table