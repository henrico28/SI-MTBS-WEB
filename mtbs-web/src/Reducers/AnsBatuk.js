const initState = {
    bsb_lamaHari : null,
    bsb_jumlahNafas : null,
    bsb_nafasCepat : null,
    bsb_tarikanDindingDada : null
}

const ansBatukReducer = (state = initState, action) => {
    switch(action.type){
        case 'LAMA_HARI':
            return Object.assign({}, state, {
                bsb_lamaHari : action.answer
            });
        case 'JUMLAH_NAFAS':
            return Object.assign({}, state, {
                bsb_jumlahNafas : action.answer
            });
        case 'NAFAS_CEPAT':
            return Object.assign({}, state, {
                bsb_nafasCepat : action.answer
            });
        case 'TARIKAN_DINDING_DADA':
            return Object.assign({}, state, {
                bsb_tarikanDindingDada : action.answer
            });
        default:
            return state;
    }
}

export default ansBatukReducer;