import { connect } from 'react-redux';
import Artist from '../components/Artist';

function mapStateToProps(state) {
    // console.log(state)
    return {
        events: state.events
    };
}

export default connect(mapStateToProps)(Artist);