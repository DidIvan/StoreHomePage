const initialState = {
    viewType: true
};
export default (state = initialState, action)=> {
    switch (action.type) {
        case 'GOODS_DETAIL_VIEW':
            return initialState.viewType = false;
        default:
            return state;
    }
}
