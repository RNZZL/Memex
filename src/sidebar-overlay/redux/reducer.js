import { createReducer } from 'redux-act'

import * as actions from './actions'

const defaultState = {
    annotations: [],
    page: {
        url: null,
        title: null,
    },
}

const setAnnotations = (state, annotations) => ({
    ...state,
    annotations: annotations,
})

const setPageInfo = (state, page) => ({
    ...state,
    page: page,
})

export default createReducer(
    {
        [actions.setAnnotations]: setAnnotations,
        [actions.setPageInfo]: setPageInfo,
    },
    defaultState,
)
