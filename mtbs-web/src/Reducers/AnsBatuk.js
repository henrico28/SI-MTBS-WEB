const initState = {
    bsb : null,
    bsb_lamaHari : '',
    bsb_jumlahNafas : '',
    bsb_nafasCepat : null,
    bsb_tarikanDindingDada : null,
    bsb_wheezing : null,
    bsb_saturasiOksigen : ''
}

const ansBatukReducer = (state = initState, action) => {
    switch(action.type){
        case 'BATUK':
            return Object.assign({}, state, {
                bsb : action.answer
            });
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
        case 'WHEEZING':
            return Object.assign({}, state, {
                bsb_wheezing : action.answer
            });
        case 'SATURASI_OKSIGEN':
            return Object.assign({}, state, {
                bsb_saturasiOksigen : action.answer
            });
        case 'RESET_BATUK':
            return Object.assign({}, state, 
                initState
            );
        default:
            return state;
    }
}

export default ansBatukReducer;