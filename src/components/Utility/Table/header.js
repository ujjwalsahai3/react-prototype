import React, {useState} from 'react'
import PropTypes from 'prop-types'

const TableHeader = props => {
    const [state, setState] = useState({
        tag:'Select',
        order:'Select'
    })
    const onFilterOPtionChange = (event) => {
        const {value,name} = event.target
        setState({
            ...state,
            [name]: value
        })
    }

    const onFilterSubmit = () =>{
        if(state.tag === "Select")
            document.querySelector('#tag').focus()
        if(state.order ==="Select")
            document.querySelector('#order').focus()
        if(state.tag!=="Select" && state.order !== "Select")
            props.fnFilter(state)
    }
    return (

        <div className='row'>
            <div className='col s4  orange lighten-2 left-align' style={{padding:10}}>
                <div className='col s2'><small>Filter</small></div>
                <div className='col s4'>
                    <select className='dropdown' id="tag" name="tag" style={{display:'block', height: '100%', padding:0}} onChange={(e) => onFilterOPtionChange(e)} >
                        <option value="Select">Select</option>
                        {props.filterByTags.map(filter=><option key={filter.title} value={filter.tags}>{filter.title}</option>)}
                    </select>
                </div>
                <div className='col s4'>
                    <select className='dropdown' id="order" name="order" style={{display:'block', height: '100%', padding:0}} onChange={(e) => onFilterOPtionChange(e)} >
                        <option value="Select">Select</option>
                        <option value="ASC">ASC</option>
                        <option value="DESC">DESC</option>
                    </select>
                </div>
                <div className='col s2'>
                    <button className='blue' onClick={onFilterSubmit}>Go</button>
                </div>
            </div>
            <div className='col s4  orange lighten-4 center-align' style={{padding:10}}>
                Viewing Page: {props.pageNumber}/{props.totalPages}
            </div>

        </div>

    
        )
}

TableHeader.propTypes = {
    pageNumber: PropTypes.number.isRequired,
    totalPages:PropTypes.number.isRequired,
    fnFilter: PropTypes.func.isRequired
}

export default TableHeader