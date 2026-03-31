export default function VenatorEscapePage() {
    return (
        <div style={{ width: '100%', minHeight: '100vh', background: '#000' }}>
            <iframe
                src='https://derec4.github.io/Last-Stand/'
                title='Venator Escape Game'
                style={{
                    width: '100%',
                    height: '80vh',
                    border: 'none',
                    display: 'block',
                    margin: '0 auto',
                    background: '#000',
                }}
                allowFullScreen
            />
        </div>
    );
}
