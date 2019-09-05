import React, {useState, useEffect} from 'react'
import Paging from './paging'
import {Link} from 'react-router-dom'

const Table = props => {
    const [state, setState] = useState({originalData:[],pageNumber:1,numberOfRecords:5, data:[], totalPages:0})
    
    const fetchStateData= (data) => {
        const initialIndex = (state.pageNumber - 1) * state.numberOfRecords
            setState({
                ...state,
                originalData:data,
                totalPages: Math.ceil(data.length/state.numberOfRecords),
                data: data.slice(initialIndex, state.numberOfRecords)
            })
    }
    
    //eslint-disable-next-line
    useEffect(()=>{
        if(props.tablebody.length > 0){
            fetchStateData(props.tablebody)
        }
    },[])

    const onPageClick =(page) => {
        let paginationContainer = document.querySelector('#paginationContainer')
        for (var i=0; i<paginationContainer.children.length; i++) {
            paginationContainer.children[i].classList.remove('active')
            
            if(paginationContainer.children[i].id === ('li'+page))
                paginationContainer.children[i].classList.add('active')
        } 

        const initialIndex = (page - 1) * state.numberOfRecords
        const displayData= state.originalData.slice(initialIndex, initialIndex+state.numberOfRecords)
        //console.log(displayData, initialIndex)
        setState({
            ...state,
            pageNumber: page,
            data: displayData
        })
    }
    
    const onMoveNextAndForward = value => {
        let pageNumber = state.pageNumber + value
        if(pageNumber===0)
            pageNumber = state.totalPages
        if(pageNumber > state.totalPages)
            pageNumber = 1

        onPageClick(Number(pageNumber))
    }

    

    let pageArr =[]
    for (let index = 1; index <= state.totalPages; index++) {
       pageArr.push(index)
    }
   
    return (
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
        <Paging pages={pageArr} onPageClick={onPageClick} onNextAndForwardClick={onMoveNextAndForward} />
        </>
    )
}


export default Table