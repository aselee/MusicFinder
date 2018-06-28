import { connect } from 'react-redux';
import Artist from '../components/Artist';

function mapStateToProps(state) {
    return {
        artists: state.artist
    };
}

export default connect(mapStateToProps)(Artist);