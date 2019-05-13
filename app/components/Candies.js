import React from 'react'
import SingleCandy from './SingleCandy'
import {connect} from 'react-redux'
import {getCandyThunk} from '../reducers/candies'


class DisconnectedCandies extends React.Component {
    componentDidMount () {
        this.props.getCandy()
    }
    render () {
        console.log(this.props.candies)
        return (
            <div id="candyWrapper">
                {this.props.candies.length ? this.props.candies.map(candy => {
                    return (
                        <SingleCandy key={candy.name} candy={candy} />
                    )
                }) : null}
            </div>
        )
    }
}

function mapStateToProps (state) {
    return ({
        candies: state.candy
    })
}

function mapsToDispatch (dispatch) {
    return {
      getCandy: () => dispatch(getCandyThunk())
    }
}

const Candies = connect(mapStateToProps, mapsToDispatch)(DisconnectedCandies)

export default Candies
