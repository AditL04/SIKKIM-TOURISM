function Navbar({ onLanguageChange }) {
    return (
        <nav>
            <button onClick={() => onLanguageChange('en')}>English</button>
            <button onClick={() => onLanguageChange('hi')}>Hindi</button>
        </nav>
    );
}
