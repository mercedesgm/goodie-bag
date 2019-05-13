import axios from 'axios';

const GOT_CANDY = 'GOT_CANDY';

const gotCandies = candies => ({type: GOT_CANDY, candies});

export const getCandyThunk = () => {
    return async dispatch => {
        const candies = await axios.get('/api/candies');
        dispatch(gotCandies(candies.data))
    }
}

const candyReducer = (state = [], action) => {
    switch (action.type) {
        case GOT_CANDY: {
            console.log(action.candies)
            return [...state, ...action.candies]
        }
        default: {
            return state
        }
    }
}

export default candyReducer;
