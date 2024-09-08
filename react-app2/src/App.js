import Todo from './component/Todo';


function App() {
    return (
        <div>
            <h1>My Todos</h1>
            <Todo text={'value1'} />
            <Todo text={'value2'} />
            <Todo text={'value3'} />

        </div>
    );
}

export default App;
