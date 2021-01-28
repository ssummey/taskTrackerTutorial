import PropTypes from 'prop-types'
import Button from "./button";

const Header = ({ title, onAdd, showAdd}) => {

    return (
        <header className='header'>
            {/*<h1 style={headingStyle}>{props.title}</h1>*/}
            <h1>{title}</h1>
            <Button color={showAdd ? 'red' : 'green'} text={showAdd ? 'Close' : 'Add'} onClick={onAdd}/>

        </header>
    )
}

// Default props optional
Header.defaultProps = {
    title: 'Task Tracker',
}

// Require type for headers using propTypes
// .isRequired makes it required obviously
Header.propTypes = {
    title: PropTypes.string.isRequired,
}

//css in js
// const headingStyle = {
//     color: 'red',
//     backgroundColor: 'black'
// }

export default Header