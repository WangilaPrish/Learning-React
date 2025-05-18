import Button from './components/Button'

const App = () => {
    return (
        <div>
            <Button label="Click me" onClick={() => alert('Button clicked!')} disabled={false} />
            <Button label="Disabled" onClick={() => alert('Button clicked!')} disabled={true} />
        </div>
    )
}

export default App
