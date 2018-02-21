import React from 'react'
import { connect } from 'react-redux'

class ActiveItem extends React.Component {
    render() {
        if(!this.props.book) {
            return <div>Select an item to get started!</div>
        }
        return(
            <div>
                <h1>{this.props.book.title}</h1>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return{
        book: state.activeItem
    }
}

export default connect(mapStateToProps)(ActiveItem)